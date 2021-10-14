import React from 'react'

import {Container} from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Profile from './authentication/Profile'
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'
import Dashboard from './dropbox/Dashboard'



function App() {
  return (   
     
        <Router>
          <AuthProvider>
            <Switch>
              {/* Dropbox  */}
              <PrivateRoute exact path="/" component={Dashboard} />

              {/* Profile */}
              <PrivateRoute  path="/user" component={Profile}/>
              <PrivateRoute  path="/update-profile" component={UpdateProfile}/>

              {/*Auth */}
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>      
      
  
   
  )
}

export default App;
