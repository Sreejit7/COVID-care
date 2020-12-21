import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import TimelineIcon from '@material-ui/icons/Timeline';
import WhatshotIcon from '@material-ui/icons/Whatshot';
export const sidebarItems = [
  {
    title: "COVID-19 Tracker",
    path: "/",
    icon: <TimelineIcon/>,
    cName: "sidebar__text"
  },
  {
    title: "COVID-19 Vaccine Info",
    path: "/vaccine",
    icon: <LocalHospitalIcon/>,
    cName: "sidebar__text"
  },
  {
    title: "Latest COVID-19 Headlines",
    path: "/news",
    icon:  <WhatshotIcon/>,
    cName: "sidebar__text"
  }
  
]