import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2023 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Assistant - San Diego State University</h3>
            <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
            <p>Managed digital content for the College of Sciences website via Modern Campus. Concurrently developed Python scripts to automate research data analysis, cutting manual processing time by 30% and eliminating human error to improve data integrity.</p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2023 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Content Developer - Hewlett Packard Enterprise</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
            <p>Developed web-based training courses on HPE's storage products using React JS, TypeScript, JavaScript.</p>
            <p>Delivered technical training courses at HPE covering Storage Area Network (SAN) technologies, enterprise storage servers, and big data solutions such as HPE Ezmeral Runtime Enterprise, as well as cloud-focused offerings including HPE Private Cloud AI and HPE GreenLake solutions.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2023 - August 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Content Developer Intern - Hewlett Packard Enterprise</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
            <p>
              Developed web-based training courses on HPE's storage products using HTML, CSS, JavaScript.
            </p>
            <p>Delivered technical training courses at HPE on enterprise storage servers and on cloud offerings of HPE GreenLake.</p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;