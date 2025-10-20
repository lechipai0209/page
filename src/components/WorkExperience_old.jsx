import React, { useState } from 'react'
import './WorkExperience.css'

function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const experiences = [
    {
      title: "ARhero Backend Design",
      subtitle: "Mobile Game App",
      company: "Agtop",
      period: "Aug 2024 - Aug 2025",
      location: "Taipei, Taiwan",
      role: "Jr. Backend Engineer",
      technologies: ["NodeJS", "SQL", "React", "AWS", "Docker"],
      achievements: [
        "Independently developed multimedia API, database schema, business logic, and frontend admin interface.",
        "Leveraged Draw.io to map development workflows, increasing team cooperation efficiency by 30%.",
        "Automated deployment, reducing 50% of time spent on Docker setup and test/product environments switching.",
        "Reduced 40% data collection time by Implementing GoAccess to monitor daily API call logs."
      ],
      architecture: {
        image: "/arhero-architecture.png",
        description: "System Architecture: React + MUI admin panel, Node.js backend with Sequelize ORM connecting to MySQL database. Containerized with Docker and deployed on AWS EC2 with GitLab version control."
      }
    },
    {
      title: "Dental Clinics Services System",
      subtitle: "B2B Project",
      company: "Agtop",
      period: "Aug 2024 - Aug 2025",
      location: "Taipei, Taiwan",
      role: "Jr. Backend Engineer",
      technologies: ["NodeJS", "SQL", "React", "AWS", "Docker", "Line LIFF", "Google Sheet API"],
      achievements: [
        "Reduced 99% paper cost and 60% communication time for both the dental supply company and clinics.",
        "Integrated all APIs into LINE Menu, giving users 100% mobile access to authentication, checks, and bookings.",
        "Sent automated maintenance notifications, reducing clinics' chance of missing service by 50%.",
        "Developed a temporary Google Sheets API before frontend launch, enabling clients to manage backend data and saving 70% of their access/edit time."
      ]
    },
    {
      title: "AI Tools Research",
      subtitle: "Internal R&D",
      company: "Agtop",
      period: "Aug 2024 - Aug 2025",
      location: "Taipei, Taiwan",
      role: "Jr. Backend Engineer",
      technologies: ["ElasticSearch", "ChromaDB", "LangChain", "MCP", "Text Search", "Cline", "Vector Search"],
      achievements: [
        "Tested local small model (Breeze2-8B) and explored applications integrating LangChain and Tool Use.",
        "Provided a local music generation tool, MusicGPT, for ARhero, reducing OpenAI API costs by 80%.",
        "Built a prototype local internal search system enabling cross-format searches (images and text as input/output), achieving 75% accuracy and reducing search time by 30%."
      ]
    }
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="work-experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="card-header">
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
                    <h4 className="architecture-title">System Architecture</h4>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
