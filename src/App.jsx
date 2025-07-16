import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Success from './components/Success'
import Error from './components/Error';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/error">
          <Error/>
        </Route>
      </Switch> 
    </BrowserRouter>
    </>
  )
}

export default App
