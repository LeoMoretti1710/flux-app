//Constante que detem o nome da Action
export const ADD_TODO = 'ADD_TODO'

//criando uma Variável (let) para o incremento da lista de TODOS
let nextTodoId = 0;

//criando a  função para exportar a action
export function addTodo(text){
    return{
        type: ADD_TODO,
        id: nextTodoId ++,
        text
    }
}