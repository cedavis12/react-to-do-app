import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './Todos.css';



class App extends React.Component{
  state = {
    todos: [
      {id: 1, content: 'Create a new To-Do'},
      {id: 2, content: 'By typing under "Add New To-Do:"'},
      {id: 3, content: "Then press Enter"},
    ]
  }

  deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo =>{
        return todo.id !== id
      });
      this.setState({todos})
    }

    addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({todos});
    }

  render(){
    return (
      <div className="app container">
        <h1 className="center">To-Do List</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
