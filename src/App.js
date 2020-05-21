import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import EmployeeEdit from './Components/EmployeeEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/employees' exact={true} component={EmployeeList}/>
          <Route path='/employee/:id' component={EmployeeEdit}/>
          {/* <Route path='/employee/new' componetn={EmployeeAdd}/> */}

        </Switch>
      </Router>
    )
  }
}

export default App;