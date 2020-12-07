import React, { Component } from 'react'
import WalkList from '../WalkList'
import NewWalkForm from '../NewWalkForm'
import EditWalkModal from '../EditWalkModal'
import { Form, Button, Label, Segment, Modal, Header } from 'semantic-ui-react'



export default class WalkContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      walks: [],
      idOfWalkToEdit: -1
    }
  }

  componentDidMount() {
    // get the Walks when this component is first rendered
    this.getWalks()
  }

  getWalks = async () => {
    try {
    // load Walks from the Walk index route in our API
    // note: be sure to add a / to the end of this url
    // Flask/Flask-Cors expects this!!!
      const url = process.env.REACT_APP_API_URL + "/api/v1/walks/"
      // console.log("about to fetch data from:")
      // console.log(url)
      const walksResponse = await fetch(url, {
        credentials: 'include'
      })
      // console.log(walksResponse)
      const walksJson = await walksResponse.json()
       console.log(walksJson)

      this.setState({
        walks: walksJson.data
      })


    } catch(err) {
      console.log("Error getting walk data.", err)
    }
  }

  // add a deleteWalk f here
  // it should take an id of the walk to delete
  // and make the button to call it
  deleteWalk = async (idOfWalkToDelete) => {
    // console.log(idOfWalkToDelete)
    // it should send a request to delete Walk

    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/walks/" + idOfWalkToDelete

      const deleteWalkResponse = await fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      })
      // console.log("deleteWalkResponse", deleteWalkResponse)
      const deleteWalkJson = await deleteWalkResponse.json()
      console.log("deleteWalkJson", deleteWalkJson)

      if(deleteWalkResponse.status === 200) {
        // option 1:
        // this.getWalks()
        // option 2:
        // const Walks = this.state.Walks
        // let indexOfWalkToDelete = 0
        // for(let i = 0; i < Walks.length; i++) {
        //   if(Walks[i].id == idOfWalkToDelete) {
        //     indexOfWalkToDelete = i
        //     break
        //   }
        // }
        // walks.splice(indexOfWalkToDelete, 1)
        // this.setState({ walks: walks })
        // or you can use filter
        this.setState({
          walks: this.state.walks.filter(walk => walk.id !== idOfWalkToDelete)
        })
      }
    } catch(err) {
      console.log("Error deleting walk: ", err)
    }

  }

  createWalk = async (walkToAdd) => {
    // console.log("here is the walk you want to add")
    // console.log(walkToAdd)
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/walks/"
      const createWalkResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(walkToAdd)
      })
      const createWalkJson = await createWalkResponse.json()
      // console.log(createWolkJson)

      if(createWalkResponse.status === 201 || createWalkResponse.status === 200){
        this.setState({
          walks: [...this.state.walks, createWalkJson.data]
        })
      }


    } catch(err) {
      console.log("Error adding walk", err)
    }
  }

  editWalk = (idOfWalkToEdit) => {
    console.log("you are trying to edit walk with id: ", idOfWalkToEdit)

    // put the id of the Walk that we want to edit in state
    // to conditionally render a modal
    this.setState({
      idOfWalkToEdit: idOfWalkToEdit
    })
  }

  updateWalk = async (updatedWalkInfo) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/walks/" + this.state.idOfWalkToEdit

      const updateWalkResponse = await fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(updatedWalkInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log("updateWalkResponse", updateWalkResponse)
      const updateWalkJson = await updateWalkResponse.json()
      console.log("updateWalkJson", updateWalkJson)

      if(updateWalkResponse.status == 200) {
        const walks = this.state.walks
        const indexOfWalkBeingUpdated = walks.findIndex(walk => walk.id == this.state.idOfWalkToEdit)
        walks[indexOfWalkBeingUpdated] = updateWalkJson.data
        this.setState({
          walks: walks,
          idOfWalkToEdit: -1 // close the modal
        })
      }

    } catch(err) {
      console.log("Error updating walk info: ", err)
    }
  }

  closeModal = () => {
   this.setState({
     idOfWalkToEdit: -1
   })
 }

  render() {
    return (
      <React.Fragment>
        <h2>See the Walks</h2>
        <NewWalkForm createWalk={this.createWalk}/>
        <WalkList
          walks={this.state.walks}
          deleteWalk={this.deleteWalk}
          editWalk={this.editWalk}
        />
        {
          this.state.idOfWalkToEdit !== -1
          &&
          <EditWalkModal
            key={this.state.idOfWalkToEdit}
            walkToEdit={this.state.walks.find((walk) => walk.id === this.state.idOfWalkToEdit)}
            updateWalk={this.updateWalk}
            closeModal={this.closeModal}
          />
        }
      </React.Fragment>
    )
  }
}
