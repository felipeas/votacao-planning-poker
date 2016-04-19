import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/Header.scss';

export class Header extends Component {
    static propTypes = {
        onLogoutClick: PropTypes.func.isRequired,
        usuario: PropTypes.shape({
            nome: PropTypes.string
        })
    }

    handleLogoutClick(e) {
        e.preventDefault();
        this.props.onLogoutClick();
    }

    render() {

        return (
            <header className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <Link to="/home">
                            <i className="nav-icon fa fa-space-shuttle pull-left"></i>
                        </Link>
                        <Link to="/home">
                            <span className="titulo">Votacao</span>
                        </Link>
                        <div className="dropdown pull-right">
                            <a type="button" id="menu1" data-toggle="dropdown">
                                <i className="nav-icon fa fa-chevron-circle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu pull-right">
                                {this.props.usuario ? this.renderNomeLogado() : null}
                                {this.props.usuario ? this.renderLogado() : this.renderDeslogado()}
                            </ul>
                        </div>
                    </div>
                </div>
          </header>
        );
    }
    renderNomeLogado () {
        return(
            <li>
                <a>{this.props.usuario.nome}</a>
            </li>
        );
    }

    renderLogado () {
        return(
            <li>
                <a onClick={this.handleLogoutClick.bind(this)}>
                    <i className="fa fa-sign-out"></i>
                    <span>Sair</span>
                </a>
            </li>
        );
    }

    renderDeslogado () {
        return (
            <li>
                <Link to="/login">
                    <i className="fa fa-sign-in"></i>
                    <a>Entrar</a>
                </Link>
            </li>
        );
    }
}

export default Header;
