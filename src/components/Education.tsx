import React from 'react';
import '../assets/styles/Education.scss';

interface EducationItem {
  university: string;
  degree: string;
  gpa: string;
  duration: string;
  relevantCourses: string[];
  isCurrent?: boolean;
}

function Education() {

  const educationData: EducationItem[] = [
    {
      university: 'San Diego State University',
      degree: 'Masters in Computer Science',
      gpa: '3.7',
      duration: 'August 2025 - May 2027',
      relevantCourses: ['Algorithms','Computer Networks', 'Database Management Systems', 'Data Science', 'Machine Learning'],
      isCurrent: true
    },
    {
      university: 'Nitte Meenakshi Institute of Technology',
      degree: 'Bachelor of Science in Computer Science and Engineering',
      gpa: '3.8',
      duration: 'July 2019 - June 2023',
      relevantCourses: ['Object Oriented Programming', 'Web Development', 'Cloud Computing', 'Operating Systems', 'Data Structures']
    }
  ];

  return (
    <div id="education">
      <div className="items-container">
        <div className="education_wrapper">
          <h1>Education</h1>
          <div className="education-container">
            {educationData.map((edu, index) => (
              <div key={index} className={`education-card ${edu.isCurrent ? 'current' : ''}`}>
                <div className="education-header">
                  <div className="header-top">
                    <h2>{edu.university}</h2>
                    {edu.isCurrent && <span className="current-badge">Currently Pursuing</span>}
                  </div>
                  <p className="duration">{edu.duration}</p>
                </div>
                <div className="education-body">
                  <p className="degree"><strong>Degree:</strong> {edu.degree}</p>
                  <p className="gpa"><strong>GPA:</strong> {edu.gpa}</p>
                  <div className="courses">
                    <strong>Relevant Courses:</strong>
                    <div className="courses-list">
                      {edu.relevantCourses.map((course, idx) => (
                        <span key={idx} className="course-badge">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
