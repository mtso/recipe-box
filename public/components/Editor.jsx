import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Editor extends Component {
  constructor(props) {
    super(props)
    var recipe = props.recipe || {};
    this.state = {
      name: recipe.name || '',
      ingredients: recipe.ingredients || '',
    }
    this.save = this.save.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleIngredients = this.handleIngredients.bind(this)
  }
  save() {
    this.props.save({
      name: this.state.name,
      ingredients: this.state.ingredients,
      _id: this.props.recipe._id
    })
    this.props.onHide()
  }
  handleName(event) {
    this.setState({name: event.target.value})
  }
  handleIngredients(event) {
    this.setState({ingredients: event.target.value})
  }
  componentWillReceiveProps(props) {
    this.setState({
      name: props.recipe.name,
      ingredients: props.recipe.ingredients,
      _id: props.recipe._id
    })
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Editor</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label className="control-label">Name</label>
            <input className="form-control" type='text' value={this.state.name} onChange={this.handleName} />
          </div>
          <div className="form-group">
            <label className="control-label">Ingredients</label>
            <input className="form-control" type='text' value={this.state.ingredients} onChange={this.handleIngredients} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.save}>Save</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Editor;
