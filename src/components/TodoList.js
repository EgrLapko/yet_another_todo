import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

export default class TodoList extends Component {
    state = {
        todos: []
    }
    createTodo = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };
    updateTodo = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask} // Keep everything but update the task
            }
            return todo; // otherwise return todo unchanged
        });
        this.setState({
            todos: updatedTodos
        });
    }
    toggleCompleted = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo.task} 
                    completed={todo.completed}
                    removeTodo={this.removeTodo} 
                    updateTodo={this.updateTodo}
                    toggleTodo={this.toggleCompleted}
                />
            )
               
        });
        return (
            <div className="todo__main">
                <h1 className="todo__title">What to do?</h1>
                <NewTodoForm createTodo={this.createTodo} />
                <ul className="todo__list">
                    {todos}
                </ul>
            </div>
        )
    }
}
