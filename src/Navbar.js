import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#introduction">
          Intersection Smart Cities Tech Radar
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#platforms">Platforms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#languages">Languages & Frameworks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tools">Tools</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#techniques">Techniques</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
