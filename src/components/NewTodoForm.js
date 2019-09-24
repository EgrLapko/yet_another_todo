import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class NewTodoForm extends Component {
    state = {
        task: "",
        alert: false
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        });
    };

    callAlert = () =>  {
        this.setState({
            alert: true
        });
        setTimeout(() => this.setState({alert: false}), 2000)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add new task..." 
                    id="task" 
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}    
                />
                <button className="todo__add-btn" disabled={this.state.task.length <= 4}>Add Todo</button>
            </form>
        )
    }
}

