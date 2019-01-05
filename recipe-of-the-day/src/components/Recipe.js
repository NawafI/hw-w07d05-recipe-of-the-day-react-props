import React  from 'react';

const Recipe = (props) => {
    const allRecipes = props.recipes;
    return (
        <div className="Recipe">
        <h4>Name: {allRecipes.name} </h4>
        <h4>Serves: {allRecipes.servings}</h4>
        <h4>Category: {allRecipes.category}</h4>
        </div>
    )
}


export default Recipe;
