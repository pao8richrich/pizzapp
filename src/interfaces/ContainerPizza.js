import React,{useState} from 'react';
import imgPizza from '../img/pizza01.png';
import PizzaCounter from '../interfaces/PizzaCounter.js';
import { Container, Row, Col,  Card } from 'react-bootstrap';

function ContainerPizza() {
  const pizzaSlice = 8;
  const [counter, setCounter] = useState(0);
  const [slice,   setSlice] = useState(0);
  const [totalPizza, setTotalPizza] = useState(0);

  const countHandler = e =>{
    setCounter(e.target.value);
  }
  const sliceHandler = e =>{
    setSlice(e.target.value);
  }
  const clearHandler = e =>{
    setCounter(0);
    setSlice(0);
    setTotalPizza(0);

  }
  const averageHandler = event =>{
    event.preventDefault()
    let average = Math.round((counter * slice) /pizzaSlice);
    setTotalPizza (average);
  }


  return (
    <Container className="justify-content-md-center">
    <div className="Title">Pide tu pizza Ya!</div>
    <Row >
      <Col>
        <Card>
          <PizzaCounter
          counter={counter}
          slice={slice}
          totalPizza={totalPizza}
          countHandler={countHandler}
          sliceHandler={sliceHandler}
          clearHandler={clearHandler}
          averageHandler={averageHandler}
          
          />
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
