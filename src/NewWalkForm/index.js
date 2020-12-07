import React, { Component } from 'react'
import { Form, Button, Label, Segment, Modal, Header, Dropdown } from 'semantic-ui-react'
import DropDownTools from '../DropDowns/tools.js'
import DropDownMaterials from '../DropDowns/materials.js'
import DropDownEdging from '../DropDowns/edging.js'
import DropDownPath from '../DropDowns/path.js'

export default class NewWalkForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      tools: '',
      materials: '',
      edging: '',
      path: ''

    }
  }

  handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createWalk(this.state)

    this.setState({
      name: '',
      author: '',
      tools: '',
      materials: '',
      edging: '',
      path: ''
    })

  }


  render()  {
    return (
      <Segment>
        <h4> Create your new walk:</h4>
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
          <DropDownTools />
          <Label>Materials:</Label>
          <DropDownMaterials />
          <Label>Edging:</Label>
          <DropDownEdging />
          <Label>Decorative Path:</Label>
          <DropDownPath />

          <Button type="Submit">Create Your New Walk</Button>
        </Form>
      </Segment>
    )
  }
}
