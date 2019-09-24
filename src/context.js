import React, { Component } from 'react';

const TodoContext = React.createContext();

class TodoProvider extends Component {
    state = {

    }
    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

const TodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoConsumer };
