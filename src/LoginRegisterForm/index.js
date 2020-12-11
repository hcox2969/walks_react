import React, { Component } from 'react'
import { Form, Label } from 'semantic-ui-react'
import '../index.css'
//import { Button } from 'reactstrap'
import { Container, Col, Row, ListGroup, ListGroupItem, Table,  Card, CardImg, CardText, CardBody,
  CardTitle, CardDeck, CardSubtitle, Button, UncontrolledCollapse } from 'reactstrap'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      action: 'Login' // this will track whether we are logging in or registering
    }
  }

switchForm = () => {
  if(this.state.action === "Login") {
    this.setState({ action: "Register" })
  } else {
    this.setState({ action: "Login" })
  }
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
   event.preventDefault()
   console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
   console.log(this.state);
   // Extra challenge: Validate the form!
   // Such as...
   // Highlight blank fields fields with errors in red
   // show the errors under or next to the field
   // make sure password is certain length, strength,
   // make sure PW includes certain characters (use RegExp)
   if(this.state.action === "Register") {
      this.props.register(this.state)
    } else {
      this.props.login(this.state)
    }
 }

  render() {
    return (
      <React.Fragment>

      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Create Your Walk
      </Button>
      <UncontrolledCollapse toggler="#toggler">

        <h2>{this.state.action} here</h2>
        <Form onSubmit={this.handleSubmit}>
        {
         // only show username field if they are registering
         // because our login process just uses email
         this.state.action === "Register"
         &&
         <React.Fragment>
           <Label>Username:</Label>
           <Form.Input
             type="text"
             name="username"
             placeholder="Enter a username"
             value={this.state.username}
             onChange={this.handleChange}
           />
         </React.Fragment>
        }
          <Label>Email:</Label>
          <Form.Input
            type="email"
            name="email"
            placeholder="Enter an email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button className="btn btn-primary" type="Submit">
            { this.state.action === "Login" ? "Log in" : "Sign up"}
          </Button>
        </Form>

        {
          this.state.action === "Login"
          ?
          <p>
            Need an account? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
          </p>
          :
          <p>
            Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
          </p>
        }
        </UncontrolledCollapse>

        <div className="container">
        <h1>Making a Gravel or Mulch Walk</h1>
        <div className="row">
          <div className="col-sm">
            <p>Gravel and mulch are good choices for a casual or lightly traveled walk. Bricks, timbers, or other edging help keep the surface from spreading into the lawn. Flooding can be a problem, so pick a dry spot, and lay 1- to 2-inch layer of sand in the excavation for drainage. Cover it with landscape fabric to prevent sand from working into the gravel or mulch and to keep weeds out. Add a 4-inch layer of gravel or mulch and tamp for a firm surface.</p>
          </div>
          <div className="col-sm">
            <p>Combining materials, such as concrete, brick, or wood, with the mulch or gravel can create interesting options or patterns. </p>
          </div>
          <div className="col-sm">
            <p>At its simplest, a walk is nothing more than some gravel or mulch spread on the ground. The walk shown here is a bit more durable. Edging keeps the surface from spreading into your yard. Sand provides a sturdy base that can easily be smoothed flat. If you want a mulch walk, bark mulch is less prone to rot and fungus. If you are building a gravel walk, pea gravel and crushed stone make good walking surfaces. Check with your local building supplier. Some types of gravel and stone are available only in certain areas of the country. </p>
          </div>
          <div>
            <img src="/Pictures/001.png" className="img-fluid" alt=""/>
          </div>
        </div>
        </div>
        <div>
          <h1><small>Installing Edging</small></h1>
        </div>
        <div>
        <CardDeck>
    <Card>
      <CardImg top width="100%" src="/Pictures/002.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Plastic Edging</CardTitle>
        <CardText>Plastic edging is inexpensive, flexible, and sticks up on 1/2-inch from the ground once installed. Dig a trench, place the edging in it, and align the aging with your layout line. Anchor the edging by driving plastic stakes through its bottom edge with a 3-pound sledgehammer. Fill the trench with soil, then compact it with a 2x4. </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/003.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Benderboard</CardTitle>
        <CardText>Benderboard is made of thin layers of wood —  often redwood. Drive stakes along the inside edge of the curve and temporarily score the bender board to them. Add layers until the curve is as thick as the rest of the edging, then drive stakes to support the back. Screw them to the benderboard; remove inside stakes.
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/004.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Timbers</CardTitle>
        <CardText>Lay timbers along the edge of the walk and butt corners together. Secure the embers with 12-inch spikes at each corner. </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/005.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Brick edging</CardTitle>
        <CardText>The best type of brick to use for edging is paver brick, placed on the end or an edge. Dig a trench deep enough so the tops of the bricks are flush with the ground or up to 1 inch above grade. Place the bricks in the trench and pack soil around them.</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/006.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Precast concrete pavers</CardTitle>
        <CardText>Pavers also can be used in the same manner as brick edging. Lay the pavers flat or on the edge in the trench and embed them in the ground with a rubber mallet until they are flush with the ground or up to 1 inch above grade. Pack soil around them.
        </CardText>
      </CardBody>
    </Card>
  </CardDeck>
        </div>

        <div>
          <h1><small>Preparing the bed and adding gravel or mulch</small></h1>
        </div>
        <div>
        <CardDeck>
          <Card>
          <CardImg top width="100%" src="/Pictures/007.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Step 1</CardTitle>
        <CardText>Lay out and excavate the area deep enough to accommodate 1- to 2-inch layer of sand, plus a 4-inch layer of gravel or mulch. Dog trench for edging. If necessary, place edging along the the sides of the pathway. Add a 1- to 2-inch layer of sand within the area and screed gravel. </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/008.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Step 2</CardTitle>
        <CardText>Tamp the sand with a hand tamper. For a sturdy foundation, compact the sand by moistening it with water.</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/009.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Step 3</CardTitle>
        <CardText>Put landscape fabric over the sand to help control weeds. Cut it to fit snugly agains the edging. If you need more than one strip, overlap edges by 6 inches.</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/010.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Step 4</CardTitle>
        <CardText>Put the gravel or mulch from a wheelbarrow onto the sand and spread it with a rake. Take care not to dislodge the landscape fabric. Make sure the gravel or mulch is spread evenly across the walk and agains the edging.</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/Pictures/011.png" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Step 5</CardTitle>
        <CardText>Compact the gravel or mulch by spraying it lightly with water and rolling it with a drum roller. Be carful not to loosen the edging by bumping it with roller.Use a hand tamper for hard-to-reach areas, or if a roller is not available.</CardText>
      </CardBody>
    </Card>
    </CardDeck>
        </div>

        <div>
          <h1><small>Pick a decorative path to complete your walk</small></h1>
        </div>
        <div>
        <CardDeck>
          <Card>
          <CardImg top width="100%" src="/Pictures/012.png" alt="Card image cap" />
          <CardBody>
            <CardText>You can make a decorative path by surfacing the walk with flat stones and fill-in the joints with a fine gravel.</CardText>
          </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src="/Pictures/013.png" alt="Card image cap" />
          <CardBody>
            <CardText>Brick pavers and gravel or mulch allow you to create an endless variety of patterns. If your edging is brick as well, the interior bricks can match or contrast with them — it’s up to your imagination.</CardText>
          </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src="/Pictures/014.png" alt="Card image cap" />
          <CardBody>
            <CardText>Concrete pavers mixed with gravel or mulch are easy to lay and create a unique look. Gravel or mulch can be used between any shape concrete paver or precast block.</CardText>
          </CardBody>
          </Card>
          </CardDeck>
        </div>
      </React.Fragment>
    )
  }
}
