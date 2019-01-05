import React, { Component } from 'react';

import './App.css';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Recipes from './components/Recipes';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Recipes/>
      <RecipeOfTheDay/>

      </div>
    );
  }
}

export default App;