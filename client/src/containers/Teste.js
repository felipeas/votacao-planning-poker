import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/Teste.scss';

export class Teste extends Component {
    render() {
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span> TESTE </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
