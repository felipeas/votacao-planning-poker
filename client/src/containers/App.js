import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fazerLogout } from '../actions/login';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/App.scss';

@connect(
  state => ({
    usuarioLogado: state.usuarioLogado
  }),
  { fazerLogout }
)
export class App extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout() {
       this.props.fazerLogout();
    }

    render() {
        return (
            <section>
                <Header
                    usuarioLogado={this.props.usuarioLogado}
                    onLogoutClick={this.handleLogout.bind(this)}/>
                    {this.props.children}
                <Footer/>
            </section>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.any
};

export default App;
