import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import VaccineInfo from './VaccineInfo';
import Header from './Header';
import Footer from './Footer';
import News from './News';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route path = "/vaccine">
          <VaccineInfo/>
        </Route>
        <Route path = "/news">
          <News/>
        </Route>
        <Route path = "/">
          <App />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

