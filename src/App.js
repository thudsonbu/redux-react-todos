import React from 'react';
import TodoList from './TodoList';
import './App.css';
import { Link, Route, Redirect } from "react-router-dom";

function App() {
  // path /todos renders TodoList componenet
  // index just renders todos component via redirect
  return (
    <div className="App">
      <h1> Redux Todo List! </h1>
      <p>
        <Link to="/todos"> Todo List </Link>
      </p>
      <p>
        <Link to="/todos/new"> Add Todo </Link>
      </p>
      <Route path="/todos" component={TodoList} />
      <Route exact path="/" render={() => <Redirect to="/todos"/>} />
    </div>
  );
}

export default App;
