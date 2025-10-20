import React, { useState, useEffect } from 'react'
import './Header.css'
import { useLanguage } from '../contexts/LanguageContext'
import { content } from '../data/content'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const headerContent = content.header[language]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const workExperiences = content.workExperience[language]
  const sideProjects = content.sideProjects[language]
  const sectionTitles = content.sections[language]
  const educationData = content.education[language]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  return (
    <>
      <header className="header">
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'en' ? '中文' : 'English'}
        </button>
        <div className="header-content">
          <h1 className="name">{headerContent.name}</h1>
          <div className="contact-info">
            <a href="https://github.com/chi-white" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🔗</span> {headerContent.links.github}
            </a>
            <a href="mailto:king0209king0209@gmail.com" className="contact-link">
              <span className="icon">✉️</span> {headerContent.links.email}
            </a>
            <a href="tel:+886978359751" className="contact-link">
              <span className="icon">📱</span> (+886) 978-359-751
            </a>
          </div>
          <div className="resume-download">
            <a
              href={language === 'en' ? '/Pai Le-Chi_resume_Official(E).pdf' : '/Pai Le-Chi_resume_Official(C).pdf'}
              download={language === 'en' ? 'PAI_LECHI_resume.pdf' : '白樂祺履歷.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              {headerContent.links.resume}
            </a>
          </div>
        </div>
      </header>

      {/* 固定的導航欄 - Web版 */}
      <nav className={`sticky-nav ${isScrolled ? 'visible' : ''}`}>
        <div className="sticky-nav-content">
          <div className="sticky-nav-left">
            <button onClick={scrollToTop} className="nav-name">
              {headerContent.name}
            </button>
          </div>

          <div className="sticky-nav-center">
            <button onClick={() => scrollToSection('about-me')} className="nav-link">
              {content.sections[language].aboutMe}
            </button>
            <button onClick={() => scrollToSection('work-experience')} className="nav-link">
              {content.sections[language].workExperience}
            </button>
            <button onClick={() => scrollToSection('side-projects')} className="nav-link">
              {content.sections[language].sideProjects}
            </button>
            <button onClick={() => scrollToSection('education')} className="nav-link">
              {content.sections[language].education}
            </button>
          </div>

          <div className="sticky-nav-right">
            <button onClick={toggleLanguage} className="nav-language-toggle">
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* 漢堡選單 - Mobile尺寸時始終顯示，Web尺寸在頂部時顯示 */}
      <button className={`mobile-menu-toggle ${isScrolled ? 'hidden' : ''}`} onClick={toggleMobileMenu}>
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* 側欄 */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-content">
          <div  className="mobile-nav-item mobile-nav-name">
            {headerContent.name}
          </div>

          <div className="mobile-nav-links">
            <div className="mobile-nav-section">
              <button
                className="mobile-nav-item mobile-nav-section-link"
                onClick={() => scrollToSection('about-me')}
              >
                {sectionTitles.aboutMe}
              </button>
            </div>

            <div className="mobile-nav-section">
              <h4 className="mobile-nav-section-title">{sectionTitles.workExperience}</h4>
              {workExperiences.map((exp, index) => (
                <button
                  key={index}
                  className="mobile-nav-subitem"
                  onClick={() => scrollToSection(`work-exp-${index}`)}
                >
                  {exp.title}
                </button>
              ))}
            </div>

            <div className="mobile-nav-section">
              <h4 className="mobile-nav-section-title">{sectionTitles.sideProjects}</h4>
              {sideProjects.map((project, index) => (
                <button
                  key={index}
                  className="mobile-nav-subitem"
                  onClick={() => scrollToSection(`side-project-${index}`)}
                >
                  {project.name}
                </button>
              ))}
            </div>

            <div className="mobile-nav-section">
              <h4 className="mobile-nav-section-title">{sectionTitles.education}</h4>
              {educationData.research.map((research, index) => (
                <button
                  key={index}
                  className="mobile-nav-subitem"
                  onClick={() => scrollToSection(`research-${index}`)}
                >
                  {research.title}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => { toggleLanguage(); closeMobileMenu(); }} className="mobile-language-toggle">
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>

      {/* 遮罩 */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
    </>
  )
}

export default Header
