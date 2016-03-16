import React, { Component } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/App.scss';

class App extends Component {
    render() {
        return (
            <section>
                <Header/>
                {this.props.children}
                <Footer/>
            </section>
        );
    }
}

export default App;
