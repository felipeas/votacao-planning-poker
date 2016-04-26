import React, { Component, PropTypes } from 'react';
import { Link, pushState } from 'react-router';
import { styles } from '../styles/Header.scss';
import { Nav } from '../components/Header';

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

    handleEntrar(e){
        this.pushState
    }

    iconeLogin(){
        if (this.props.usuario){
            return "nav-icon fa fa-user pull-right fa-2 logado"
        } else {
            return "nav-icon fa fa-user pull-right fa-2"
        }
    }

    render() {
        const icone = this.iconeLogin();
        const logado = this.props.usuario;
        return (
            <header className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <Link to="/home">
                            <i className="nav-icon fa fa-hand-spock-o pull-left fa-2"></i>
                        </Link>
                        <Link to="/home">
                            <span className="pull-left">Planning Poker</span>
                        </Link>
                        <div className="dropdown pull-right">
                            <a type="button" id="menu1" data-toggle="dropdown">
                                <i className={icone}></i>
                            </a>
                            <ul className="dropdown-menu pull-right">
                                {logado ? this.renderNomeLogado() : null}
                                {logado ? this.renderLogado() : this.renderDeslogado()}
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
                    <i className="fa fa-sign-in fa-red"></i>
                    <span>&nbsp;Entrar</span>
                </Link>
            </li>
        );
    }
}

export default Header;
