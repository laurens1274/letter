import React, { Component } from 'react'
import './App.css';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import InitPage from './Components/InitPage';
import Part1 from './Components/Part1';
import Part2 from './Components/Part2';
import Part3 from './Components/Part3t';
import Part4 from './Components/Part4';
import Part5 from './Components/Part5';
import Part6 from './Components/Part6';
import Part7 from './Components/Part7';
import Part8 from './Components/Part8';
import Part9 from './Components/Part9';
import Part10 from './Components/Part10';
import Secret1 from './Components/Secret1';
import Secret2 from './Components/Secret2';

export default class App extends Component {
  render() {
    return (

      <Router>
        <div className="boxCont">
        <Switch>
          <Route path="/" exact>
            <InitPage></InitPage>
          </Route>
          <Route path='/1' exact>
            <Part1></Part1>
          </Route>
          <Route path='/2' exact>
            <Part2></Part2>
          </Route>
          <Route path='/3' exact>
            <Part3></Part3>
          </Route>
          <Route path='/4' exact>
          <Part4></Part4>
          </Route>
          <Route path='/5' exact>
            <Part5></Part5>
          </Route>
          <Route path='/6' exact>
            <Part6></Part6>
          </Route>
          <Route path='/7' exact>
            <Part7></Part7>
          </Route>
          <Route path='/8' exact>
            <Part8></Part8>
          </Route>
          <Route path='/9' exact>
            <Part9></Part9>
          </Route>
          <Route path='/10' exact>
            <Part10></Part10>
          </Route>
          <Route path='/secret/enter' exact>
            <Secret1></Secret1>
          </Route>
          <Route path='/secret/state' exact>
            <Secret2></Secret2>
          </Route>
        </Switch>
        </div>
      </Router>
    )
  }
}
