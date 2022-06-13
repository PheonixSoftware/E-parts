import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "../../../images/fb.svg";
import InstagramIcon from "../../../images/instagram.svg";
import logo from "../../../images/pheonix.png"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/pheonixproductionsltd";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0"  }}
              src={logo}
              alt="Pheonix Productions"
            />
            <h2>Pheonix Productions Ltd.</h2>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Pheonix Productions Ltd. is a leading Pakistan owned, international developer of quality, results-focused websites and digital marketing tools and services for all kind of businesses.
            </span>
            <br/>
            <br/>
            <h2>Our Vision</h2>
            <br/>
            
            <span>
            To deliver the best online solutions on an ongoing basis for our motivated clients that generate measurable, incremental, profitable growth for their business.
            </span>
            <br/>
            <br/>
            <h2>
              Our Mission
            </h2>
            <br/>
            <span>
            Our mission is to revolutionise the web presence of Australian SMEs by producing Responsive Websites, Email marketing, and Customer Relationship Management (CRM) tools that generate measurable results. 
            <br/>
            Our catalogue of tools and products are all developed in-house by a team of programming and graphic design experts, and undergo extensive testing to ensure they're easy to use, look fantastic, and achieve everything you want them to. 
            <br/>
            We also compliment all our websites with Digital Marketing services, where we are able to increase your businesses results via paid advertising, SEO, and Content Writing services. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Contact Us</h2>
            <a
              href="https://www.facebook.com/Atlas.Honda.pk"
              target="blank"
            >
              <img src={YouTubeIcon} />
            </a>

            <a href="https://instagram.com/pheonixproductionsltd" target="blank">
              <img src={InstagramIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
