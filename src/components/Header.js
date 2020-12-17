import themeIconLight from '../assets/images/icons/icon-moon.svg'

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
  return <img className="header__theme-icon" src={themeIconLight} alt="" />
}

export default Header