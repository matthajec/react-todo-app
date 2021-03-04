import { useContext } from 'react'
import { Header } from '../components'
import { ThemeContext } from '../context/theme'

function HeaderContainer() {

  const { setTheme } = useContext(ThemeContext)

  return (
    <Header>
      <Header.Title>TODO</Header.Title>
      <Header.ThemeIcon onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')} />
    </Header>
  )
}

export default HeaderContainer