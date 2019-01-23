import React, { Component } from 'react';
import Introduction from './Introduction.js';
import Navbar from './Navbar.js';
import radarData from './radar.json';
import Quadrant from './Quadrant.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container pb-5">
          <Navbar />
          <Introduction />
          <Quadrant name="Platforms" rings={radarData.platforms} category="platforms" />
          <Quadrant name="Languages & Frameworks" rings={radarData.languages_frameworks} category="languages" />
          <Quadrant name="Tools" rings={radarData.tools} category="tools" />
          <Quadrant name="Techniques" rings={radarData.techniques} category="techniques" />
        </div>
      </div>
    );
  }
}

export default App;
