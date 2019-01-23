import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <div className="row pt-5" id="introduction">
        <div className="col-12">
          <h2>What is the tech radar?</h2>
          <p>
            The tech radar for&nbsp;
            <a href="https://www.intersection.com" rel="noopener noreferrer" target="_blank">Intersection</a>'s
            Smart Cities team is the list of technologies, tools, and techniques in our team's ecosystem. It is inspired by&nbsp;
            <a href="https://www.thoughtworks.com/radar" rel="noopener noreferrer" target="_blank">ThoughtWorks' Tech Radar</a>.
            Entries in each section (quadrant) of the tech radar are placed in one of the following categories (rings):
          </p>

          <ul>
            <li>
              <strong>Adopt</strong> — Entries in this ring are core to our ecosystem. They are the default choice when starting new projects, and are technologies we have chosen to stand behind as a fundamental piece of our stack.
            </li>
            <li>
              <strong>Trial</strong> — These are items that we have started to use, but may not be proven as a core part of our toolkit yet. We may use them in new projects, but not without a bit of discussion to make sure we want to expand our footprint.
            </li>
            <li>
              <strong>Assess</strong> — These are the things we want to learn more about in the nearterm. We probably don't have them in production yet, but we likely have a candidate project in mind that we will use to assess them.
            </li>
            <li>
              <strong>Hold</strong> — These entries are on hold. Technologies in this ring are likely being phased out, though are still present in our toolkit. We are unlikely to start any new projects using items in this ring.
            </li>
          </ul>

          <h2>How do we use it?</h2>
          <p>
            The Tech Radar helps drive the technical decisions that we make. Items in the Adopt category are default choices for new projects. As we find new technologies that interest us and seem relevant to our team, we add them to the Assess ring. The radar also serves as a public statement of technologies that are important to us.
          </p>

          <p>
            The source for this radar is&nbsp;
            <a href="https://github.com/intersection/smart-cities-tech-radar" rel="noopener noreferrer" target="_blank">available on GitHub</a>.
            If you are interested in joining our team,&nbsp;
            <a href="https://www.intersection.com/join-our-team" rel="noopener noreferrer" target="_blank">we're hiring</a>!
          </p>
        </div>
      </div>
    );
  }
}

export default Introduction;
