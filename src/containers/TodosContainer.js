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

    if (todoInput.trim().length) {
      setTodos(oldTodos => [
        { desc: todoInput, isDone: false }, // initial state of a todo
        ...oldTodos
      ])

      setTodoInput('')
    }
  }

  const deleteTodo = index => {
    setTodos(prevTodos => prevTodos.filter((todo, _index) => _index !== index))
  }

  const toggleTodoCompletion = index => {
    let newTodos = [...todos] // spread so todos is not passed by reference
    newTodos[index] = {
      ...newTodos[index],
      isDone: !newTodos[index].isDone
    } // toggle the truthiness of isDone for the given todo
    setTodos(newTodos)
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
              <TodoItems.Checkbox onClick={() => toggleTodoCompletion(index)} isCheckedOff={todo.isDone} />
              <TodoItems.Text doesGrow={true} isCrossedOff={todo.isDone}>{todo.desc}</TodoItems.Text>
              <TodoItems.Delete onClick={() => deleteTodo(index)} />
            </TodoItems.Item>
          )
        })}
        <TodoItems.Item>
          <TodoItems.Text isGreyed={true}>{
            todos.filter(todo => todo.isDone === false).length
          } items left</TodoItems.Text>
          <TodoItems.Text
            isGreyed={true}
            onClick={() => {
              setTodos(currTodos => {
                return currTodos.filter(todo => todo.isDone === false)
              })
            }}
          >Clear Completed</TodoItems.Text>
        </TodoItems.Item>
      </TodoItems>
    </>
  )
}

export default TodosContainer