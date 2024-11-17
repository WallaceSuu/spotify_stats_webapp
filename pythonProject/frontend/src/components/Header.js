import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Spotiscope</div>
      <nav className="nav">
        <a href="#top-tracks" className="nav-item">
          Top Tracks
        </a>
        <a href="#top-artists" className="nav-item">
          Top Artists
        </a>
        <a href="#top-genres" className="nav-item">
          Top Genres
        </a>
        <a href="#recently-played" className="nav-item">
          Recently Played
        </a>
        <a href="#share" className="nav-item">
          Share
        </a>
      </nav>
    </header>
  );
};

export default Header;
