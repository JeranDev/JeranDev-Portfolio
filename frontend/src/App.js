import { BrowserRouter as Router, Route } from 'react-router-dom'
//Style
import GlobalStyle from './components/GlobalStyle'
//Screens
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Router>
        <Route path='/' component={HomeScreen} exact />
      </Router>
    </>
  )
}

export default App
