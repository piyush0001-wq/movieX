import React from 'react'
import './header.css'


function Header() {


  return (
    <div className="header">
      <div className="content">
        <h1>Dicover millions of movies & TV shows </h1>

      </div>
      <p className="takeToTop" onClick={() => window.scroll(0, 0)}><i class="fas fa-arrow-up"></i></p>
      <p className="takeToBottom" onClick={() => window.scroll(1000000, 1000000)}><i class="fas fa-arrow-down"></i></p>

    </div>
  )
}

export default Header
