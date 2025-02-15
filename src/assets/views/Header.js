import { useState } from "react"
import React from "react"

const openLinkInNewTab = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    </div>
    )
}

export default Header