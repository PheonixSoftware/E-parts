import React from "react";
import playStore from "../../../images/atlashonda.png";
//import appStore from "../../../images/Appstore.png";
import AdbIcon from "@material-ui/icons/TwoWheeler";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Facebook, Linkedin, Twitter } from 'react-feather';

import "./Footer.css";
import { Button, makeStyles } from "@material-ui/core";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useHistory } from "react-router-dom";


const Footer = () => {
  //const classes = useStyles();
  const navigate=useHistory();
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>FOR MORE INFORMATION</h4>
        <p>Visit Our Official Website</p>
        <img src={playStore} alt="Atlas Honda" style={{background:"white"}} href="https://www.atlasHonda.com.pk"/>
                
      </div>

      <div className="midFooter">
      
        <h1><AdbIcon style={{ /*display: { xs: "none", md: "flex" },*/ fontSize: 50 , mr: 4 }} /> E-Parts</h1>
        <p>The Right Parts from the Right People</p>

        <p>Copyrights 2022 &copy; Pheonix Productions Ltd.</p>
      </div>

      <div className="rightFooter">
        <h2>Follow Us</h2> 
         <ui >
         <ui><BsFacebook style={{fontSize:"30px"  }} href="https://www.facebook.com" /></ui>
        
         <ui>
        <BsTwitter href="https://www.twitter.com"style={{fontSize:"30px"}}/>
        </ui><ui><BsLinkedin href="https://www.linkedin.com"
         style={{fontSize:"30px"}}/>
         </ui>
</ui>
      </div>
    </footer>
  );
};

export default Footer;
