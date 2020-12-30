import PropTypes from 'prop-types'
import { CheckIcon, CrossIcon, PlusIcon } from './svgs'

function TodoItems({ children, ...restProps }) {
  return <div className="todo-items" {...restProps}>{children}</div>
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

TodoItems.Text = function TodoItemsText({ children, ...restProps }) {
  return <p className={`todo-items__text`} {...restProps}>{children}</p>
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