export const VOTACAO_ESTORIA_ADD = 'VOTACAO_ESTORIA_ADD';
export const VOTACAO_TAREFA_ADD = 'VOTACAO_TAREFA_ADD';
export const VOTACAO_SET = 'VOTACAO_SET';

import { get, post, put, del } from '../modules/api';
import { pushState } from 'redux-router';

export function carregarVotacao() {
    return dispatch => get('votacao').then(lista => {
        dispatch(setarVotacao(lista));
    });
}

export function addEstoria(sprintId, dados) {
    dados.sprint_id = sprintId;
    return dispatch => post('estorias', dados).then(() => {
        dispatch(pushState(null, '/sprints'));
    });
}

export function addTarefa(estoriaId, dados) {
    dados.estoria_id = estoriaId;
    return dispatch => post('estorias', dados).then(() => {
        dispatch(pushState(null, '/sprints'));
    });
}

export function addVoto(dados) {
    return dispatch => post('voto', dados).then(() => {
        dispatch(pushState(null, '/sprints'));
    });
}

export function endSprint(id) {
    return dispatch => del(`votacao/${id}`).then(() => {
        dispatch(pushState(null, '/votacao'));
    });
}

export function removerSprintLista(index) {
    debugger;
    return {
        type: SPRINT_END,
        index,
    };
}

function setarVotacao(lista) {
    return {
        type: VOTACAO_SET,
        lista
    };
}

function addEstoriaLista(dados) {
    debugger;
    return {
        type: VOTACAO_ESTORIA_ADD,
        dados
    };
}
