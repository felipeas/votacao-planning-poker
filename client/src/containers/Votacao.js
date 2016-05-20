import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { VotacaoList } from '../components/VotacaoList';
import { AddEstoria } from '../components/AddEstoria';
import * as actionCreators from '../actions/votacao';
import io from 'socket.io-client';
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
        const self = this.props;
         
        self.carregarVotacao(sprintId);
        
        const socket = io.connect();

        socket.on('voto', function (data) {
            self.carregarVotacao(sprintId);
            // self.carregarVotacaoTarefa(data.tarefa);
        });
        socket.on('tarefa', function (data) {
            self.carregarVotacao(sprintId);
            // self.carregarVotacaoTarefa(data._id);
        });
        socket.on('estoria', function (data) {
            self.carregarVotacao(sprintId);
            // self.carregarVotacaoEstoria(data._id);
        });
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
