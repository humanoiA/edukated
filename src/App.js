import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardView from "./Components/CardView";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
     <Col sm={2}>
      <SideBar/>
      </Col>
      <Col sm={10}>
        <Row>
      <CardView />
      </Row>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
