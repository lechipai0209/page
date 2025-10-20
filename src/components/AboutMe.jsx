import './AboutMe.css'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

function AboutMe() {
  const { language } = useLanguage()
  const sectionTitle = content.sections[language].aboutMe
  const aboutMeData = content.aboutMe[language]

  return (
    <section id="about-me" className="about-me">
      <div className="section-container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="about-me-card">
          <p className="about-introduction">{aboutMeData.introduction}</p>
          {aboutMeData.highlights && aboutMeData.highlights.length > 0 && (
            <ul className="about-highlights">
              {aboutMeData.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
