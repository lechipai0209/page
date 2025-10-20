import { useState } from 'react'
import './SideProjects.css'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

function SideProjects() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const { language } = useLanguage()
  const sectionTitle = content.sections[language].sideProjects
  const projects = content.sideProjects[language]
  const buttons = content.buttons[language]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Function to convert **text** to bold
  const formatText = (text) => {
    if (!text) return text
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }

  return (
    <section id="side-projects" className="side-projects">
      <div className="section-container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              id={`side-project-${index}`}
              className={`project-card ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div className="card-header" onClick={() => toggleExpand(index)}>
                <div className="header-left">
                  <div className="title-row">
                    <h3 className="project-name">{project.name}</h3>
                    {project.status && project.name !== 'Medium Technical Blog' && project.name !== 'Medium 技術部落格' && (
                      <span className={`status-badge ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-header"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {buttons.viewBlog} →
                    </a>
                  )}
                </div>
                <div className="expand-icon">
                  {expandedIndex === index ? '−' : '+'}
                </div>
              </div>

              {/* Technologies visible even when collapsed */}
              <div className="technologies-preview">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="card-content">
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>

                {/* Detailed content section */}
                {project.detailedContent && (
                  <div className="project-details">
                    {/* New structure: intro + image + sections */}
                    {project.detailedContent.intro && (
                      <>
                        <p className="detail-paragraph" dangerouslySetInnerHTML={{ __html: formatText(project.detailedContent.intro) }}></p>

                        {project.detailedContent.image && (
                          <div className="detail-images">
                            <div className="detail-image-wrapper large">
                              <img src={project.detailedContent.image} alt={`${project.name} Architecture`} />
                            </div>
                          </div>
                        )}

                        {project.detailedContent.sections && project.detailedContent.sections.map((section, i) => (
                          <div key={i} className="detail-section">
                            <h4 className="section-subtitle">{section.title}</h4>
                            {section.content.map((para, j) => (
                              <p key={j} className="detail-paragraph" dangerouslySetInnerHTML={{ __html: formatText(para) }}></p>
                            ))}
                          </div>
                        ))}
                      </>
                    )}

                    {/* Old structure: paragraphs-based */}
                    {project.detailedContent.paragraphs && project.detailedContent.paragraphs.map((para, i) => (
                      <p key={i} className="detail-paragraph" dangerouslySetInnerHTML={{ __html: formatText(para) }}></p>
                    ))}

                    {project.detailedContent.codeBlock && (
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          borderRadius: '6px',
                          padding: '1.5rem',
                          margin: '1.5rem 0',
                          fontSize: '0.9rem'
                        }}
                      >
                        {project.detailedContent.codeBlock}
                      </SyntaxHighlighter>
                    )}

                    {project.detailedContent.afterCode && (
                      <p className="detail-paragraph" dangerouslySetInnerHTML={{ __html: formatText(project.detailedContent.afterCode) }}></p>
                    )}

                    {project.detailedContent.images && (
                      <div className="detail-images">
                        {project.detailedContent.images.map((img, i) => (
                          <div key={i} className="detail-image-wrapper">
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>
                    )}

                    {project.detailedContent.conclusion && (
                      <p className="detail-paragraph" dangerouslySetInnerHTML={{ __html: formatText(project.detailedContent.conclusion) }}></p>
                    )}
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

export default SideProjects
