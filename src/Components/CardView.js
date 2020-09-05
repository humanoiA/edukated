import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Circle from "./Circle"
import pic from "./girl.png"
import 'semantic-ui-css/semantic.min.css'
import add from "./plus-icon-21722.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
export default function Cardview(){
    return(<div id='maxwide'>
      <Circle/>
      <div id='verticalcardheading'> <strong>Popular</strong> This Week</div>
      <Container id='containerstyle'>
        <Row id='maxwide'>
          <Col sm={3}>
          <Row>
          <Card id='cardstyle'>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
    <p id='smallcardusername'><img alt="" src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='horizontalcarduser'>@lanamara</p>
    <div className="card text-white" id='verticalcardtime'>82 min</div> 
    <div className="card text-white" id='verticalcardtext'>Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
<div id='smallcardheading'><strong>Top</strong> Tutors</div>
<Row>
<Card id='usercard'>
    <Card.Body><Row><Col>
    <p id='usercardname'><img alt="" src={pic} height="20"/>{"   "}Lana </p>
  <p id='usercardtext'>@lana</p></Col><Col >
  <img alt="" src={add} id='imageSizes' height="30"/></Col></Row>
    </Card.Body>
  </Card>
  <Card id='usercard'>
    <Card.Body><Row><Col>
    <p id='usercardname'><img alt="" src={pic} height="20"/>{"   "}Lana </p>
  <p id='usercardtext'>@lana</p></Col><Col >
  <img alt="" src={add} id='imageSizes' height="30"/></Col></Row>
    </Card.Body>
  </Card>
  </Row>
</Col>
<Col sm={3}><Row>
<Card id='cardstyle'>
  <Card.Img variant="top" src={require("./11.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
    <p id='smallcardusername'><img alt="" src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p id='horizontalcarduser'>@lanamara</p>
    <div className="card text-white" id='verticalcardtime'>82 min</div> 
    <div className="card text-white" id='verticalcardtext'>Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row><Row>
<div id='threedot'><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></div>
</Row>
<Row>
<Card id='usercard'>
    <Card.Body><Row><Col>
    <p id='usercardname'><img alt="" src={pic} height="20"/>{"   "}Lana </p>
  <p id='usercardtext'>@lana</p></Col><Col >
  <img alt="" src={add} id='imageSizes' height="30"/></Col></Row>
    </Card.Body>
  </Card>
  <Card id='usercard'>
    <Card.Body><Row><Col>
    <p id='usercardname'><img alt="" src={pic} height="20"/>{"   "}Lana </p>
  <p id='usercardtext'>@lana</p></Col><Col >
  <img alt="" src={add} id='imageSizes' height="30"/></Col></Row>
    </Card.Body>
  </Card>
  </Row>
</Col>
<Col sm={5}>
<Row >
        <Card id='horizontalcard' >
  <Card.Img variant="top" src={require("./11.jpg")} id='cardimage'/>
  <Card.ImgOverlay>
  <Card.Body>
  <p id='smallcardusername'><img alt="" src={pic} height="20"/>{"   "}Lana Marandina<span className="card text-white" id='horizontalcardtime'>82 min</span> </p>
  <p id='horizontalcarduser'>@lanamara</p>
    <div className="card text-white" id='horizontalcardtext'>Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
<Row id='smallcardrow'>
<Col id='aligned' sm={5}>
<Card id='smallcard'>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay id="paddingNone">
  <Card.Body>
  <p id='smallcardusername'><img alt="" src={pic} height="20"/>{"   "}Lana</p>
  <p id='smallcarduser'>@lanamara</p>
  <span className="card text-white" id='smallcardtime'>82 min</span> 
    <div className="card text-white" id='smallcardtext' >Learning how to create.</div>  
  </Card.Body>
  </Card.ImgOverlay>
</Card></Col>
<Col id='aligned' sm={5}>
<Card id='smallcard'>
  <Card.Img variant="top" src={require("./72.jpg")} id='cardimage'/>
  <Card.ImgOverlay id="paddingNone">
  <Card.Body>
  <p id='smallcardusername'><img alt="" src={pic} height="20"/>{"   "}Lana</p>
  <p id='smallcarduser'>@lanamara</p>
  <span className="card text-white" id='smallcardtime'>82 min</span> 
    <div className="card text-white" id='smallcardtext' >Learning how to create.</div>  
  </Card.Body>
  </Card.ImgOverlay>
</Card></Col>
</Row>

<div id='footercardtext'><strong>Special Offers</strong><span id='offerdot'><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></span> </div>
  
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