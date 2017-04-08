import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.edit = this.edit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  deleteRecipe() {
    console.log(this.props.recipe)
    this.props.delete(this.props.recipe)
  }
  edit() {
    this.props.edit(this.props.recipe)
  }
  toggle(e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    })
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
        <div className="panel-heading">
          <a href="" onClick={this.toggle}>{recipe.name}</a>
        </div>
        <Collapse in={this.state.isHidden}>
          <div className="panel-body">
            <ul className="list-group">
              {ingredients}
            </ul>
            <button className="btn btn-default" onClick={this.edit}>Edit</button>
            <span> </span>
            <button className="btn btn-danger btn-default" onClick={this.deleteRecipe}>Delete</button>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Recipe
