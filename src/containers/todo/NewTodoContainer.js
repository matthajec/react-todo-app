import { useState } from 'react'
import { TodoItems } from '../../components'

export default function NewTodoContainer({ setTodos }) {
  const [todoInput, setTodoInput] = useState('')

  const handleTodoInput = e => {
    setTodoInput(e.target.value)
  }

  const handleNewTodoSubmit = e => {
    e.preventDefault()

    if (todoInput.trim().length) {
      setTodos(oldTodos => [
        { desc: todoInput, isDone: false }, // initial state of a todo
        ...oldTodos
      ])

      setTodoInput('')
    }
  }

  return (
    <TodoItems.ItemList>
      <TodoItems.Item onSubmit={handleNewTodoSubmit}>
        <TodoItems.AddButton />
        <TodoItems.Input onChange={handleTodoInput} value={todoInput} placeholder="Create a new todo" />
      </TodoItems.Item>
    </TodoItems.ItemList>
  )
}
