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
                <span>{sprint.nome}</span>
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
