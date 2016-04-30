export const VOTACAO_ESTORIA_ADD = 'VOTACAO_ESTORIA_ADD';
export const VOTACAO_TAREFA_ADD = 'VOTACAO_TAREFA_ADD';
export const VOTACAO_SET = 'VOTACAO_SET';

import { get, post, put, del } from '../modules/api';
import { pushState } from 'redux-router';

export function carregarVotacao(sprintId) {
    return dispatch => get(`votacao/${sprintId}`).then(sprint => {
        alert(JSON.stringify(sprint,true,2));
        return dispatch(setarVotacao(sprint));
    });
}

export function addEstoria(sprintId, dados) {
    dados.sprint = sprintId;
    return dispatch => post('estorias', dados).then(() => {
        return dispatch(pushState(null, '/sprints'));
    });
}

export function addTarefa(estoriaId, dados) {
    dados.estoria = estoriaId;
    return dispatch => post('estorias', dados).then(() => {
        return dispatch(pushState(null, '/sprints'));
    });
}

export function addVoto(dados) {
    return dispatch => post('voto', dados).then(() => {
        dispatch(pushState(null, '/sprints'));
    });
}


function setarVotacao(votacao) {
    return {
        type: VOTACAO_SET,
        votacao
    };
}


function addEstoriaLista(dados) {
    debugger;
    return {
        type: VOTACAO_ESTORIA_ADD,
        dados
    };
}


function addTarefaLista(dados) {
    debugger;
    return {
        type: VOTACAO_TAREFA_ADD,
        dados
    };
}

