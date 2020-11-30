import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import TimelineIcon from '@material-ui/icons/Timeline';
import InfoIcon from '@material-ui/icons/Info';
export const sidebarItems = [
  {
    title: "COVID-19 Tracker",
    path: "/",
    icon: <TimelineIcon/>,
    cName: "sidebar__text"
  },
  {
    title: "Vaccine Info",
    path: "/vaccine",
    icon: <LocalHospitalIcon/>,
    cName: "sidebar__text"
  },
  
]