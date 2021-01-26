//Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Style
import GlobalStyle from './components/GlobalStyle'
//Components
import Nav from './components/Nav'
import HomeScreen from './screens/HomeScreen'

function App() {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path='/' component={HomeScreen} exact />
      </Switch>
    </>
  )
}

export default App
