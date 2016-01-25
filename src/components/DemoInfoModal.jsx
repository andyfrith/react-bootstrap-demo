var React = require("react");
var Button = require('react-bootstrap/lib/Button');
var Modal = require('react-bootstrap/lib/Modal');
var ModalTitle = require('react-bootstrap/lib/ModalTitle');
var ModalHeader = require('react-bootstrap/lib/ModalHeader');
var ModalBody = require('react-bootstrap/lib/ModalBody');
var ModalFooter = require('react-bootstrap/lib/ModalFooter');

var DemoInfoModal = React.createClass({

	getInitialState(){
		return { showModal: true };
	},

	close(){
		this.setState({ showModal: false });
	},

	render: function () {
		return (
			<div>
				<Modal aria-labelledby='modal-label'
							 show={this.state.showModal}
							 onHide={this.close} bsSize="large" aria-labelledby="contained-modal-title-lg">
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">fyi ... this is a ReactJS application!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Website built with Alt, ReactJS, reactJS-bootstrap, Bootstrap 3 CSS</h4>
						<p>This version of the Good Apple Media website was created to demonstrate the use of the ReactJS framework.  UI components were developed using the react-js bootstrap components.  CSS styling is accomplished using SASS.  NPM is used for dependency management and such.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});

module.exports = DemoInfoModal;