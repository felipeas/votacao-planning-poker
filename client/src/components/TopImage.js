import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/TopImage.scss';

export class TopImage extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
            <blockquote>
                <p>
                    "Don't just have an idea--have all of them."
                </p>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}
