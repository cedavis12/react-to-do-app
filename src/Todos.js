import React from 'react';
import './Todos.css';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <li className="collection-item" key={todo.id}>
                    <span className="trash"><i className="far fa-trash-alt" onClick={() => {deleteTodo(todo.id)}}></i></span>
                    {todo.content}
                </li>
            )
        })
    ) : (
         <p className="center message">You have no items left to tackle. Nice work!</p>
    )
 
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;