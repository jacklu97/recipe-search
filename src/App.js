import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const API_KEY = "2daa73ba8246cecd3539ab147f2150e9";

class App extends Component {

  getRecipe = async (e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`)

    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe = {this.getRecipe}></Form>
      </div>
    );
  }
}

export default App;