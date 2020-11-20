import numeral from 'numeral';
import {Circle , Popup} from 'react-leaflet';
import './Map.css';
export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a,b) => (a.cases > b.cases? -1 : 1));
}
export const prettyPrintStat = (stat) => 
  stat? `+${numeral(stat).format("0.0a")}`: "+0";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 400,
  },
  recovered: {
    hex: "#A3CE78",
    multiplier: 800,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 1000,
  },
};

export const showDataOnMap = (data, casesType) => (
  data.map(country=> (
    <Circle
      center = {[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity = {0.4}
      color= {casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className = 'info-container'>
          <div className = 'info-flag' style = {{backgroundImage:`url(${country.countryInfo.flag})`}}/>
          <div className = 'info-name'>{country.country}</div>
          <div className = 'info-confirmed'>Cases: {numeral(country.cases).format("0,0")}</div>
          <div className = 'info-recovered'>Recovered: {numeral(country.recovered).format("0,0")}</div>
          <div className = 'info-deaths'>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ))
);
