//more complex/customizable things are importated from containers, which organizes compound componponents found in the 'components' folder
import { HeaderContainer } from './containers'
import { TodoItem } from './components'
import bgMobileLight from './assets/images/backgrounds/bg-mobile-light.jpg'

function App() {
  return (
    <>
      <img className="bg-img" src={bgMobileLight} alt="" />
      <div className="container">
        <HeaderContainer />
        <TodoItem>
          <TodoItem.Checkbox />
        </TodoItem>
      </div>
    </>
  );
}

export default App;
