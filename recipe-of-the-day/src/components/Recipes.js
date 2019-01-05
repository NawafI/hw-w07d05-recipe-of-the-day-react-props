import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {
    renderRecipes (){
        const allRecipes = recipes.map((element , index)=>
        {
            return(
                <Recipe recipes= {element} key={index}/>
            );
        });
        return allRecipes;
    }
    render() {
        return(
            <div className="Recipes">
                <h1 className="title">Recipes</h1>
                {this.renderRecipes()};
            </div>
        )
    }
}

export default Recipes;