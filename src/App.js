import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "2daa73ba8246cecd3539ab147f2150e9";

class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)

    const data = await api_call.json();
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe = {this.getRecipe}></Form>
        <Recipes recipes={this.state.recipes}></Recipes>
      </div>
    );
  }
}

export default App;