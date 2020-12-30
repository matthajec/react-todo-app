import { useState } from 'react'
import { HeaderContainer, TodosContainer } from './containers'
import bgMobileLight from './assets/images/backgrounds/bg-mobile-light.jpg'
import { ThemeContext } from './context/theme'

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <img className="bg-img" src={bgMobileLight} alt="" />
      <div className="container">
        <HeaderContainer />
        <TodosContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
