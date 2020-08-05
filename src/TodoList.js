import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './actionCreators'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.state = {
            todo: ""
        }
    }
    handleSubmit(e){
        // stop reload
        e.preventDefault()
        // dispatch an action to change redux state
        this.props.addTodo(this.state.todo)
        // clear form after submit
        e.target.reset()
    }
    handleChange(e){
        // set state to whatever is in form
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    removeTodo(id){ // id from bind in todo props
        console.log(id);
        this.props.removeTodo(id)
    }
    render(){
        // create our todos using state
        let todos = this.props.todos.map((val, index) => 
            (<Todo 
                // bind remove todo method to todo (this passes the id when method is called)
                removeTodo={this.removeTodo.bind(this, val.id)}
                // use val.todo because an object is now being passed in
                todo={val.todo} 
                key={index} 
            />)
        )

        return(
            <div className="Todos">
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="todo"> todo </label>
                    <input type="text" name="todo" id="todo" onChange={this.handleChange}/>
                    <button>Button</button>
                </form>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

// map state to props simply adds the redux state to the props of the component
function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
    }
}

// map dispatch to props can be used to add specific action creators to props
// function mapDispatchToProps(dispatch) {
//     return {
//         addTodo: function(task) {
//             dispatch({
//                 type: "ADD_TODO",
//                 task
//             });
//         }
//     }
// }

// when connect is used this component can now dispatch actions
// the object containing addTodo and removeTodo passes functions from the
// imported action creators file thus passing them as props to the component.
// As apposed to passing dispatch which contains all action creators.
export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList)