import React, { Component, PropTypes } from 'react';
import { Link, pushState } from 'react-router';
import { styles } from '../styles/Nav.scss';

export class Nav extends Component {
    render(){
        return (
            <nav className={`${styles}`}>
                <div className="nav-item">
                    <Link to="/sprints">
                        Sprints
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/sprints">
                        Estórias
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/sprints">
                        Votação
                    </Link>
                </div>
            </nav>
        );
    }
}
