import React,{useEffect, useState} from 'react'
import Headline from './Headline';
import './News.css';
function News() {
  const [newsList, setNewsList] = useState([]);
  const currentDate = new Date().toISOString();
  //console.log(currentDate);
  
  useEffect(() => {
    const url = 'https://gnews.io/api/v4/search?q=Covid&lang=en&sortby=publishedAt&token=f556748f6689e5c7a5c0444335cded03';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      setNewsList(data.articles);
    })
    .catch((err) => console.log(err.message));
  }, []);
  //console.log(newsList);
  
  return (
    <div className = "covid__news">
      <h1>TOP 10 COVID-19 HEADLINES</h1>
      {newsList.map((news) => (
        <Headline news = {news}/>
      ))}
    </div>
  )
}

export default News
