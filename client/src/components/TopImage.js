import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/TopImage.scss';

export class TopImage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <section className={`${styles}`} ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h1 className="title">
                    Votação Planning Poker
                </h1>
                <div col-sm-12 text-center>
                    <blockquote>
                        <p>
                        "It hurts more if you think about it."
                        <cite><small> Hooks, Cabal torturer</small></cite>
                        </p>
                    </blockquote>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
