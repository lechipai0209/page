import React, { useState } from 'react'
import './WorkExperience.css'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const { language } = useLanguage()

  const sectionTitle = content.sections[language].workExperience
  const experiences = content.workExperience[language]
  const buttons = content.buttons[language]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="work-experience">
      <div className="section-container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div className="card-header" onClick={() => toggleExpand(index)}>
                <div className="header-left">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-subtitle">{exp.subtitle}</p>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="separator">•</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <div className="expand-icon">
                  {expandedIndex === index ? '−' : '+'}
                </div>
              </div>

              <div className="card-content">
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                {exp.architecture && (
                  <div className="architecture-section">
                    <h4 className="architecture-title">{buttons.systemArchitecture}</h4>
                    <div className="architecture-image-container">
                      <img
                        src={exp.architecture.image}
                        alt="System Architecture Diagram"
                        className="architecture-image"
                      />
                    </div>
                    <p className="architecture-description">
                      {exp.architecture.description}
                    </p>
                  </div>
                )}

                {exp.workflow && (
                  <div className="architecture-section">
                    <h4 className="architecture-title">{buttons.workflow}</h4>
                    <div className="architecture-image-container">
                      <img
                        src={exp.workflow.image}
                        alt="Workflow Diagram"
                        className="architecture-image"
                      />
                    </div>
                    <p className="architecture-description">
                      {exp.workflow.description}
                    </p>
                  </div>
                )}

                {exp.monitoring && (
                  <div className="architecture-section">
                    <h4 className="architecture-title">{buttons.monitoring}</h4>
                    <div className="architecture-image-container">
                      <img
                        src={exp.monitoring.image}
                        alt="API Monitoring"
                        className="architecture-image"
                      />
                    </div>
                    <p className="architecture-description">
                      {exp.monitoring.description}
                    </p>
                  </div>
                )}

                {exp.lineMenu && (
                  <div className="architecture-section">
                    <h4 className="architecture-title">{buttons.lineIntegration}</h4>
                    <div className="line-screenshots">
                      {exp.lineMenu.images.map((img, i) => (
                        <div key={i} className="screenshot-container">
                          <img
                            src={img}
                            alt={`LINE App Screenshot ${i + 1}`}
                            className="line-screenshot"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="architecture-description">
                      {exp.lineMenu.description}
                    </p>
                  </div>
                )}

                {exp.database && (
                  <div className="architecture-section">
                    <h4 className="architecture-title">{buttons.databaseSchema}</h4>
                    <div className="architecture-image-container">
                      <img
                        src={exp.database.image}
                        alt="Database Schema"
                        className="architecture-image"
                      />
                    </div>
                    <p className="architecture-description">
                      {exp.database.description}
                    </p>
                  </div>
                )}

                {exp.searchSystem && (
                  <div className="architecture-section">
                    <h4 className="architecture-title">{buttons.searchSystem}</h4>
                    <div className="architecture-image-container">
                      <img
                        src={exp.searchSystem.image}
                        alt="Search System Architecture"
                        className="architecture-image"
                      />
                    </div>
                    <p className="architecture-description">
                      {exp.searchSystem.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
