// these are constants that allow for changes in reducer names without messing up everything
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

// action creators are functions that return objects used by the reducer

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function removeTodo(todo_id) {
    return {
        type: REMOVE_TODO,
        todo_id
    }
}
