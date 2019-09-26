import React from 'react';
import TodoList from './components/TodoList';
import "./style.css";
import Alert from './components/Alert';

function App() {
  return (
    <div className="todo">
      <TodoList />
      <Alert />
    </div>
  );
}

export default App;
