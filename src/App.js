import { useState, useEffect } from 'react'
import { HeaderContainer, TodosContainer } from './containers'
// import bgMobileLight from './assets/images/backgrounds/bg-mobile-light.jpg'
import { ThemeContext } from './context/theme'

function App() {
  const localTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(localTheme ? localTheme : 'light') // sets theme to the theme stored in localstorage, if there is none default to 'light'

  useEffect(() => {
    document.body.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-img" />
      {/* <img className="bg-img" src={bgMobileLight} alt="" /> */}
      <div className="container">
        <HeaderContainer />
        <TodosContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
