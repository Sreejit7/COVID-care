import React from 'react'
import './Table.css';
import numeral from 'numeral';
function Table({countries,casesType}) {
  return (
    <div className="table">
      {countries.map (({country,cases,recovered,deaths}) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong className = {(casesType === "recovered")?'table--green':'table--red'}>              
                {(casesType === "cases") && numeral(cases).format("0,0")}
                {(casesType === "recovered") && numeral(recovered).format("0,0")}
                {(casesType === "deaths") && numeral(deaths).format("0,0")}   
            </strong>
          </td>
        </tr>
      ))}      
    </div>
  )
}

export default Table
