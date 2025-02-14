import { useState } from "react"
import React from "react"
import "./Topfold.css"
import VideoModal from '../components/VideoModal';

const openLinkInNewTab = (link) => {
  window.open(link, "_blank", "noopener,noreferrer");
};

const Topfold = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="topfold">
      <header>
        <div className="logo">Melhor-IA</div>
        <nav className="desktop-nav">
          <a href="#">Soluções</a>
          <a href="#">Casos de Sucesso</a>
          <a href="#">Contato</a>
          <button className="login-btn"
          onClick={()=> openLinkInNewTab("http://google.com")}>Login
          </button>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "X" : "☰"}
        </button>
      </header>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <a href="#">Soluções</a>
          <a href="#">Casos de Sucesso</a>
          <a href="#">Contato</a>
        </nav>
      )}

      <main>
        <div className="content">
          <h1>
            Conheça a AGATA.
            <span>seu Agente de Atendimento Automático</span>
          </h1>
          <p>
            Conheça o agente de IA que recepciona, qualifiqua, e organiza seus leads de forma eficiente e inteligente.
          </p>
          <button className="cta" onClick={() => setIsVideoOpen(true)}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              style={{marginRight: '8px'}}
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
            Assista uma Demonstração
          </button>
          <div className="trust-badges">
            <p>Empresas que confiam em nós:</p>
            <div className="badges">
              <div className="badge"></div>
              <div className="badge"></div>
              <div className="badge"></div>
            </div>
          </div>
        </div>
        <div className="visual">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#d0c1a9"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.4,42.1C65.4,55,55,66.3,42.1,74.4C29.2,82.5,14.6,87.4,-0.7,88.6C-16.1,89.8,-32.2,87.3,-45.6,79.3C-58.9,71.3,-69.5,57.9,-76.9,43.3C-84.3,28.7,-88.5,14.3,-88.2,0.2C-87.9,-14,-83,-28,-75.3,-40.4C-67.6,-52.8,-57,-63.6,-44.3,-71.5C-31.6,-79.5,-15.8,-84.6,-0.2,-84.3C15.4,-84,30.7,-78.3,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <img 
            src={require('../../assets/images/logo.png')} 
            alt="Logo" 
            className="icon"
          />
        </div>
      </main>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="YOUR_YOUTUBE_VIDEO_ID" // Replace this with your actual YouTube video ID
      />
    </div>
  )
}

export default Topfold

