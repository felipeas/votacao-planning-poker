import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fazerLogout } from '../actions/login';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/App.scss';

@connect(
    state => ({
        usuario: state.app.usuario
    }),
    { fazerLogout }
)
export class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
    }

    handleLogout() {
        this.props.fazerLogout();
    }

    render() {
        const { usuario, children } = this.props;
        
        return (
            <section>
                <Header
                    usuario={usuario}
                    onLogoutClick={this.handleLogout.bind(this)}/>
                    {children}
                <Footer/>
            </section>
        );
    }
}

export default App;
