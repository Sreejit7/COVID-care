import React,{useEffect, useState} from 'react'
import Headline from './Headline';
import './News.css';
function News() {
  const [newsList, setNewsList] = useState([]);
  const currentDate = new Date().toISOString().slice(0,10);
  //console.log(currentDate);
  
  useEffect(() => {
    
    const url = 'https://newsapi.org/v2/top-headlines?' +
          'q=Covid&' +
          `from=${currentDate}&` +
          'language=en&' +
          'sortBy=popularity&' +
          'apiKey=ed9861bb6155418f9ed08909df48c54d';
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
      <h1>COVID-19 HEADLINES</h1>
      {newsList.map((news) => (
        <Headline news = {news}/>
      ))}
    </div>
  )
}

export default News
