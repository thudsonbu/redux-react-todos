import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { removeTodo, addTodo } from './actionCreators'
import { Route } from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.removeTodo = this.removeTodo.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(val){
        this.props.addTodo(val)
    }
    removeTodo(id){ // id from bind in todo props
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
            <div>
                <Route path="/todos/new" component={props => (
                    <NewTodoForm {...props} handleAdd={this.handleAdd}/>
                )}/>
                <Route exact path="/todos" component={() => (
                    <div className="Todos">
                        <ul>
                            {todos}
                        </ul>
                    </div>
                )} />
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
export default connect(mapStateToProps, { removeTodo, addTodo })(TodoList)