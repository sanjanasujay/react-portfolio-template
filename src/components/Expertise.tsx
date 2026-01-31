import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,  faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCode, faChartBar } from "@fortawesome/free-solid-svg-icons";

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

const labelsFourth = [
    "Pandas",
    "NumPy",
    "SQL",
    "Excel",
    "Tableau",
    "Power BI",
    "Statistical Analysis",
    "Data Visualization",
    "A/B Testing",
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
                    <p>I specialize in building scalable, user-focused web applications from the ground up using modern technologies such as HTML, CSS, JavaScript, React, and TypeScript. With strong proficiency across the Software Development Life Cycle (SDLC), I bring ideas from concept to production with clean, maintainable code and thoughtful architecture. My expertise lies in frontend development, where I focus on performance, accessibility, and delivering intuitive user experiences that align with both technical and business goals.</p>
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
                    <p>With a solid computer science background and hands-on development experience, I design and build reliable software solutions that are scalable, efficient, and easy to maintain. I bring a disciplined approach to problem-solving, clean code, and collaboration, consistently delivering value in fast-paced development environments.</p>
                   
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Artificial Intelligence & Machine Learning</h3>
                    <p>AI/ML practitioner with hands-on experience in natural language processing and transformer-based models, including research work in multilingual machine translation.</p>
<p>Strong interest in data science and machine learning, with practical experience applying supervised and unsupervised algorithms such as Random Forests, k-Nearest Neighbors, Logistic Regression, Support Vector Machines, and clustering techniques to real-world datasets.</p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Analysis & Business Analysis</h3>
                    <p>Highly interested in data analysis, with hands-on experience working on group projects involving dataset analysis, report creation, and dashboard development. Familiar with transforming raw data into meaningful visualizations and insights that support informed decision-making.</p>

                    <div className="flex-chips">
                        <span className="chip-title">Tools & techniques:</span>
                        {labelsFourth.map((label, index) => (
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