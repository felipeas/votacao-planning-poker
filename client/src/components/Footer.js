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
                            <span>
                                [Footer]
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
