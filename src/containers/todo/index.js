import { useState, useEffect } from 'react';
import { TodoItems } from '../../components';
import NewTodoContainer from './NewTodoContainer';
import TodosList from './TodosList';
import TodosNav from './TodosNav';

const presetTodos = [
  {
    desc: 'Walk the dog',
    isDone: false
  },
  {
    desc: 'Plan birthday party',
    isDone: false
  },
  {
    desc: 'Go to the grocery store',
    isDone: false
  },
  {
    desc: 'Fix the dining room table',
    isDone: true
  }
];

function TodosContainer() {
  const localTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(localTodos ? localTodos : presetTodos);
  const [viewMode, setViewMode] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoItems>
      <NewTodoContainer
        setTodos={setTodos}
      />

      <TodosList
        todos={todos}
        setTodos={setTodos}
        viewMode={viewMode}
      />

      <TodosNav
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <TodoItems.Instructions>Drag and drop to reorder</TodoItems.Instructions>
    </TodoItems >
  );
}

export default TodosContainer;