import React, { Component } from 'react';
import { TodoConsumer } from '../context';

export default class Alert extends Component {
    render() {
        return (
            <TodoConsumer>
                {value => {
                    const {alert} =  value;
                    return (
                        <div className={"todo__alert " + (alert && "--active")}>
                            <p className="todo__alert-text">The task must have at least 5 symbols</p>
                        </div>
                    )
                }}
            </TodoConsumer>
        )
    }
}
