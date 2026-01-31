import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/styles/Main.scss';
import photo from "../assets/images/profilePicture.png";

function Main() {

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="container">
      <div className={`about-section ${isZoomed ? 'zoomed-active' : ''}`}>
        <div className="image-wrapper">
          <img 
            src={photo} 
            alt="Avatar" 
            onClick={() => setIsZoomed(true)}
            className="profile-image"
          />
          {isZoomed && (
            <div className="zoom-modal">
              <div className="zoom-content">
                <button className="close-button" onClick={() => setIsZoomed(false)}>
                  <CloseIcon />
                </button>
                <img src={photo} alt="Avatar Zoomed" className="zoomed-image" />
              </div>
            </div>
          )}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sanjanasujay" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sanjana6488527/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sanjana Sujay</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sanjanasujay" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sanjana6488527/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;