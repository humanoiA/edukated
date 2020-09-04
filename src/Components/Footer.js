import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons'
const CardExampleGroups = () => (
    <div>
        <p style={{marginTop:"2%",textAlign:"left"}}>Top Tutor<span style={{float:"right",marginRight:'6%'}}> <FontAwesomeIcon icon={faEllipsisH} /></span></p>
 <div style={{marginTop:"5%"}}>
  <Card.Group>
    <Card style={{maxWidth:'45%',backgroundColor:'#e2e2e2'}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
      </Card.Content>
    </Card>
    <Card style={{maxWidth:'45%',backgroundColor:'#e2e2e2'}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
      </Card.Content>
    </Card>
    <Card style={{maxWidth:'45%',backgroundColor:'#e2e2e2'}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
      </Card.Content>
    </Card>
    <Card style={{maxWidth:'45%',backgroundColor:'#e2e2e2'}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
      </Card.Content>
    </Card>
  </Card.Group>
  </div>
    </div>
)

export default CardExampleGroups