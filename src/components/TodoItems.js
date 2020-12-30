import { useContext } from 'react'
import PropTypes from 'prop-types'
import { CheckIcon, CrossIcon, PlusIcon } from './svgs'
import { ThemeContext } from '../context/theme'
import { Draggable } from 'react-beautiful-dnd'

function TodoItems({ children, ...restProps }) {
  const { theme } = useContext(ThemeContext)
  return <div className={`todo-items ${theme}`} {...restProps}>{children}</div>
}

TodoItems.ItemList = function TodoItemsItemList({ children, ...restProps }) {
  return <div className={`todo-items__item-list`} {...restProps}>{children}</div>
}

TodoItems.Item = function TodoItemsItem({ onSubmit, children, ...restProps }) {
  if (onSubmit) {
    return <form className="todo-items__item" onSubmit={onSubmit} {...restProps}>{children}</form>
  } else {
    return <div className="todo-items__item" {...restProps}>{children}</div>
  }
}

TodoItems.Checkbox = function TodoItemsCheckbox({ onClick, isCheckedOff, ...restProps }) {
  return (
    <div
      className={`todo-items__checkbox ${isCheckedOff ? 'checked' : ''}`}
      onClick={onClick}
    >
      {isCheckedOff ? <CheckIcon className="todo-item__check" /> : ''}
    </div>
  )
}

TodoItems.AddButton = function TodoItemsAddButton({ onClick, ...restProps }) {
  return (
    <button
      className='todo-items__add-button'
      type='submit'
      onClick={onClick}
      aria-label="Add todo"
    >
      <PlusIcon className="todo-items__plus"  {...restProps} />
    </button>
  )
}

TodoItems.Delete = function TodoItemsDelete({ onClick, ...restProps }) {
  return <CrossIcon className="todo-items__delete" onClick={onClick} {...restProps} />
}

TodoItems.Input = function TodoItemsInput({ placeholder, value, onChange, ...restProps }) {
  return (
    <>
      <label style={{ display: 'none' }} for="todo-input">Create a new todo</label>
      <input
        id="todo-input"
        className="todo-items__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </>
  )
}

TodoItems.Text = function TodoItemsText({ children, ...restProps }) {
  return <p className="todo-items__text" {...restProps}>{children}</p>
}

TodoItems.Instructions = function TodoItemsInsturctions({ children, ...restProps }) {
  return <p className="todo-items__instructions" {...restProps}>{children}</p>
}

TodoItems.ItemDraggable = function TodoItemsItemDraggable({ todo, index, toggleTodoCompletion, deleteTodo }) {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={`todo-items__item todo-items__draggable ${snapshot.isDragging ? 'todo-items__draggable__dragging' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TodoItems.Checkbox onClick={() => toggleTodoCompletion(index)} isCheckedOff={todo.isDone} />
          <TodoItems.Text className={`todo-items__text ${todo.isDone ? 'crossed-off grey' : ''} grow`}>{todo.desc}</TodoItems.Text>
          <TodoItems.Delete onClick={() => deleteTodo(index)} />
        </div>
      )
      }
    </Draggable>
  )
}



TodoItems.Item.propTypes = {
  onSubmit: PropTypes.func,
}

TodoItems.Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCheckedOff: PropTypes.bool
}

TodoItems.AddButton.propTypes = {
  onClick: PropTypes.func
}

TodoItems.Delete.propTypes = {
  onClick: PropTypes.func.isRequired
}

TodoItems.Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

TodoItems.Text.propTypes = {}

export default TodoItems