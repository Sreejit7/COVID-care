import React from 'react'
import {ExternalLink} from 'react-external-link';
import './Headline.css';
function Headline({news}) {
  return (
    <div className = "headline">   
      <img className = "headline__image"
           src = {news.urlToImage}
           alt = ""
      />    
      <div className="headline__content">
        <ExternalLink href = {news.url}>
          <h2 className = "headline__title">{news.title}</h2>
        </ExternalLink>
        <p className = "news__author"> - By {news.author?news.author:news.source.name} at {news.publishedAt}</p>
        <p>{news.description}</p>
      </div>
     
    </div>
  )
}

export default Headline
