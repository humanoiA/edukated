import React from 'react';
import './App.css';
import CardView from "./Components/CardView";
import SideBar from "./Components/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App">
      <Container id='con'>
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
