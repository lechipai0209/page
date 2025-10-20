import './App.css'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import SideProjects from './components/SideProjects'
import Education from './components/Education'
import { content } from './data/content'

function AppContent() {
  const { language } = useLanguage()
  const footerContent = content.footer[language]

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AboutMe />
        <WorkExperience />
        <SideProjects />
        <Education />
      </main>
      <footer className="footer">
        <p>
          {footerContent.copyright}
          <span className="footer-separator"> | </span>
          {footerContent.builtWith}
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
