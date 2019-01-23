import React, { Component } from 'react';
import _ from 'lodash';

const ringNames = ["adopt", "trial", "assess", "hold"];

class Quadrant extends Component {
  render() {
    return (
      <div className="row pt-5" id={this.props.category}>
        <div className="col-12 header"><h1 className="border-bottom border-secondary">{this.props.name}</h1></div>
        {ringNames.map((name) =>
          <div className="col" key={name}>
            <ul className="list-group">
              <li className={"list-group-item text-white bg-"+this.props.category}><h3>{_.capitalize(name)}</h3></li>
              {this.props.rings[name].map((entry) => <li className="list-group-item" key={entry}>{entry}</li> )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Quadrant;
