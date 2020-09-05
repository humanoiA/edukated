import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Circle from "./Circle"
import pic from "./images/girl.png"
import 'semantic-ui-css/semantic.min.css'
import add from "./images/plus-icon-21722.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
export default function Cardview() {
  return (<div id='maxwide'>
    <Circle />
    <div id='verticalcardheading'> <strong>Popular</strong> This Week</div>
    <Container id='containerstyle'>
      <Row id='maxwide'>
        <Col sm={3}>
          <Row>
            <Card id='cardstyle'>
              <Card.Img variant="top" src={require("./images/72.jpg")} id='cardimage' />
              <Card.ImgOverlay>
                <Card.Body>
                  <p id='smallcardusername'><img alt="" src={pic} height="20" />{"   "}Lana Marandina</p>
                  <p id='horizontalcarduser'>@lanamara</p>
                  <div className="card text-white" id='verticalcardtime'>82 min</div>
                  <div className="card text-white" id='verticalcardtext'>Learning how to create Beautiful Scenes</div>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Row>
          <div id='smallcardheading'><strong>Top</strong> Tutors</div>
          <Row>
            <Card id='usercard'>
              <Card.Body><Row><Col>
                <p id='usercardname'><img alt="" src={pic} height="20" />{"   "}Lana </p>
                <p id='usercardtext'>@lana</p></Col><Col >
                  <img alt="" src={add} id='imageSizes' height="30" /></Col></Row>
              </Card.Body>
            </Card>
            <Card id='usercard'>
              <Card.Body><Row><Col>
                <p id='usercardname'><img alt="" src={pic} height="20" />{"   "}Lana </p>
                <p id='usercardtext'>@lana</p></Col><Col >
                  <img alt="" src={add} id='imageSizes' height="30" /></Col></Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col sm={3}><Row>
          <Card id='cardstyle'>
            <Card.Img variant="top" src={require("./images/T_23-01.jpg")} id='cardimage' />
            <Card.ImgOverlay>
              <Card.Body>
                <p id='smallcardusername'><img alt="" src={pic} height="20" />{"   "}Lana Marandina</p>
                <p id='horizontalcarduser'>@lanamara</p>
                <div className="card text-white" id='verticalcardtime'>82 min</div>
                <div className="card text-white" id='verticalcardtext2'>Learning how to create Beautiful Scenes </div>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Row><Row>
            <div id='threedot'><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></div>
          </Row>
          <Row>
            <Card id='usercard'>
              <Card.Body><Row><Col>
                <p id='usercardname'><img alt="" src={pic} height="20" />{"   "}Lana </p>
                <p id='usercardtext'>@lana</p></Col><Col >
                  <img alt="" src={add} id='imageSizes' height="30" /></Col></Row>
              </Card.Body>
            </Card>
            <Card id='usercard'>
              <Card.Body><Row><Col>
                <p id='usercardname'><img alt="" src={pic} height="20" />{"   "}Lana </p>
                <p id='usercardtext'>@lana</p></Col><Col >
                  <img alt="" src={add} id='imageSizes' height="30" /></Col></Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col sm={5} id='rightcard'>
          <Row >
            <Card id='horizontalcard' >
              <Card.Img variant="top" src={require("./images/001-understand-yourself-large-opt.png")} id='cardimage' />
              <Card.ImgOverlay>
                <Card.Body>
                  <p id='smallcardusername'><img alt="" src={pic} height="20" />{"   "}Lana Marandina<span className="card text-white" id='horizontalcardtime'>82 min</span> </p>
                  <p id='verticalcarduser'>@lanamara</p>
                  <div className="card text-white" id='horizontalcardtext'>Learning how to create  </div>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Row>
          <Row id='smallcardrow'>
            <Col id='aligned' sm={5}>
              <Card id='smallcard'>
                <Card.Img variant="top" src={require("./images/72.jpg")} id='cardimage' />
                <Card.ImgOverlay id="paddingNone">
                  <Card.Body>
                    <p id='smallcardusername'><img alt="" src={pic} height="20" />{"   "}Lana</p>
                    <p id='smallcarduser'>@lanamara</p>
                    <span className="card text-white" id='smallcardtime'>82 min</span>
                    <div className="card text-white" id='smallcardtext' >Learning how to create.</div>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card></Col>
            <Col id='aligned' sm={5}>
              <Card id='smallcard'>
                <Card.Img variant="top" src={require("./images/72.jpg")} id='cardimage' />
                <Card.ImgOverlay id="paddingNone">
                  <Card.Body>
                    <p id='smallcardusername'><img alt="" src={pic} height="20" />{"   "}Lana</p>
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
              <Card.Img variant="top" src={require("./images/4268005.jpg")} id='cardimage' />
              <Card.ImgOverlay>
                <Card.Body>
                  <Card.Title id='cardtext'>50 days Premium!</Card.Title>
                  <Card.Text id='offertext'>
                    Get it before 01.01.2020
    </Card.Text>
                  <Button id='offerbutton'>Know More</Button>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>)
}