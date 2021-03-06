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
                todos: [ ...newState.todos, { todo: action.todo, id: newState.id }]
            }
        case REMOVE_TODO:
            var newState2 = {...state};
            let newTodos = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...newState2,
                todos: newTodos
            }
        default:
            return state;
    }
}