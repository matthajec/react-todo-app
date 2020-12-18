import { MoonIcon, SunIcon } from './svgs'

function Header({ children, ...restProps }) {
  return (
    <header className="header" {...restProps}>
      {children}
    </header>
  )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <h1 className="header__title" {...restProps}>{children}</h1>
}

Header.ThemeIcon = function HeaderThemeIcon({ ...restProps }) {
  return <MoonIcon className="header__theme-icon" />
}

export default Header