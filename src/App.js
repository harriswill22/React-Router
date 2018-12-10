import React, { Component } from 'react';
import About from './About'
import Home from './Home'
import Cats from './Cats'
import NavBar from './NavBar'
import {BrowserRouter as Router, //Watches from changes to URL
  Route,  //Renders components based on the specific URL
  Link }  // Changes the URL so the Router sees it
from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/cats" component={Cats}/>
      </div>
    </Router>
    );
  }
}

export default App;
