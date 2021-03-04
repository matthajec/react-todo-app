import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { MoonIcon, SunIcon } from './svgs'

function Header({ children, ...restProps }) {
  const { theme } = useContext(ThemeContext)

  return (
    <header className={`header ${theme}`} {...restProps}>
      { children}
    </header >
  )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <h1 className="header__title" {...restProps}>{children}</h1>
}

Header.ThemeIcon = function HeaderThemeIcon({ ...restProps }) {
  const { theme } = useContext(ThemeContext)

  if (theme === "dark") return <SunIcon className="header__theme-icon" {...restProps} />
  return <MoonIcon className="header__theme-icon" {...restProps} />
}

export default Header