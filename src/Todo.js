import React, { Component } from 'react'

class Todo extends Component {
    render(){
        return(
            <li>
                {this.props.todo}
                <button onClick={this.props.removeTodo}>X</button>
            </li>
        )
    }
}

export default Todo