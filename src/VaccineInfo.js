import React,{useState,useEffect} from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
//import Popup from 'reactjs-popup';
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
        <img className = "vaccine__img" 
             src = "https://images.indianexpress.com/2020/11/COVID-19-Vaccine-3-1.jpg"
             alt = ""/> 
        <h1>COVID-19 VACCINE INFO</h1>
        <tr>
          <td><h2>Vaccine Name</h2></td>
          <td><h2 style = {{textAlign:"left",marginLeft:"50px"}}>Manufacturers</h2></td>
          <td><h2>Current Trial Phase</h2></td>
        </tr>
      </div>
      <div className = "vaccine__info">
        {vaccineData.map(({candidate, sponsors,trialPhase}) => (
          <tr>
            <td>
              <strong style = {{color:"#7d1b07",margin:"auto"}}>{candidate}</strong>
            </td>
            <td>{sponsors.map((item,index) => {
              return(                
                <li style = {{textAlign:"left",marginLeft:"50px"}} 
                    key = {index}>
                    {sponsors[0] !== "" ? item:" NA "}
                </li> 
              )
            })}</td>
            <td className = {trialPhase === 'Phase 3'?"trial--green":"trial--normal"}>{trialPhase}</td>
          </tr>
        ))}
      </div>
    </div>
  )
}

export default VaccineInfo
