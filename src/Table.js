import React from 'react'
import './Table.css';
import numeral from 'numeral';
function Table({countries,casesType, allTime}) {
  return (
    <div className="table">
      {countries.map (({country,cases,recovered,deaths, todayCases, todayDeaths, todayRecovered}) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong className = {(casesType === "recovered")?'table--green':'table--red'}>              
                {(casesType === "cases") && numeral(allTime? cases: todayCases).format("0,0")}
                {(casesType === "recovered") && numeral(allTime? recovered: todayRecovered).format("0,0")}
                {(casesType === "deaths") && numeral(allTime? deaths: todayDeaths).format("0,0")}   
            </strong>
          </td>
        </tr>
      ))}      
    </div>
  )
}

export default Table
