export const SPRINT_ADD = 'SPRINT_ADD';
export const SPRINT_END = 'SPRINT_END';
export const SPRINT_LIST_SET = 'SPRINT_LIST_SET';

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
        type: SPRINT_LIST_SET,
        lista
    };
}

function addEstoriaLista(dados) {
    debugger;
    return {
        type: SPRINT_ADD,
        dados
    };
}
