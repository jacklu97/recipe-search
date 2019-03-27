import React from 'react';


const Recipes = (props) => (
    <div className="container">
       <div className="row">
       { props.recipes.map((recipe) => {
          return (
            <div className="col-md-4">
                <div className="recipes__box">
                    <img className="recipes__box-img" src={recipe.image_url} alt={recipe.title}></img>
                    <div className="recipe__text">
                        <h5>{ recipe.title }</h5>
                    </div>
                </div>
            </div>
          )
        }) }</div>
    </div>
);

export default Recipes;