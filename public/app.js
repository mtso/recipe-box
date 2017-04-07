import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

var Toggle = () => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="modal">
      hello world
    </button>
  )
}

// var Modal = () => {
//   return (
//     <div id="modal" className="modal fade" tabIndex="-1" role="dialog">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//             <h4 className="modal-title">Title</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

var App = () => {
  return (
    <div id="container">
      <Toggle />
      <Modal />
    </div>
  )
}

class ControlledModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  render() {
    return (
      <div id="container">
        <Button onClick={this.open}>
          Launch Modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal header</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    )
  }
}

ReactDOM.render(<ControlledModal />, document.getElementById('app'));
