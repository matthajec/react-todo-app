import { useContext } from 'react'
import { TodoItems } from '../../components'
import { ThemeContext } from '../../context/theme'


export default function TodosNav({ viewMode, setViewMode }) {

  const { theme } = useContext(ThemeContext)

  return (
    <TodoItems.ItemList>
      <TodoItems.Item>
        <div />
        <TodoItems.Text
          className={`
          ${viewMode === 'all' && 'highlighted '}
          ${theme === "dark" && 'grey'}
          cursor-pointer 
        `}
          onClick={() => setViewMode('all')}
        >
          All
      </TodoItems.Text>
        <TodoItems.Text
          className={`
          ${viewMode === 'active' && 'highlighted '}
          ${theme === "dark" && 'grey'}
          cursor-pointer 
        `}
          onClick={() => setViewMode('active')}
        >
          Active
      </TodoItems.Text>
        <TodoItems.Text
          className={`
          ${viewMode === 'completed' && 'highlighted '}
          ${theme === "dark" && 'grey'}
          cursor-pointer 
        `}
          onClick={() => setViewMode('completed')}
        >
          Completed
      </TodoItems.Text>
        <div />
      </TodoItems.Item>
    </TodoItems.ItemList>
  )
}