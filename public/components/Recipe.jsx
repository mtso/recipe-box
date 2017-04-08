import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  deleteRecipe() {
    console.log(this.props.recipe)
    this.props.delete(this.props.recipe)
  }
  render() {
    var recipe = this.props.recipe;
    var ingredients = String(recipe.ingredients).split(',');
    ingredients = ingredients.map((ingredient) => {
      ingredient = ingredient.trim()
      return (
        <li className="list-group-item" key={ingredient}>{ingredient}</li>
      )
    })
    return(
      <div className="panel panel-default">
        <div className="panel-heading">{recipe.name}</div>
        <div className="panel-body">
          <ul className="list-group">
            {ingredients}
          </ul>
          <button className="btn btn-default">Edit</button>
          <span> </span>
          <button className="btn btn-danger btn-default" onClick={this.deleteRecipe}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Recipe
