import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./defaultLayout.css";
import { Container, Row, Col } from "react-bootstrap";

function Defaultlayoout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <div className="left-bar">Im form the left menu</div>
        </Col>
        <Col xs={8}>
          <div className="main">
            <Header />
            {children}
            <Footer />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Defaultlayoout;
