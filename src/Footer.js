import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import logo from './images/COVID_CARE.webp';
function Footer() {
  return (
    <div className = "footer">
      <div className="footer__items">
        <Link to = '/'>
          <img className = "footer__logo" src = {logo} alt = ""/>
        </Link>
        <span> | All rights reserved &#169;</span>
      </div>
    </div>
  )
}

export default Footer
