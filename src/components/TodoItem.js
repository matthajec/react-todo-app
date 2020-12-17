import { useState } from 'react'
import PropTypes from 'prop-types'
import checkIcon from '../assets/images/icons/icon-check.svg'

function TodoItem({ children, ...restProps }) {
  return (
    <div className="todo-item" {...restProps}>
      {children}
    </div>
  )
}

TodoItem.Checkbox = function TodoItemCheckbox({ ...restProps }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div
      className={`todo-item__checkbox ${isChecked ? 'checked' : ''}`}
      onClick={() => setIsChecked(prevValue => !prevValue)}
    >
      {isChecked ? <img src={checkIcon} alt="checked"></img> : ''}
    </div>
  )
}



TodoItem.propTypes = {
  type: PropTypes.string
}

export default TodoItem