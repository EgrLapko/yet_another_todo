import React, { Component } from 'react';

export default class Todo extends Component {
    state = {
        isEditing: false,
        task: this.props.task
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id)
    };

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleUpdate = (e) => {
        e.preventDefault();
        //take new task data and pass up to parent;
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleToggle = (e) => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="todo__element --edit">
                    <form className="todo__edit-form" onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.task} name="task" onChange={this.handleChange} />
                        <button className="todo__btn-white"> Save </button>
                    </form>
                </div> 
            );
        } else {
            result = (
                <div className="todo__element">
                    <li className={"todo__task " + (this.props.completed && "--completed")} onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <div className="todo__btn-container">
                        <button className="todo__btn-white" onClick={this.toggleForm}>Edit</button>
                        <button className="todo__btn-white" onClick={this.handleRemove}>Delete</button>
                    </div>        
                </div>
            );
        }
        return result;
    }
}
