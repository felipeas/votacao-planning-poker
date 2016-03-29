import React, { Component } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/App.scss';

export class App extends Component {
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

App.propTypes = {
    children: React.PropTypes.any
};

export default App;
