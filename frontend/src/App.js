//Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Style
import GlobalStyle from './components/GlobalStyle'
//Components
import Nav from './components/Nav'
import HomeScreen from './screens/HomeScreen'
import EcommScreen from './screens/EcommScreen'
import PlantSackScreen from './screens/PlantSackScreen'
import HellovitScreen from './screens/HellovitScreen'

function App() {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/ecomm' component={EcommScreen} />
        <Route path='/plantsack' component={PlantSackScreen} />
        <Route path='/hellovit' component={HellovitScreen} />
      </Switch>
    </>
  )
}

export default App
