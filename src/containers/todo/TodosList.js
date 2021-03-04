import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { TodoItems } from '../../components'

export default function TodosList({ todos, setTodos, viewMode }) {

  const toggleTodoCompletion = index => {
    let newTodos = [...todos] // spread so todos is not passed by reference
    newTodos[index] = {
      ...newTodos[index],
      isDone: !newTodos[index].isDone
    } // toggle the truthiness of isDone for the given todo
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    setTodos(prevTodos => prevTodos.filter((todo, _index) => _index !== index))
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
  )
}