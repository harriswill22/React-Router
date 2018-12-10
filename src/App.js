import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router, // Watches for changes to URL
  Route,                   // Renders components based on the specific URL
  //Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import OneCat from './OneCat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // catList: [
      //   'Oakley',
      //   'Milla',
      //   'Whisper',
      //   'Neo'
      // ],
      catToys: {
        'Oakley': [
          'string',
          'bookmarks',
          'ice',
          'daddy\'s face'
        ],
        'Milla': [
          'drool'
        ],
        'Whisper': [
          'string'
        ],
        'Neo': [
          'the couch'
        ]
      }
    };
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cats" render={(props) => {
            return <Cats catList={Object.keys(this.state.catToys)} {...props} />
          }} />          
          <Route path="/cats/:catName" render={(props) => {
            return <OneCat toys={this.state.catToys} {...props} />
          }} />
        </div>
      </Router>
    );
  }
}

export default App;