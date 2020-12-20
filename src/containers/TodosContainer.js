import { useState } from 'react'
const { TodoItems } = require('../components')


function TodosContainer() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  const [viewMode, setViewMode] = useState('all')

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
        {todos.filter(todo => {
          if (viewMode === 'all') return true
          if (viewMode === 'active') return todo.isDone !== true
          if (viewMode === 'completed') return todo.isDone === true
        }).map((todo, index) => {
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
          } item(s) left</TodoItems.Text>
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

      <TodoItems>
        <TodoItems.Item>
          <div /> {/* empty elem for flexbox to center a little more when using justify-content: space-between */}
          <TodoItems.Text
            isHighlighted={viewMode === 'all' && true}
            onClick={() => setViewMode('all')}
          >
            All
          </TodoItems.Text>
          <TodoItems.Text
            isHighlighted={viewMode === 'active' && true}
            onClick={() => setViewMode('active')}
          >
            Active
          </TodoItems.Text>
          <TodoItems.Text
            isHighlighted={viewMode === 'completed' && true}
            onClick={() => setViewMode('completed')}
          >
            Completed
          </TodoItems.Text>
          <div />
        </TodoItems.Item>
      </TodoItems>

      <p className="m-5 text-center grey">Drag and drop to reorder list</p>
    </>
  )
}

export default TodosContainer