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
  <Card.Img variant="top" src={require("./72.jpg")} style={{display:'block',objectFit:'cover', maxWidth:'40rem',maxHeight:'30rem', width:'auto', height:'auto'}}/>
  <Card.ImgOverlay>
  <Card.Body>
    <p style={{color:'white',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p style={{color:'white',textAlign:"left",marginTop:"-10%",marginLeft:"20%"}}>@lanamara</p>
    <div className="card text-white" style={{backgroundColor:"#e55f3d",borderRadius:5+'px',maxWidth:"45%"}}>82 min</div> 
    <div className="card text-white" style={{backgroundColor:"#0a3e66",opacity:"90%",borderRadius:5+'px',marginTop:'90%'}} >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
<div style={{textAlign:"left",marginTop:'5%',marginLeft:'2%'}}><strong>Top</strong> Tutors</div>
<Row>
  <Card style={{backgroundColor:'#e2e2e2',borderRadius:10+'px',marginTop:'5%',width:'85%'}}>
    <Card.Body>
    <p style={{color:'darkslategray',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p style={{color:'gray',textAlign:"left",marginTop:"-10%",marginLeft:"20%"}}>@lanamara</p>
    </Card.Body>
  </Card>
  <Card style={{backgroundColor:'#e2e2e2',borderRadius:10+'px',marginTop:'5%',width:'85%'}}>
    <Card.Body>
    <p style={{color:'darkslategray',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p style={{color:'gray',textAlign:"left",marginTop:"-10%",marginLeft:"20%"}}>@lanamara</p>
    </Card.Body>
  </Card>
  </Row>
</Col>
<Col sm={3}><Row>
<Card style={cardStyle}>
  <Card.Img variant="top" src={require("./72.jpg")} style={{display:'block',objectFit:'cover', maxWidth:'40rem',maxHeight:'30rem', width:'auto', height:'auto'}}/>
  <Card.ImgOverlay>
  <Card.Body>
    <p style={{color:'white',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p style={{color:'white',textAlign:"left",marginTop:"-10%",marginLeft:"20%"}}>@lanamara</p>
    <div className="card text-white" style={{backgroundColor:"#e55f3d",borderRadius:5+'px',maxWidth:"45%"}}>82 min</div> 
    <div className="card text-white" style={{backgroundColor:"#0a3e66",opacity:"90%",borderRadius:5+'px',marginTop:'90%'}} >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row><Row>
<div style={{marginTop:'5%',marginLeft:'2%',float:'right'}}><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></div>
</Row>
<Row>
  <Card style={{backgroundColor:'#e2e2e2',borderRadius:10+'px',marginTop:'5%',width:'85%'}}>
    <Card.Body>
    <p style={{color:'darkslategray',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p style={{color:'gray',textAlign:"left",marginTop:"-10%",marginLeft:"20%"}}>@lanamara</p>
    </Card.Body>
  </Card>
  <Card style={{backgroundColor:'#e2e2e2',borderRadius:10+'px',marginTop:'5%',width:'85%'}}>
    <Card.Body>
    <p style={{color:'darkslategray',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina</p>
  <p style={{color:'gray',textAlign:"left",marginTop:"-10%",marginLeft:"20%"}}>@lanamara</p>
    </Card.Body>
  </Card>
  </Row>
</Col>
<Col sm={5}>
<Row>
        <Card id='aligned' style={{width:'20rem',height:'12rem',overflow:'hidden',borderRadius: 5+'%',marginLeft:"6%"}}>
  <Card.Img variant="top" src={require("./72.jpg")} style={{display:'block',objectFit:'cover', maxWidth:'40rem',maxHeight:'30rem', width:'auto', height:'auto'}}/>
  <Card.ImgOverlay>
  <Card.Body>
  <p style={{color:'white',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana Marandina<span className="card text-white" style={{backgroundColor:"#e55f3d",borderRadius:5+'px',maxWidth:"45%",float:"right"}}>82 min</span> </p>
  <p style={{color:'white',textAlign:"left",marginTop:"-10%",marginLeft:"12%"}}>@lanamara</p>
    <div className="card text-white" style={{backgroundColor:"#0a3e66",opacity:"90%",borderRadius:5+'px',marginTop:'7%'}} >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
</Row>
<Row style={{marginTop:"5%"}}>
<Col id='aligned' sm={5}>
<Card  style={{width:'9rem',height:'11rem',overflow:'hidden',borderRadius: 5+'%',fontSize:"0.7em"}}>
  <Card.Img variant="top" src={require("./72.jpg")} style={{display:'block',objectFit:'cover', maxWidth:'40rem',maxHeight:'30rem', width:'auto', height:'auto'}}/>
  <Card.ImgOverlay id="paddingNone">
  <Card.Body>
  <p style={{color:'white',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana<span className="card text-white" style={{backgroundColor:"#e55f3d",borderRadius:5+'px',maxWidth:"45%",float:"right"}}>82 min</span> </p>
  <p style={{color:'white',textAlign:"left",marginTop:"-10%",marginLeft:"12%"}}>@lanamara</p>
    <div className="card text-white" style={{backgroundColor:"#0a3e66",opacity:"90%",borderRadius:5+'px',marginTop:'10%'}} >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>  
  </Card.Body>
  </Card.ImgOverlay>
</Card></Col>
<Col id='aligned' sm={5}>
<Card style={{width:'9rem',height:'11rem',overflow:'hidden',borderRadius: 5+'%',fontSize:"0.7em"}}>
  <Card.Img variant="top" src={require("./72.jpg")} style={{display:'block',objectFit:'cover', maxWidth:'40rem',maxHeight:'30rem', width:'auto', height:'auto'}}/>
  <Card.ImgOverlay id="paddingNone">
  <Card.Body>
  <p style={{color:'white',textAlign:"left"}}><img src={pic} height="20"/>{"   "}Lana<span className="card text-white" style={{backgroundColor:"#e55f3d",borderRadius:5+'px',maxWidth:"45%",float:"right"}}>82 min</span> </p>
  <p style={{color:'white',textAlign:"left",marginTop:"-10%",marginLeft:"12%"}}>@lanamara</p>
    <div className="card text-white" style={{backgroundColor:"#0a3e66",opacity:"90%",borderRadius:5+'px',marginTop:'10%'}} >Learning how to create Beautiful Scenes in Illustrator in 60 minutes</div>  
  </Card.Body>
  </Card.ImgOverlay>
</Card></Col>
</Row>

<div style={{textAlign:"left",marginTop:'2%',marginLeft:'2%'}}><strong>Special Offers</strong> </div>
  
<Row>
<Card id="paddingNone" style={{width:'20rem',height:'12rem',overflow:'hidden',borderRadius: 5+'%',marginTop:"3%"}}>
  <Card.Img variant="top" src={require("./72.jpg")} style={{display:'block',objectFit:'cover', maxWidth:'40rem',maxHeight:'30rem', width:'auto', height:'auto'}}/>
  <Card.ImgOverlay>
  <Card.Body>
    <Card.Title style={{color:'white'}}>Card Title</Card.Title>
    <Card.Text style={{color:'white'}}>
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