import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/Footer.scss';

export class Footer extends Component {

  render() {
    return (
      <footer className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a className="github-button"
              href="https://github.com/felipeas/votacao-planning-poker"
              data-icon="octicon-star"
              data-count-href="/felipeas/votacao-planning-poker"
              data-count-api="/repos/felipeas/votacao-planning-poke#stargazers_count"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star /felipeas/votacao-planning-poker on GitHub"
            >
              Star
            </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
