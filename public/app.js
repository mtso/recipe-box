import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import Recipe from './components/Recipe.jsx';
import Editor from './components/Editor.jsx';

var data = require('./data/data');
data.initialize(window.localStorage);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      workingRecipe: {},
      recipes: data.getRecipes()
    }
    this.reset = this.reset.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  close() {
    this.setState({showModal: false});
  }
  open() {
    this.setState({
      showModal: true,
      workingRecipe: {},
    });
  }
  reset() {
    localStorage.clear();
    location.reload();
  }
  save(recipe) {
    data.saveRecipe(recipe)
    this.setState({recipes: data.getRecipes()})
  }
  deleteRecipe(recipe) {
    data.deleteRecipe(recipe);
    this.setState({recipes: data.getRecipes()})
  }
  edit(recipe) {
    console.log(recipe)
    this.setState({
      workingRecipe: recipe
    }, () => {
      this.setState({
        showModal: true
      })
    })
  }
  render() {
    var recipes = this.state.recipes.map((recipe) => {
      return (<Recipe recipe={recipe} delete={this.deleteRecipe} edit={this.edit} />)
    })
    return (
      <div className="container">
        <div className="panel">
          <div className="panel-heading">
            <h4>Recipe Box</h4>
          </div>
        </div>
        <Editor save={this.save} show={this.state.showModal} onHide={this.close} recipe={this.state.workingRecipe} />
        {recipes}
        <div className="panel">
          <Button onClick={this.open} className="btn-primary">New Recipe</Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
