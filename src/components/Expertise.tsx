import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCode } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
];

const labelsSecond = [
    "Python",
    "Java",
    "C/C++",
    "MySQL",
    "Git",
    "GitHub"
];

const labelsThird = [
    "Python",
    "Pandas",
    "NumPy",
    "Natural Language Processing",
    "Neural Machine Translation",
    "Random Forests",
    "k-Nearest Neighbors", 
    "Logistic Regression",
    "Support Vector Machines",
    "Clustering methods",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as HTML, CSS, JavaScript, React, and TypeScript. I have a strong proficiency and experience in the SDLC process and frontend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                   <h3>Software Development</h3>
                    <p>With a strong CS foundation from my UG and ongoing MS, I bring hands-on experience in data structures, algorithms, database management, and software design principles, while adhering to Agile and SDLC practices</p>
                   
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & ML</h3>
                    <p>AI/ML practitioner with experience in NLP and transformer models, including multilingual translation research.</p>
                    <p>Interested in Data Science and ML, with experience applying techniques such as Random Forests, k-Nearest Neighbors, Logistic Regression, Support Vector Machines, and Clustering methods to real-world datasets</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;