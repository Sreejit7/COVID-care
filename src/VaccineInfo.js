import React,{useState,useEffect} from 'react';
import {Popup} from 'react-leaflet';
import './VaccineInfo.css';
function VaccineInfo() {
  const [vaccineData, setVaccineData] = useState([]);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/vaccine")
    .then((response) => response.json())
    .then((data) =>{
      setVaccineData(data.data);
      //console.log(data);
      console.log(data.data);
    })
  },[])
  return (
    <div className = "vaccine__page">
      <div className="vaccine__header">
        <h1>COVID-19 VACCINE INFO</h1>
        <tr>
          <td><h2>Vaccine Name</h2></td>
          <td><h2 style = {{textAlign:"left",marginLeft:"50px"}}>Manufacturers</h2></td>
          <td><h2>Current Trial Phase</h2></td>
        </tr>
      </div>
      <div className = "vaccine__info">
        {vaccineData.map(({candidate,sponsors,trialPhase}) => (
          <tr>
            <td><strong style = {{color:"#7d1b07",margin:"auto"}}>{candidate}</strong>
            </td>
            <td>{sponsors.map((item,index) => {
              return(
                <li style = {{textAlign:"left",marginLeft:"50px"}} key = {index}>{item}</li>
              )
            })}</td>
            <td>{trialPhase}</td>
          </tr>
        ))}
      </div>
    </div>
  )
}

export default VaccineInfo
