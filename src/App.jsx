import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'

export const App = ()=> {
  

  return (
    
    <>
    <Router basename="/landingPage-ClinLink">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Añade más rutas según sea necesario */}
      </Switch>
    </Router>
      <Outlet />
    </>
  )
}

export default App
