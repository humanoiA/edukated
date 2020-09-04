import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Footer from "./Footer"
import Dropdown from 'react-bootstrap/Dropdown';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from 'semantic-ui-react'
import Circle from "./Circle"
import pic from "./girl.png"
import { Sidenav } from 'rsuite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
export default function Cardview(){
    const cardStyle={
        width: '14rem',
        height: '24rem',
        overflow:'hidden',
        borderRadius: 5+'%',
    }
    return(<div style={{maxWidth:'100%'}}>
      <Circle/>
      <div style={{textAlign:"left",marginLeft:'2%'}}><strong>Popular</strong> This Week</div>
      <Container style={{maxWidth:'100%',width:'100%',marginTop:'1%'}}>
        <Row style={{maxWidth:'100%'}}>
          <Col sm={3}>
          <Row>
          <Card style={cardStyle}>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
    <p id='smallcardusername'><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='horizontalcarduser'>@lanamara</p>
    <div className="card text-white" id='verticalcardtime'>82 min</div> 
    <div className="card text-white" id='verticalcardtext'>Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
<div style={{textAlign:"left",marginTop:'5%',marginLeft:'2%'}}><strong>Top</strong> Tutors</div>
<Row>
<Card id='usercard'>
    <Card.Body>
    <p id='usercardname'><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='usercardtext'>@lanamara</p>
    </Card.Body>
  </Card>
  <Card id='usercard'>
    <Card.Body>
    <p id='usercardname'><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='usercardtext'>@lanamara</p>
    </Card.Body>
  </Card>
  </Row>
</Col>
<Col sm={3}><Row>
<Card style={cardStyle}>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
    <p id='smallcardusername'><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='horizontalcarduser'>@lanamara</p>
    <div className="card text-white" id='verticalcardtime'>82 min</div> 
    <div className="card text-white" id='verticalcardtext'>Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row><Row>
<div style={{marginTop:'5%',marginLeft:'2%',float:'right'}}><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></div>
</Row>
<Row>
<Card id='usercard'>
    <Card.Body>
    <p id='usercardname'><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='usercardtext'>@lanamara</p>
    </Card.Body>
  </Card>
  <Card id='usercard'>
    <Card.Body>
    <p id='usercardname'><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='usercardtext'>@lanamara</p>
    </Card.Body>
  </Card>
  </Row>
</Col>
<Col sm={5}>
<Row>
        <Card id='horizontalcard' >
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
  <p id='smallcardusername'><img src={pic} height="20"/>{"   "}Lana Marandina<span className="card text-white" id='smallcardtime'>82 min</span> </p>
  <p id='horizontalcarduser'>@lanamara</p>
    <div className="card text-white" id='horizontalcardtext'>Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
<Row style={{marginTop:"5%"}}>
<Col id='aligned' sm={5}>
<Card id='smallcard'>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay id="paddingNone">
  <Card.Body>
  <p id='smallcardusername'><img src={pic} height="20"/>{"   "}Lana<span className="card text-white" id='smallcardtime'>82 min</span> </p>
  <p id='smallcarduser'>@lanamara</p>
    <div className="card text-white" id='smallcardtext' >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>  
  </Card.Body>
  </Card.ImgOverlay>
</Card></Col>
<Col id='aligned' sm={5}>
<Card id='smallcard'>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay id="paddingNone">
  <Card.Body>
  <p id='smallcardusername'><img src={pic} height="20"/>{"   "}Lana<span className="card text-white" id='smallcardtime'>82 min</span> </p>
  <p id='smallcarduser'>@lanamara</p>
    <div className="card text-white" id='smallcardtext' >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>  
  </Card.Body>
  </Card.ImgOverlay>
</Card></Col>
</Row>

<div id='footercardtext'><strong>Special Offers</strong> </div>
  
<Row>
<Card id='footercard'>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
    <Card.Title id='cardtext'>Card Title</Card.Title>
    <Card.Text id='cardtext'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
</Col>
</Row>
</Container>
 </div>   )
}