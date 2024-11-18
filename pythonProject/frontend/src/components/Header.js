import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to = "/" className="logo">Spotiscope</Link>
      <nav className="nav">
        <Link to="/TopTracks" className="nav-item">
          Top Tracks
        </Link>
        <Link to="#top-artists" className="nav-item">
          Top Artists
        </Link>
        <Link to="#top-genres" className="nav-item">
          Top Genres
        </Link>
        <Link to="/RecentlyPlayed" className="nav-item">
          Recently Played
        </Link>
        <Link to="#share" className="nav-item">
          Share
        </Link>
      </nav>
    </header>
  );
};

export default Header;
