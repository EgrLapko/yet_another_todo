import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { TodoConsumer } from '../context';

export default class TodoList extends Component {
    render() {
        return (
            <TodoConsumer>
                {value => {
                    const {todos, updateTodo, createTodo} = value;
                    return (
                        <div className="todo__main">
                            <h1 className="todo__title">What to do?</h1>
                            <NewTodoForm createTodo={createTodo} />
                            <ul className="todo__list">
                                {
                                    todos.map(todo => {
                                        return (
                                            <Todo 
                                                key={todo.id} 
                                                id={todo.id} 
                                                task={todo.task} 
                                                completed={todo.completed}
                                                updateTodo={updateTodo}
                                            />
                                        )
                                        
                                    })
                                }
                            </ul>
                        </div>
                    )
                }}
            </TodoConsumer>
            
        )
    }
}
