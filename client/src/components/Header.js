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
                <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3 logo">
                  <Link to="/">
                        Votação Planning Poker
                  </Link>
                </div>

                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                  <nav>
                    <Link to="/home" activeClassName="active">
                      Home
                    </Link>
                    <Link to="/list" activeClassName="active">
                      Lista
                    </Link>
                  </nav>
                </div>
                {this.props.usuario ? this.renderToolbarLogado() : this.renderToolbarDeslogado()}

              </div>
            </div>
          </header>
        );
    }
    renderToolbarLogado () {
        return(
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
                <span onClick={this.handleLogoutClick.bind(this)}>
                    {this.props.usuario.name}
                </span>
            </div>
        );
    }

    renderToolbarDeslogado () {
        return (
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
              <Link to="/login">
                Login
              </Link>
            </div>
        );
    }
}

export default Header;
