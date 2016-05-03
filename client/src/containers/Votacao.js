import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { VotacaoList } from '../components/VotacaoList';
import { AddEstoria } from '../components/AddEstoria';
import * as actionCreators from '../actions/votacao';

import { styles } from '../styles/Votacao.scss';

@connect(
    state => ({
        sprint: state.votacao
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Votacao extends Component {
    componentDidMount() {
        const { sprintId } = this.props.routeParams;
         
        this.props.carregarVotacao(sprintId);
    }
    
    render() {
        const {
            sprint,
        } = this.props;
                
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <h3>{sprint.sprint.nome}</h3>
                    <VotacaoList {...this.props}/>
                    <AddEstoria {...this.props}/>
                </div>
            </section>
        );
    }
}

export default Votacao;
