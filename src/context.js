import React, { Component } from 'react';
import uuid from 'uuid/v4';

const TodoContext = React.createContext();

class TodoProvider extends Component {
    state = {
        todos: [],
        task: "",
        isEditing: false,
        alert: false
    }

    // ------------------------------------------ 
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

    // ------------------------------------------ 
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

    // ------------------------------------------ MAIN TODO INPUT OPERATIONS
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        });
    };

    handleUpdate = (e, task) => {
        e.preventDefault();
        //take new task data and pass up to parent;
        this.updateTodo(this.props.id, task);
        this.setState({
            isEditing: false
        })
    }

    // ------------------------------------------ CALL ALERT (If input field will be empty)
    callAlert = () =>  {
        this.setState({
            alert: true
        });
        setTimeout(() => this.setState({alert: false}), 2000)
    }

    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo,
                removeTodo: this.removeTodo,
                updateTodo: this.updateTodo,
                toggleCompleted: this.toggleCompleted,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                callAlert: this.callAlert,
                handleUpdate: this.handleUpdate,
            }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

const TodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoConsumer };
