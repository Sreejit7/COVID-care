import React,{useState} from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import {sidebarItems} from "./sidebarItems";
import './Sidebar.css';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <div className='sidebar'>        
        <div >
            <Link to="#" className='sidebar__icon'>
                <ReorderIcon fontSize = 'large' onClick={showSidebar} style={{color:'#fff'}}/>
            </Link>
        </div>
        <nav className={sidebar?'sidebar__menu active':'sidebar__menu'}>
            <ul className='sidebar__items' onClick={showSidebar}>                
                <li className='sidebar__toggle'>
                    <Link to='#' className='sidebar__icon'>
                        <CloseIcon fontSize='large' style={{color:'#fff'}}/>
                    </Link>
                </li>
                {sidebarItems.map((item,index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </div>
    )
}

export default Sidebar
