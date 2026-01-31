import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {

  const contactInfo = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'ssujay7188@sdsu.edu',
      link: 'mailto:ssujay7188@sdsu.edu'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (619) 278-9631',
      link: 'tel:+16192789631'
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanjana6488527/',
      link: 'https://www.linkedin.com/in/sanjana6488527/'
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'github.com/sanjanasujay',
      link: 'https://github.com/sanjanasujay'
    }
  ];

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="contact-info">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.label !== 'Email' && info.label !== 'Phone' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <IconComponent className="contact-icon" />
                  <div className="contact-details">
                    <h3>{info.label}</h3>
                    <p>{info.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;