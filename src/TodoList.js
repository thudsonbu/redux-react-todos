import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        // create our todos using state
        let todos = this.state.todos.map((todo, index) => <Todo todo={todo} key={index} />)
        return(
            <div className="Todos">
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList