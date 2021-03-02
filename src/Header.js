import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import logo from './images/COVID_CARE.webp';
function Header() {
  return (
    <div className="app__navbar">
        <Sidebar/>
        <Link to = "/">
        <img className = "app__logo" src = {logo} alt = ""/>
        </Link>
    </div>
  )
}

export default Header
