import { useState } from 'react'
import PropTypes from 'prop-types'
import checkIcon from '../assets/images/icons/icon-check.svg'
import crossIcon from '../assets/images/icons/icon-cross.svg'

function TodoItem({ children, ...restProps }) {
  return <div className="todo-item" {...restProps}>{children}</div>
}

TodoItem.Checkbox = function TodoItemCheckbox({ ...restProps }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div
      className={`todo-item__checkbox ${isChecked ? 'checked' : ''}`}
      onClick={() => setIsChecked(prevValue => !prevValue)}
    >
      {isChecked ? <img className="todo-item__check" src={checkIcon} alt="checked" {...restProps} /> : ''}
    </div>
  )
}

TodoItem.Delete = function TodoItemDelete({ ...restProps }) {
  return <img className="todo-item__delete" src={crossIcon} alt="delete" {...restProps} />
}

TodoItem.Aligner = function TodoItemAligner() {
  return <div></div>
}

TodoItem.Input = function TodoItemInput({ ...restProps }) {
  return <input className="todo-item__input" {...restProps} />
}

export default TodoItem