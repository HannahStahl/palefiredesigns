import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shop from './Shop';
import About from './About';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Shop}/>
          <Route path='/About' component={About}/>
          <Route path='/Events' component={Events}/>
        </Switch>
      </div>
    );
  }
}

export default App;
