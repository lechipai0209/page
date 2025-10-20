import React, { useState } from 'react'
import './Education.css'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const { language } = useLanguage()
  const sectionTitle = content.sections[language].education
  const education = content.education[language]
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
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">{sectionTitle}</h2>

        <div className="education-card">
          <div className="edu-header">
            <div>
              <h3 className="university">
                <a
                  href={language === 'en' ? "https://www.nycu.edu.tw/nycu/en/index" : "https://www.nycu.edu.tw/nycu/ch/index"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="university-link"
                >
                  {education.university}
                </a>
              </h3>
              <p className="degree">{education.degree}</p>
            </div>
            <span className="period">{education.period}</span>
          </div>

          <div className="edu-stats">
            <div className="stat-item">
              <span className="stat-label">GPA</span>
              <span className="stat-value">{education.gpa}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">{language === 'en' ? 'Awards' : '獎項'}</span>
              <span className="stat-value">{education.awards}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">{language === 'en' ? 'English' : '英文'}</span>
              <span className="stat-value">{education.english}</span>
            </div>
          </div>

          <div className="research-section">
            <h4 className="research-title">{education.researchTitle}</h4>
            <div className="research-list">
              {education.research.map((item, index) => (
                <div key={index} id={`research-${index}`} className={`research-item ${expandedIndex === index ? 'expanded' : ''}`}>
                  <div className="research-header" onClick={() => item.detailedContent && toggleExpand(index)} style={{ cursor: item.detailedContent ? 'pointer' : 'default' }}>
                    <div className="research-header-left">
                      <h5>{item.title}</h5>
                      <p className="research-topic">
                        {item.lab && <strong>{item.lab}</strong>}
                        {item.topic && <strong>{item.topic}</strong>}
                      </p>
                      <p className="research-description">{item.description}</p>
                    </div>
                    <div className="research-header-right">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="research-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {buttons.viewPublication} →
                        </a>
                      )}
                      {item.detailedContent && (
                        <div className="expand-icon">
                          {expandedIndex === index ? '−' : '+'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Detailed content section */}
                  {item.detailedContent && (
                    <div className="research-content">
                      <div className="research-details">
                        {item.detailedContent.image ? (
                          // Layout with image (explainableAI)
                          <>
                            <div className={`detail-row-horizontal ${item.detailedContent.workSection ? 'has-work-section' : ''}`}>
                              <div className="detail-text-section">
                                <p className="detail-intro" dangerouslySetInnerHTML={{ __html: formatText(item.detailedContent.intro) }}></p>
                                <ol className="detail-steps">
                                  {item.detailedContent.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                  ))}
                                </ol>
                                <p className="detail-result">{item.detailedContent.result}</p>

                                {/* Old structure: Work section on left side - same level */}
                                {item.detailedContent.workTitle && (
                                  <>
                                    <h5 className="work-subtitle">{item.detailedContent.workTitle}</h5>
                                    <p className="work-intro">{item.detailedContent.workIntro}</p>
                                    <ol className="work-items">
                                      {item.detailedContent.workItems.map((workItem, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: formatText(workItem) }}></li>
                                      ))}
                                    </ol>
                                    {item.detailedContent.finalResult && (
                                      <p className="work-final-result">{item.detailedContent.finalResult}</p>
                                    )}
                                  </>
                                )}
                              </div>

                              <div className="detail-image-section">
                                <img src={item.detailedContent.image} alt="Research Architecture" />
                              </div>
                            </div>

                            {/* New structure: Work section full-width below */}
                            {item.detailedContent.workSection && (
                              <div className="work-section-full">
                                <h5 className="work-subtitle">{item.detailedContent.workSection.title}</h5>
                                <p className="work-intro">{item.detailedContent.workSection.intro}</p>
                                <ol className="work-items">
                                  {item.detailedContent.workSection.items.map((workItem, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: formatText(workItem) }}></li>
                                  ))}
                                </ol>
                                {item.detailedContent.workSection.finalResult && (
                                  <p className="work-final-result">{item.detailedContent.workSection.finalResult}</p>
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          // Layout without image (algorithm research)
                          <div className="detail-text-full">
                            <p className="detail-intro" dangerouslySetInnerHTML={{ __html: formatText(item.detailedContent.intro) }}></p>
                            {item.detailedContent.mainResearch && (
                              <p className="detail-main-research" dangerouslySetInnerHTML={{ __html: formatText(item.detailedContent.mainResearch) }}></p>
                            )}
                            {item.detailedContent.implementation && (
                              <p className="detail-implementation">{item.detailedContent.implementation}</p>
                            )}
                            {item.detailedContent.algorithms && (
                              <ul className="detail-algorithms">
                                {item.detailedContent.algorithms.map((algo, i) => (
                                  <li key={i} dangerouslySetInnerHTML={{ __html: formatText(algo) }}></li>
                                ))}
                              </ul>
                            )}
                            {item.detailedContent.extension && (
                              <p className="detail-extension" dangerouslySetInnerHTML={{ __html: formatText(item.detailedContent.extension) }}></p>
                            )}

                            {/* Work section */}
                            <h5 className="work-subtitle">{item.detailedContent.workTitle}</h5>
                            <ol className="work-items">
                              {item.detailedContent.workItems.map((workItem, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: formatText(workItem) }}></li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
