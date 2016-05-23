import React, { Component, PropTypes } from 'react';
import { Link, pushState } from 'react-router';
import { styles } from '../styles/Nav.scss';
import { connect } from 'react-redux';

@connect(
    state => ({
        sprint: state.votacao.id
    })
)
export class Nav extends Component {
    render(){
        
        const { sprint } = this.props;
        const habilitar = '';
        
        if (!sprint) {'desabilitar'};
        
        
        return (
            <nav className={`${styles}`}>
                <div className="nav-item">
                    <Link to="/sprints">
                        Sprints
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className='{habilitar}' to={`/sprint/${sprint}`}>
                        Votação
                    </Link>
                </div>
                <div className="nav-item {habilitar}">
                    <Link className='{habilitar}' to={`/interdependencia/${sprint}`}>
                        Interdep.
                    </Link>
                </div>
            </nav>
        );
    }
}
