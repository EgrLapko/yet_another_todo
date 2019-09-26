import React, { Component } from 'react';
import { TodoConsumer } from '../context';

export default class Todo extends Component {
    state = {
        isEditing: false,
        localTask: this.props.task
    }

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        //take new task data and pass up to parent;
        this.props.updateTodo(this.props.id, this.state.localTask);
        this.setState({
            isEditing: false
        })
    }

    handleEditChange = (e) => {
        this.setState({
            localTask: e.target.value
        });
    }
    

    render() {
        return (
            <TodoConsumer>
                {value => {
                    const { toggleCompleted, removeTodo } = value;
                    const { completed, id } = this.props;
                    let result;
                        if (this.state.isEditing) {
                            result = (
                                <div className="todo__element --edit">
                                    <form className="todo__edit-form" onSubmit={this.handleUpdate}>
                                        <div className="todo__input-container">
                                            <input type='text' value={this.state.localTask} name="localTask" onChange={this.handleEditChange} />
                                            <button className="todo__btn-save"> <i className="far fa-save"></i> </button>
                                        </div>
                                    </form>
                                </div> 
                            );
                        } else {
                            result = (
                                <div className="todo__element">
                                    <li className={"todo__task " + (completed && "--completed")} onClick={() => toggleCompleted(id)}>
                                        {this.state.localTask}
                                    </li>
                                    <div className="todo__btn-container">
                                        <button className="todo__btn-edit" onClick={this.toggleForm}><i className="fas fa-pen-square"></i></button>
                                        <button className="todo__btn-edit" onClick={() => removeTodo(id)}><i className="fas fa-trash"></i></button>
                                    </div>        
                                </div>
                            );
                        }
                    return result
                }}
            </TodoConsumer>
        )
    }
}
