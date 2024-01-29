import React from 'react'
import "./Header.css"
 import  SearchIcon from '@mui/icons-material/Search';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import    Netflixlog from '../../assets/net.png'
function Header() {
  return (
    <div className="outterwarper">

      <div className="warper">
     <div className="leftwarper">
      <ul>
    <li><img src={Netflixlog}  width="100"></img></li>
    <li> Home</li>
    <li>movies</li>
    <li>latest</li>
    <li>my lists</li>
    <li>browserbylanguage</li>
    </ul>

    </div>
    <div  className="rightwarper">
      <ul>
        <li><SearchIcon/></li>
        <li><NotificationsNoneIcon/></li>
        <li><AccountBoxIcon/></li>
        <li><ArrowDropDownIcon/></li>

      </ul>
    </div>
    </div>
    </div>
    
  )
  
}

export default Header