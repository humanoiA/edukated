import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from 'semantic-ui-react'
import { Sidenav } from 'rsuite';
import logo from "./logo.png"
import { Button, Card, Image } from 'semantic-ui-react'
import {Row,Col,Nav,Tab,Container} from "react-bootstrap"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faComment } from '@fortawesome/free-solid-svg-icons'
import { faHome,faCog } from '@fortawesome/free-solid-svg-icons'
export default function SideBar(){
    return(
        <Container>
            <Row>
                <img src={logo}></img>
                </Row>
            <Row>
                <nav id="tab" class="nav flex-column">
    <a href="#" class="nav-item nav-link active"><FontAwesomeIcon icon={faHome} id="pages"></FontAwesomeIcon>Home</a>
    <a href="#" class="nav-item nav-link"><FontAwesomeIcon icon={faSearch} id="pages"></FontAwesomeIcon>Discover</a>
    <a href="#" class="nav-item nav-link"><FontAwesomeIcon icon={faComment} id="pages"></FontAwesomeIcon>Messages</a>
    <a href="#" class="nav-item nav-link "><FontAwesomeIcon icon={faCog} id="pages"></FontAwesomeIcon>Settings</a>
</nav>
</Row>
<Row>
<Container>
<Row style={{marginTop:"20%"}}>
<Card id="sidebarcard">
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
      </Row>
    </Container>
    </Row>
    </Container>
    )
}