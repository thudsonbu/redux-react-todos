import React, { Component } from 'react'

export default class NewTodoForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            todo: ""
        }
    }
    handleSubmit(e){
        // stop reload
        e.preventDefault()
        // use function passed as parameter to dispatch action to add new todo
        this.props.handleAdd(this.state.todo)
        // clear form after submit
        e.target.reset()
        // tell routers to go back and render todos
        this.props.history.push("/todos")
    }
    handleChange(e){
        // set state to whatever is in form
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="todo"> todo </label>
                <input type="text" name="todo" id="todo" onChange={this.handleChange}/>
                <button>Button</button>
            </form>
        )
    }
}

