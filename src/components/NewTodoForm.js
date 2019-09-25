import React, { Component } from 'react';
import { TodoConsumer } from '../context';

export default class NewTodoForm extends Component {
    render() {
        return (
            <TodoConsumer>
                {value => {
                    const {handleSubmit, task, handleChange} = value;
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
                            <button className="todo__add-btn" disabled={task.length <= 4}>Add Todo</button>
                        </form>
                    )
                }}
            </TodoConsumer>
            
        )
    }
}

