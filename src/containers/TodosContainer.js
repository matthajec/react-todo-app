import { useState } from 'react'
const { TodoItems } = require('../components')


function TodosContainer() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const handleTodoInput = e => {
    setTodoInput(e.target.value)
  }

  const handleNewTodoSubmit = e => {
    e.preventDefault()

    setTodos(oldTodos => [
      ...oldTodos,
      { desc: todoInput.toString(), isCrossedOff: false }
    ])
  }

  const deleteTodo = index => {
    setTodos(todos => todos.filter((todo, _index) => _index !== index))
  }

  return (
    <>
      <TodoItems>
        <TodoItems.Item onSubmit={handleNewTodoSubmit}>
          <TodoItems.AddButton />
          <TodoItems.Input onChange={handleTodoInput} value={todoInput} placeholder="Create a new todo" />
        </TodoItems.Item>
      </TodoItems>

      <TodoItems>
        {todos.map((todo, index) => {
          return (
            <TodoItems.Item key={index}>
              <TodoItems.Checkbox />
              <TodoItems.Text isCrossedOff={todo.isCrossedOff}>{todo.desc}</TodoItems.Text>
              <TodoItems.Delete onClick={() => deleteTodo(index)} />
            </TodoItems.Item>
          )
        })}
      </TodoItems>
    </>
  )
}

export default TodosContainer