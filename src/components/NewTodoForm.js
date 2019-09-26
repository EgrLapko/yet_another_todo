import React, { Component } from 'react';
import { TodoConsumer } from '../context';

export default class NewTodoForm extends Component {
    render() {
        return (
            <TodoConsumer>
                {value => {
                    const {handleSubmit, task, handleChange, callAlert} = value;
                    return (
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Add new task..." 
                                id="task" 
                                name="task"
                                value={task}
                                onChange={handleChange}    
                            />
                            <button className="todo__add-btn" onClick={() => callAlert()} >Add Todo</button>
                        </form>
                    )
                }}
            </TodoConsumer>
            
        )
    }
}

