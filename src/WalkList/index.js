import React from 'react'
import { Card, Button } from 'semantic-ui-react'


export default function WalkList(props) {
//console.log(props.walks)
  const walks = props.walks.map(walk => {

    return (
      <Card key={walk.id} color={"red"}>
        <Card.Content textAlign={"center"}>
          <Card.Header>
            {walk.name}
          </Card.Header>
          <Card.Meta>
            {walk.tools}
          </Card.Meta>
          <Card.Meta>
            {walk.materials}
          </Card.Meta>
          <Card.Meta>
            {walk.edging}
          </Card.Meta>
          <Card.Meta>
            {walk.path}
          </Card.Meta>
          <Card.Description>
            {walk.name} is created by {walk.author.username} requiring {walk.tools} and {walk.materials} with addition of {walk.edging} and designer {walk.path}
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign={"center"}>
          <Button
            color='red'
            onClick={ ()=> props.deleteWalk(walk.id) }
          >
            Delete {walk.name}
          </Button>
          <Button
            color='blue'
            onClick={ ()=> props.editWalk(walk.id) }
          >
            Edit {walk.name}
          </Button>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group centered={true}>
      {walks}
    </Card.Group>
  )
}
