//Fazendo os imports necessários

import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/actions';

//Criando uma função para a criação de cada um dos itens da lista

function todo(state, action) {
    // verificando o que a ACTION está fazendo
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}

// implementando a função para criar uma lista de itens
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                //criando uma cópia da atualização do state
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
}

// criando uma constante para receber a "junção" a partir da Função combineReducers

const todoApp = combineReducers({
    todos
});

//exportat o reducer
export default todoApp;