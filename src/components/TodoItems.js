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

TodoItems.Text = function TodoItemsText({ doesGrow, isGreyed, isCrossedOff, children, ...restProps }) {
  // doesGrow: sets flex-grow to 1 (true) or 0 (false)
  // isGreyed: if true this make the text color grey
  // isCrossedOff: if true, set the color to grey and put a line through the
  let extraClasses = ''
  if (doesGrow) extraClasses += 'grow '
  if (isGreyed) extraClasses += 'grey '
  if (isCrossedOff) extraClasses += 'crossed-off '

  return <p className={`todo-items__text ${extraClasses}`} {...restProps}>{children}</p>
}

export default TodoItems