import logo from "./logo.png"
import Card from 'react-bootstrap/Card'
import {Row,Col,Container} from "react-bootstrap"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faComment } from '@fortawesome/free-solid-svg-icons'
import { faHome,faCog,faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import bulb from './lamp.png'
import medal from './medal.png'
import battery from './battery.png'
import young from './young.png'
export default function SideBar(){
    return(
        <Container>
            <Row>
                <img alt="alt" src={logo}></img>
                </Row>
            <Row>
                <nav id="tab" class="nav flex-column">
    <a href="#a" class="nav-item nav-link active"><FontAwesomeIcon icon={faHome} id="pages"></FontAwesomeIcon>Home</a>
    <a href="#b" class="nav-item nav-link"><FontAwesomeIcon icon={faSearch} id="pages"></FontAwesomeIcon>Discover</a>
    <a href="#c" class="nav-item nav-link"><FontAwesomeIcon icon={faComment} id="pages"></FontAwesomeIcon>Messages</a>
    <a href="d" class="nav-item nav-link "><FontAwesomeIcon icon={faCog} id="pages"></FontAwesomeIcon>Settings</a>
</nav>
</Row>
<Row>
<Container>
<Row style={{marginTop:"20%"}}>
<Card id='sidebarusercard'>
    <Card.Body><Row><Col>
    <p id='sidebarcardname'>
  <img alt="alt" src={bulb} id='imageSizesidebar' height="30"/>{"  "}<strong>Updated Courses</strong><p id='sidebartext'>by @karlatuts</p></p>
  </Col></Row>
    </Card.Body>
  </Card>
      </Row>
      <Row id='smallcardsidebarrow'>
      <Col sm={6}>
<Card id='sidebarsmallcard'>
    <Card.Body id='sidebarpad'>
  <img alt="alt" src={medal} id='imageSizesidebar' height="30"/>
    <p id='sidebarsmallcardname'><strong>1 800</strong><p></p><p id='sidebarsmallcardtext'>points</p></p>
  
    </Card.Body>
  </Card>
  </Col>
  <Col sm={6}>
  <Card id='sidebarsmallcard'>
    <Card.Body id='sidebarpad'>
  <img alt="alt" src={battery} id='imageSizesidebar' height="30"/>
    <p id='sidebarsmallcardname'><strong>45.3%</strong><p></p><p id='sidebarsmallcardtext'>done</p></p>
  
    </Card.Body>
  </Card>
  </Col>
      </Row>
    </Container>
    </Row>
    <Row>
    <Card id='profilecard'>
    <Card.Body><Row><Col>
    <p id='profilecardinside'>
  <img alt="alt" src={young} id='imageSizesidebar' height="30"/>{"  "}<strong>Alex Dixon</strong><span id='profiledot'><FontAwesomeIcon  icon={faEllipsisV} id="pages"></FontAwesomeIcon></span><p id='profiletext'>@alexlearns</p></p>
  </Col></Row>
    </Card.Body>
  </Card>
    </Row>
    </Container>
    )
}