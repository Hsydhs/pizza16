import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">


        <a href="https://www.instagram.com/dominos/" target="_blank">
        <InstagramIcon />
        </a>
        
        <a href="https://twitter.com/dominos" target="_blank">
         <TwitterIcon />
         </a>


        <a href="https://www.facebook.com/Dominos"  target="_blank">
         <FacebookIcon /> 
         </a>

         <a href="https://www.linkedin.com/company/domino's-pizza/" target="_blank">
         <LinkedInIcon />
         </a>
      </div>
      
    </div>
  );
}

export default Footer;