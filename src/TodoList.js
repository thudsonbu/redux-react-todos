import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            task: ""
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch({})
    }
    handleChange(e){
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    render(){
        // create our todos using state
        let todos = this.props.todos.map((todo, index) => 
            (<Todo todo={todo} key={index} />)
        )

        return(
            <div className="Todos">
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="task"> Task </label>
                    <input type="text" name="task" id="task" onChange={this.handleChange}/>
                    <button>Button</button>
                </form>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps)(TodoList)