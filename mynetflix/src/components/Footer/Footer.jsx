import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import "./Footer.css"

function Footer() {
  return (
    <div  className="outterfooter">
        <div className="innerfooter">
            <div className="icons">
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
          <div  className="data1">
            <div>
                <ul>
                    <li>audio description</li>
                    <li>investor relations</li>
                    <li>legal notice</li>
                </ul>
            </div>
            <div>
             <ul>
                <li>Help center</li>
                <li>Investor relation</li>
                <li>legal notice</li>
                
             </ul>
            </div>
            <div>
                <ul>
                    <li>gift cards</li>
                    <li>  terms and use</li>
                    <li>cooparate information</li>

                </ul>
            </div>
           <div>
            <ul>
                <li>media center</li>
                <li>privacy</li>
                <li> contact us</li>
            
            </ul>
           </div>
          </div>
        <div className="service">
            <p>
                service code
            </p>
        </div>

          <div className="copy-write">
            &copy;  1997-2024 Netflix,Inc.
          </div>
          
        </div>
    </div>

  )
}

export default Footer