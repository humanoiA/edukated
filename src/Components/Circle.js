import React, { Component } from 'react';
import {Container,Col,Row,Form,Button} from "react-bootstrap"
export default function Circle()
{
    return(
    <>
        <div style={{textAlign:"left",marginTop:"5%",marginLeft:'2%'}}><strong>Streaming</strong> Now</div>
        <Container id="topbar">
        <Row>
            <Col sm={1.1}>
        <div class="circle">
  <img src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200" alt="" />
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  
    <circle cx="50" cy="50" r="30" />
  </svg>
</div>
</Col>
<Col sm={1.1}>
        <div class="circle">
  <img src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200" alt="" />
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  
    <circle cx="50" cy="50" r="30" />
  </svg>
</div>
</Col>
<Col sm={1.1}>
        <div class="circle">
  <img src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200" alt="" />
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  
    <circle cx="50" cy="50" r="30" />
  </svg>
</div>
</Col>
<Col sm={1.1}>
        <div class="circle">
  <img src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200" alt="" />
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  
    <circle cx="50" cy="50" r="30" />
  </svg>
</div>
</Col>
<Col sm={4} id="search" >
<div style={{textAlign:"left",marginLeft:'-9%',marginTop:'-6%'}}><strong>Advanced</strong> Search</div>
<Row>
<Col style={{marginTop:"10%",marginLeft:'-9%',borderRadius:10+'px'}}><Form.Control style={{width:'150%'}} type="text" placeholder="Start writing something" readOnly/></Col><Col style={{marginTop:"10%"}}><Button style={{backgroundColor:'#e55f3d',borderRadius:10+'px'}}>Find
    </Button>  </Col>
    </Row>
</Col>
</Row>
</Container>
</>
    )
}