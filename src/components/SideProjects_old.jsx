import React from 'react'
import './SideProjects.css'

function SideProjects() {
  const projects = [
    {
      name: "Chain-Split",
      description: "Onchain Bill Split Project",
      status: "Ongoing",
      technologies: ["Rust", "Solana", "Javascript", "Firebase", "React Native", "NoSQL", "Claude code"],
      highlights: [
        "Used Claude AI to assist coding, reducing development time by 50%",
        "Use Firestore & Functions as backend to monitor on-chain addresses and update data.",
        "Containerize project by Docker, setting up a GitHub Action to automatically deploy code to EC2."
      ],
      link: null
    },
    {
      name: "Medium Technical Blog",
      description: "Technical Writing & Knowledge Sharing",
      status: "Active",
      technologies: ["JavaScript", "Rust", "Algorithms", "Technical Writing"],
      highlights: [
        "Authored articles on JavaScript and Rust, explaining complex concepts through clear, example-driven writing.",
        "Explained algorithms by comparing similar approaches to highlight subtle differences and design intentions."
      ],
      link: "https://medium.com/@king0209king0209"
    }
  ]

  return (
    <section className="side-projects">
      <div className="section-container">
        <h2 className="section-title">Side Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Blog →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SideProjects
