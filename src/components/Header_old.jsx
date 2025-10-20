import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">PAI LE-CHI</h1>
        <p className="title">Junior Backend Engineer</p>
        <div className="contact-info">
          <a href="https://github.com/chi-white" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">🔗</span> GitHub
          </a>
          <a href="mailto:king0209king0209@gmail.com" className="contact-link">
            <span className="icon">✉️</span> Email
          </a>
          <a href="tel:+886978359751" className="contact-link">
            <span className="icon">📱</span> (+886) 978-359-751
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
