import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
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

  const reorder = (startIndex, endIndex) => {
    const result = [...todos];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = result => {
    if (!result.destination) { // case for being dropped outside the list
      return;
    }

    setTodos(reorder(result.source.index, result.destination.index))
  }

  return (
    <TodoItems>
      <TodoItems.ItemList>
        <TodoItems.Item onSubmit={handleNewTodoSubmit}>
          <TodoItems.AddButton />
          <TodoItems.Input onChange={handleTodoInput} value={todoInput} placeholder="Create a new todo" />
        </TodoItems.Item>
      </TodoItems.ItemList>

      <TodoItems.ItemList>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.filter(todo => {
                  if (viewMode === 'all') return true
                  if (viewMode === 'active') return todo.isDone !== true
                  if (viewMode === 'completed') return todo.isDone === true
                  return true
                }).map((todo, index) => (
                  <TodoItems.ItemDraggable
                    key={index}
                    todo={todo}
                    index={index}
                    deleteTodo={deleteTodo}
                    toggleTodoCompletion={toggleTodoCompletion}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <TodoItems.Item>
          <TodoItems.Text className='grey'>
            {todos.filter(todo => todo.isDone === false).length} item(s) left
          </TodoItems.Text>
          <TodoItems.Text
            className='grey'
            onClick={() => {
              setTodos(currTodos => {
                return currTodos.filter(todo => todo.isDone === false)
              })
            }}
          >Clear Completed</TodoItems.Text>
        </TodoItems.Item>
      </TodoItems.ItemList>

      <TodoItems.ItemList>
        <TodoItems.Item>
          <div /> {/* empty elem for flexbox to center a little more when using justify-content: space-between */}
          <TodoItems.Text
            className={`
              ${viewMode === 'all' && 'highlighted '}
              cursor-pointer 
            `}
            onClick={() => setViewMode('all')}
          >
            All
          </TodoItems.Text>
          <TodoItems.Text
            className={`
              ${viewMode === 'active' && 'highlighted '}
              cursor-pointer 
            `}
            onClick={() => setViewMode('active')}
          >
            Active
          </TodoItems.Text>
          <TodoItems.Text
            className={`
              ${viewMode === 'completed' && 'highlighted '}
              cursor-pointer 
            `}
            onClick={() => setViewMode('completed')}
          >
            Completed
          </TodoItems.Text>
          <div />
        </TodoItems.Item>
      </TodoItems.ItemList>

      <TodoItems.Instructions>Drag and drop to reorder</TodoItems.Instructions>
    </TodoItems >
  )
}

export default TodosContainer