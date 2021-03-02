import React , {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
const casesTypeColors = {
  cases: {
    hex: "#A00205",
    hex2: "#CB4245",
    multiplier: 400,
  },
  recovered: {
    hex: "#3F7707",
    hex2: "#A3CE78",
    multiplier: 600,
  },
  deaths: {
    hex: "#A00205",
    hex2: "#CB4245",
    multiplier: 1000,
  },
};
const buildChartData = (data, casesType) => {
  const chartData = [];
  let lastDataPoint;
    for (let date in data.cases) {
      if(lastDataPoint){
        let newDataPoint = {
          x: date,
          y: (data[casesType][date] - lastDataPoint) < 0? 0: data[casesType][date] - lastDataPoint
        }
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
      
    }  
  return chartData;
};
function LineGraph({casesType, country, ...props}) { 
  const [data, setData] = useState({});
  const [noData, setNoData] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const url = country === "worldwide" ? "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
                              : `https://disease.sh/v3/covid-19/historical/${country}?lastdays=120`;
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setNoData(false);
          let chartData = country === "worldwide"? buildChartData(data, casesType) : buildChartData(data.timeline, casesType);
          setData(chartData);
        })
        .catch( err => setNoData(true));
    };

    fetchData();
  }, [casesType, country]);

  return (
    <div className = {props.className}>
      {!noData && data?.length > 0 && (
        <Line  
        options = {options}
        data = {{
          datasets:[
            { 
              backgroundColor: `${casesTypeColors[casesType].hex2}`,
              borderColor: `${casesTypeColors[casesType].hex}`,
              data: data
            },
          ],
        }}
      />
      )}
      {noData && 
          <strong style = {{margin:"auto", padding:"5px"}}>
              Sorry, no data history found for this coutry
          </strong>
      }      
    </div>
  )
}

export default LineGraph
