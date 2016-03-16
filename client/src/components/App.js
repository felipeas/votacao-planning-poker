import React from 'react';

import { connect } from 'react-redux';

//import Header from '../components/Header';
//import Footer from '../components/Footer';
//import Nav from '../components/Nav';
//import { limparTokenAuth } from '../actions/autenticacao';
//import { carregarDadosUsuario } from '../actions/toolbar';
//import { carregarJsonTraducao } from '../modules/traducao';
//import { getInternetExplorerVersion } from '../modules/browser';

//import '../styles/App.scss';
///import '../styles/Controles.scss';
//import '../styles/Home.scss';
//import '../styles/Tab.scss';
//import 'react-select/scss/default.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="app">
                <span>APP</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        usuario: state.dadosUsuario
    };
}

export default connect(mapStateToProps)(App);
