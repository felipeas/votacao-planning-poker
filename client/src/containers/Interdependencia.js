import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/votacao';
import io from 'socket.io-client';
import PieChart from 'react-chartjs';

@connect(
    state => ({
        sprint: state.votacao
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Interdependencia extends Component {
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

dadosGrafico(sprint) {
    const dados = [];
    
    sprint.estorias.forEach(function (estoria) {
        const label = estoria.nome; 
        const valor = estoria.pontos;
        
        dados.push({
            value: valor,
            label: label
        });
    });
    
    return dados;
}

    render() {     
        const { sprint } = this.props.sprint;
        const { pontos }  = this.props.sprint.sprint;
        const { dadosGrafico } = this;
            
        const opcoesGrafico = { 
            responsive: true, 
            showTooltips: true,
            onAnimationComplete: function() {
                this.showTooltip(this.segments, true);
            }, 
        };
        
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <h3>Interdependência</h3>
                        <PieChart.Pie data={dadosGrafico(sprint)} options={opcoesGrafico} height="100"/>
                        <h3>Total = {pontos}</h3>
                    </div>
                </div>
            </section>
        )
    }
}
