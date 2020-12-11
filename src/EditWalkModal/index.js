import React, { Component } from 'react'
import { Form, Button, Label, Segment, Modal, Header } from 'semantic-ui-react'
import '../index.css'

export default class EditWalkModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.walkToEdit.name,
      tools: props.walkToEdit.tools,
      materials: props.walkToEdit.materials,
      edging: props.walkToEdit.edging,
      path: props.walkToEdit.path

    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateWalk(this.state)
  }

  render() {
    return(
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
        <Header>
          <h3>Enter new info</h3>
        </Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Enter a name"
          onChange={this.handleChange}
          />
          <Label>Tools:</Label>
          <Form.Input
            type="text"
            name="tools"
            value={this.state.owner}
            placeholder="Select tools from the list"
            onChange={this.handleChange}
        />
        <Label>Materials:</Label>
        <Form.Input
          type="text"
          name="materials"
          value={this.state.owner}
          placeholder="Select materials from the list"
          onChange={this.handleChange}
          />
          <Label>Edging:</Label>
          <Form.Input
            type="text"
            name="edging"
            value={this.state.owner}
            placeholder="Select edging from the list"
            onChange={this.handleChange}
          />
          <Label>Designer Path:</Label>
          <Form.Input
            type="text"
            name="path"
            value={this.state.owner}
            placeholder="Select path from the list"
            onChange={this.handleChange}
          />
          <Modal.Actions>
            <Button type="Submit">Update Walk</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
  }
}
