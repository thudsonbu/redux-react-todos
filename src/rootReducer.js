import { ADD_TODO, REMOVE_TODO } from './actionCreators';

const initialState = {
    todos: [],
    id: 0 // naive to use this form of id
}


export default function rootReducer(state = initialState, action) {
    // use a switch statement to choose between actions
    switch(action.type) {
        case ADD_TODO:
            var newState = {...state};
            newState.id++
            return {
                ...newState,
                todos: [ ...newState.todos, { task: action.task, id: newState.id }]
            }
        case REMOVE_TODO:
            var newState = {...state};
            let newTodos = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...newState,
                todos: newTodos
            }
        default:
            return state;
    }
}