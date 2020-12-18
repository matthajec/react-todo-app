//more complex/customizable things are importated from containers, which organizes compound componponents found in the 'components' folder
import { HeaderContainer } from './containers'
import { TodoItem } from './components'
import bgMobileLight from './assets/images/backgrounds/bg-mobile-light.jpg'

function preloadImages(...paths) {
  paths.forEach(path => {
    let img = new Image()
    img.url = path
  })
}
preloadImages('./assets/images/icons/icon-check.svg', './assets/images/icons/icon-cross.svg')

function App() {
  return (
    <>
      <img className="bg-img" src={bgMobileLight} alt="" />
      <div className="container">
        <HeaderContainer />
        <TodoItem>
          <TodoItem.Checkbox />
          <TodoItem.Input placeholder="Create a new todo" />
        </TodoItem>
      </div>
    </>
  );
}

export default App;
