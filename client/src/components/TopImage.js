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
                    "If there were such a thing as a soul, I think it would be behind the gallbladder but above the kidneys."
                </p>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}
