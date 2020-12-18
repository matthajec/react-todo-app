// import PropTypes from 'prop-types'
import { CheckIcon, CrossIcon, PlusIcon } from './svgs'

function TodoItems({ children, ...restProps }) {
  return <div className="todo-items" {...restProps}>{children}</div>
}

TodoItems.Item = function TodoItemsItem({ onSubmit, children, ...restProps }) {
  return (
    <form
      className="todo-items__item"
      onSubmit={onSubmit}
      {...restProps}
    >{children}</form>
  )
}

TodoItems.Checkbox = function TodoItemsCheckbox({ onClick, isChecked, ...restProps }) {
  return (
    <div
      className={`todo-items__checkbox ${isChecked ? 'checked' : ''}`}
      onClick={onClick}
    >
      {isChecked ? <CheckIcon className="todo-item__check" /> : ''}
    </div>
  )
}

TodoItems.AddButton = function TodoItemsAddButton({ onClick, ...restProps }) {
  return (
    <button
      className='todo-items__add-button'
      type='submit'
      onClick={onClick}
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
    <input
      className="todo-items__input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  )
}

TodoItems.Text = function TodoItemsText({ isCrossedOff, children, ...restProps }) {
  return <p className={`todo-items__text ${isCrossedOff ? 'crossed-off' : ''}`} {...restProps}>{children}</p>
}


export default TodoItems