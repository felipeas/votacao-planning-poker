import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { VotacaoList } from '../components/VotacaoList';
import { AddEstoria } from '../components/AddEstoria';
import * as actionCreators from '../actions/votacao';

import { styles } from '../styles/Sprint.scss';

@connect(
    state => ({
        estorias: state.votacao.estorias
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Votacao extends Component {
    componentDidMount() {
        this.props.carregarVotacao();
    }
    render() {
        const {
            estorias,
        } = this.props;

        return (
            <section className={`${styles}`}>
                <span>
                    {this.props.params.sprintId}
                </span>
                <div className="container">
                    <div className="row">
                        <VotacaoList {...this.props}/>
                        <AddEstoria {...this.props}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Votacao;
