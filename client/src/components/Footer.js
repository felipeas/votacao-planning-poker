import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/Footer.scss';

export class Footer extends Component {

    render() {
        return (
            <footer className={`${styles}`}>
                <span>
                    [Footer]
                </span>
            </footer>
        );
    }
}
