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
import Dogs from './Dogs';
import OneDog from './OneDog';

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
      },
      dogs: {
        'Skyler': {
          'owner': 'Evan',
          'toys': [
            'tennis balls',
            'shoes'
          ]
        },
        'Leroy': {
          'owner': 'Ian',
          'toys': [
            'mr squeaky',
            'shoes'
          ]
        },
        'Ladybird': {
          'owner': 'Hank',
          'toys': [
            'martinis',
            'self-loathing'
          ]
        },
        'Judge': {
          'owner': 'Clare',
          'toys': []
        }
      }
      // dogImages:{
      //   'Shelly':[
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAACBgYF3d3d+fn6EhISMjIzp6emJiYlCQkIsLCzj4+P09PQpKSmlpaURERFNTU22travr6/S0tKWlpafn58LCwsWFhY7Ozs1NTUaGhrDw8Pb29siIiJTU1NhYWFqamrOHLcdAAAC80lEQVRoge2bbXOqMBCFu9WKIPKiiNYX8P//ygLemVssJOTsLhmnPd/1mU1ONhuyeXsT1yVZnFJKw8VuL//nJgVFSv91TuL50MWR+truZiJvMvqpOpgDvR8gN4o23tCN1CPfjKJpq+y4OBxn012XXRjQRLkmOiiN7JPmqK+MaN3ALWgK9dAXGzvVW+S2Idcc9KFk2tdKjW1FU+2RrWc2O/vTI5uisFrlGm6fwO6Uhrl4hqunwpv0Kr3azDvJk+6yoVvzWk+RbDHhxCYS9Vzixo4kh33hGLhgmnNFE4nV7e/OaLH6EUATJSJo9wHvAveHJrr6Qwu4DUbTBxcN2ewh7hJnoLnVBD7gjY7+0LxFxkNTxkAveWha4miOzTrh65uNJvjrG3OuG938oengD30D92+uw1uB2/eHALrC0HyHN/kUq9AF5hqtGyTQpT90hp1KBOY6BRc24vBl0vvkWIDnQCTqtirbH+qOXxUXDIzNtdCnrRdDv8ugkblmVCbfBTlcBo3sXOxzx0MvZrPXd7hHm/05fKo82mwtg0YG/Hc6HI76UlTt78v60J4RkQEH5zro3e2lyYwO7/WGgMKiHuzQcBVms/E2CXX01R/a0KExXaDDJeYadbgAGl3XZz4azWYCYcOJ9Lnra0Y0f2nj+7XjZeJPMaqUOxPNqc1M7VcTxKpSzD1QqmjXi+u+mMUwJ7Nwi2FGMmfX4fg3Yf7pY4eiBepwNK+JHAEws8kc96CkKnTci2/e0EjgQufrVg6NUJ2EjnudAsdRl+nQ+CfHIpl3cf0sx8hl3xHETiUEep04pvxzOlu83zPOw6l1BHyFa9AmX1dhNAGuwH5o65F98siurOhSjb22ssEL5AnKrexCjX21LjX4ds8u61FFD20ddL0hbzKcOb2mqs+DzIFL7yRPMlUynParKYrHC+dS/TVYMMoW6Oy0aTO8nYEdGo6Kh+a8muXtX6Pd82Z6Ey1QzYqT75a7HWZ869lqv1tk52OULTXeuH4Bbkkoy90Y520AAAAASUVORK5CYII=",
      //   ]
      // }
    };
  }
  render() {
    // const dogName = 'Ladybird';
    // console.log(this.state.dogToys.dogName);
    // console.log(this.state.dogToys[`${dogName}`]);
    // console.log(this.state.dogToys[dogName]);
    // console.log(this.state.dogToys['Ladybird']);
    // console.log([
    //   'martinis',
    //   'self-loathing'
    // ]);
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
          {/* <Route path="/dogs" component={Dogs} /> */}
          <Route path="/dogs" render={(props) => {
            return (<Dogs dogList={Object.keys(this.state.dogs)} {...props} />);
          }} />
          <Route path="/dogs/:dogName" render={(props) => {
            return(<OneDog dogInfo={this.state.dogs} {...props}/>)
          }}/>
          {/* <Route path="/dogs/:dogName" render={(props) =>{
            console.log(props);
            return <OneDog toys={this.state.dogToys} {...props} 
            dogImages={this.state.dogImages}/> */}
        </div>
        </Router>

    
     
    );
  }
}

export default App;