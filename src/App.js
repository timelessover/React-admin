import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './routes/Login/index'
import Index from './routes/Index/index'
import './assets/font/iconfont.css'
import PrivateRoute from './components/PrivateRoute/index'



class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Index}/> 
     </Switch>

    );
  }
}

export default App;