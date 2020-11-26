import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
function Header() {
  return (
    <div className="app__navbar">
        <Sidebar/>
        <Link to = "/">
          <h1 className="app__title">COVID CARE</h1>
        </Link>
    </div>
  )
}

export default Header
