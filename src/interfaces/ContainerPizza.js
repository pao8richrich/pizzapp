import React from 'react';
import imgPizza from '../img/pizza01.png';
import PizzaCounter from '../interfaces/PizzaCounter.js';
import { Container, Row, Col,  Card } from 'react-bootstrap';

function ContainerPizza() {
  return (
    <Container className="justify-content-md-center">
    <div className="Title">Pide tu pizza Ya!</div>
    <Row >
      <Col>
        <Card>
          <PizzaCounter/>
        </Card>
      </Col>
      <Col>
        <img
          className="ml-3"
          src={imgPizza}
          alt="Pizza"
        />
      </Col>
    </Row>
  </Container>
  );
}

export default ContainerPizza;
