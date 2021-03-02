import { FormControl, MenuItem, Select,Card, CardContent} from "@material-ui/core";
import React,{useEffect, useState} from "react";
import InfoBox from './Infobox';
import Map from './Map';
import Table from './Table';
import LineGraph from './LineGraph';
import './App.css';
import "leaflet/dist/leaflet.css";
import { prettyPrintStat, sortData } from "./util";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryName, setCountryName] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [allTime, setAllTime] = useState(true);
  useEffect(() =>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    });
    console.log("Hi!! Welcome to COVID-CARE!");
    console.log("COVID-CARE is a website designed for keeping track of COVID-19 pandemic data, vaccine details and news related to the pandemic.");
    console.log("You can check out the GitHub repository if you are interested in contributing to COVID-CARE:");
    console.log('https://github.com/Sreejit7/COVID-care');
  },[])
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        let sortedData = sortData(data,casesType, allTime);
        setTableData(sortedData);
        setCountries(countries);
        setMapCountries(data);
      });
    };
    getCountries();
  },[casesType, allTime])
  const onCountryChange = async(e) => {

      const countryCode = e.target.value;
      

      const url = countryCode === 'worldwide' 
      ?'https://disease.sh/v3/covid-19/all'
      :`https://disease.sh/v3/covid-19/countries/${countryCode}`;

      await fetch(url)  
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryName(countryCode === 'worldwide'? "Worldwide" :data.country);
        setCountryInfo(data);
        setMapCenter((countryCode === 'worldwide')?[34.80746, -40.4796]:[data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
        setMapCenter();
        setMapZoom(4);
        //console.log(data.countryInfo.lat,data.countryInfo.long);
      });   
      
      //console.log(countryInfo);
  };
  
  return (
    <div className="app">
      <div className="app__body">
        <div className="app__left">
          <div className = "app__header">
            <h1 className = {casesType === "recovered"?"app__header-gr":"app__header-red"}>COVID-19 TRACKER</h1>
            <FormControl className = "app__dropdown">
              <Select variant = "outlined" onChange = {onCountryChange} value = {country}>
                <MenuItem value = "worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                    <MenuItem value = {country.value}>{country.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div className="app__stats">
            <InfoBox 
              isRed
              active = {casesType === "cases"}
              onClick = {() => setCasesType("cases")} 
              title = "Coronavirus cases" 
              cases = {prettyPrintStat(countryInfo.todayCases)} 
              total = {prettyPrintStat(countryInfo.cases)}/>
            <InfoBox 
              active = {casesType === "recovered"}
              onClick = {() => setCasesType("recovered")} 
              title = "Recovered" 
              cases = {prettyPrintStat(countryInfo.todayRecovered)} 
              total = {prettyPrintStat(countryInfo.recovered)}/>
            <InfoBox
              isRed 
              active = {casesType === "deaths"}
              onClick = {() => setCasesType("deaths")} 
              title = "Deaths" 
              cases = {prettyPrintStat(countryInfo.todayDeaths)} 
              total = {prettyPrintStat(countryInfo.deaths)}/>
          </div>
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />

        </div>
        <Card className="app__right">
        <CardContent>
          <div className="table__button">
            <h4> Showing Data For: </h4>
            <button className = {allTime?'button-disabled':'button-enabled'} onClick = {() => setAllTime(false)}>Last 24h</button>
            <button className = {!allTime?'button-disabled':'button-enabled'} onClick = {() => setAllTime(true)}>All-Time</button>
          </div>
          <h3 style = {{textAlign:"center"}}>Live {casesType} by Country</h3>
          <Table countries = {tableData} casesType = {casesType} allTime = {allTime}/>
          <h3 style = {{textAlign:"center"}} className = 'app__graphTitle'>{countryName} {casesType} timeline</h3>
          <LineGraph className = "app__graph" casesType = {casesType} country = {country}/>
        </CardContent>
      </Card>
      </div>
    </div>

  );
}

export default App;
