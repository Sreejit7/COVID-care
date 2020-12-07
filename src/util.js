import numeral from 'numeral';
import {Circle , Popup} from 'react-leaflet';
import './Map.css';
export const sortData = (data, casesType, allTime) => {
  let state = allTime.toString();
  let combinedState = casesType + "-" + state;
  let sortedData = [...data];
  switch(combinedState){
    case 'cases-true': return sortedData.sort((a,b) => (a.cases > b.cases? -1 : 1));
    case 'cases-false': return sortedData.sort((a,b) => (a.todayCases > b.todayCases? -1 : 1));
    case 'recovered-true':  return sortedData.sort((a,b) => (a.recovered > b.recovered? -1 : 1));
    case 'recovered-false': return sortedData.sort((a,b) => (a.todayRecovered > b.todayRecovered? -1 : 1));
    case 'deaths-true':  return sortedData.sort((a,b) => (a.deaths > b.deaths? -1 : 1));
    case 'deaths-false':  return sortedData.sort((a,b) => (a.todayDeaths > b.todayDeaths? -1 : 1));
    default:
  }
  
}
export const prettyPrintStat = (stat) => 
  stat? `+${numeral(stat).format("0.0a")}`: "+0";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 400,
  },
  recovered: {
    hex: "#63cc18",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 600,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 1000,
  },
};

export const showDataOnMap = (data, casesType) => 
  data.map((country) => (
    <Circle
      center = {[country.countryInfo.lat, country.countryInfo.long]}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
      pathOptions = {{
        color:casesTypeColors[casesType].hex,
        fillColor:casesTypeColors[casesType].hex,
        fillOpacity:0.4
      }}
    >
      <Popup>
        <div className = 'info-container'>
          <div className = 'info-flag' style = {{backgroundImage:`url(${country.countryInfo.flag})`}}/>
          <div className = 'info-name'>{country.country}</div>
          <div className = 'info-confirmed'>Cases: {numeral(country.cases).format("0,0")}</div>
          <div className = 'info-active'>Active: {numeral(country.active).format("0,0")}</div>
          <div className = 'info-recovered'>Recovered: {numeral(country.recovered).format("0,0")}</div>
          <div className = 'info-deaths'>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));
