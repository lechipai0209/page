import React from 'react'
import './Education.css'

function Education() {
  const education = {
    university: "National Yang Ming Chiao Tung University",
    degree: "BS, Information Management and Finance",
    period: "Sep 2019 - Sep 2023",
    gpa: "3.9/4.3",
    awards: "Academic Reward × 1",
    english: "TOEFL 95 (R23, L25, S24, W23)",
    research: [
      {
        title: "Research Assistant (One Year)",
        lab: "Explainable AI Lab",
        link: "https://doi.org/10.1016/j.irfa.2023.103005",
        description: "Published research in International Review of Financial Analysis"
      },
      {
        title: "Algorithm Research Project (One Year)",
        topic: "Multiarm Slot Machine",
        link: "https://reurl.cc/YEb0RD",
        description: "Independent research on reinforcement learning algorithms"
      }
    ]
  }

  return (
    <section className="education">
      <div className="section-container">
        <h2 className="section-title">Education & Research</h2>

        <div className="education-card">
          <div className="edu-header">
            <div>
              <h3 className="university">{education.university}</h3>
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
              <span className="stat-label">Awards</span>
              <span className="stat-value">{education.awards}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">English</span>
              <span className="stat-value">{education.english}</span>
            </div>
          </div>

          <div className="research-section">
            <h4 className="research-title">Research Experience</h4>
            <div className="research-list">
              {education.research.map((item, index) => (
                <div key={index} className="research-item">
                  <div className="research-header">
                    <h5>{item.title}</h5>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-link"
                      >
                        View Publication →
                      </a>
                    )}
                  </div>
                  <p className="research-topic">
                    {item.lab && <strong>{item.lab}</strong>}
                    {item.topic && <strong>{item.topic}</strong>}
                  </p>
                  <p className="research-description">{item.description}</p>
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
