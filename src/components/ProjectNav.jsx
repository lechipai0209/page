import React, { useState, useEffect, useRef } from 'react'
import './ProjectNav.css'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

function ProjectNav() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { language } = useLanguage()
  const navRef = useRef(null)

  const workExperiences = content.workExperience[language]
  const sideProjects = content.sideProjects[language]
  const sectionTitles = content.sections[language]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div ref={navRef} className={`project-nav ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="collapse-toggle"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
      >
        {isCollapsed ? '◀' : '▶'}
      </button>

      {!isCollapsed && (
        <div className="nav-content">
          <h3 className="nav-title">
            {language === 'en' ? 'Quick Navigation' : '快速導航'}
          </h3>

          <div className="nav-section">
            <h4 className="nav-section-title">{sectionTitles.workExperience}</h4>
            <ul className="nav-list">
              {workExperiences.map((exp, index) => (
                <li key={index}>
                  <button
                    className="nav-link"
                    onClick={() => scrollToSection(`work-exp-${index}`)}
                  >
                    {exp.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            <h4 className="nav-section-title">{sectionTitles.sideProjects}</h4>
            <ul className="nav-list">
              {sideProjects.map((project, index) => (
                <li key={index}>
                  <button
                    className="nav-link"
                    onClick={() => scrollToSection(`side-project-${index}`)}
                  >
                    {project.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            <button
              className="nav-link section-link"
              onClick={() => scrollToSection('education')}
            >
              {sectionTitles.education}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectNav
