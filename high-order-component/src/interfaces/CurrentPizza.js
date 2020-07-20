import React,{useState} from 'react';
import imgPizza from '../img/pizza01.png';
import WithCurrentPizza from './WithCurrentPizza.js';
import { Container, Row, Col,  Card ,Form, Button } from 'react-bootstrap';

function CurrentPizza() {
  // const pizzaSlice = 8;
  const [size, sizeSlice] = useState(0);
  const [counter, setCounter] = useState(0);
  const [slice,   setSlice] = useState(0);
  const [totalPizza, setTotalPizza] = useState(0);

  const sizeSliceHandler = e =>{
    sizeSlice(e.target.value);
  }

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
    let average = Math.round((counter * slice) /size);
    setTotalPizza (average);
  }

  const inputForm = ({label, value,onChange}) => {
    return (
      <Form.Group >
        <Form.Label>{label}</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Porciones " 
          value={value}
          onChange={onChange} 
          
        />
      </Form.Group>
    );
  }
  const InputForm = WithCurrentPizza(inputForm);

  return (
    <Container className="justify-content-md-center">
    <div className="Title">Pide tu pizza Ya!</div>
    <span className="sabor">sabor de la casa :High order component </span>
    <Row >
      <Col>
        <Card>



          <Form>
            <div className="TitleCard">Calcula tu pizza</div>
             {/* <WithCurrentPizza
          counter={counter}
          slice={slice}
          totalPizza={totalPizza}
          countHandler={countHandler}
          sliceHandler={sliceHandler}
          clearHandler={clearHandler}
          averageHandler={averageHandler}
          sizeSliceHandler={sizeSliceHandler}
          size={size}
          /> */}
            <InputForm label={this.label} value={size} onChange={this.sizeSliceHandler}/>
           
            <Form.Group >
              <Form.Label>Tamaño de la pizza</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Porciones " 
                value={size}
                onChange={sizeSliceHandler} 
                
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Invitados</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Cantidad " 
                value={counter}
                onChange={countHandler} 
                
              />
            </Form.Group>

            <Form.Group >
            <Form.Label>Cantidad por persona</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Cantidad " 
            value={slice}
            onChange={sliceHandler}
            />
            </Form.Group>
            <div className="titleResult">Necesitaras en total <span>{totalPizza} pizza</span></div>
            <Button 
              variant="primary" 
              type="submit" 
              onClick={averageHandler}>
              Calcular
            </Button>
            <Button 
            variant="primary" 
            type="submit" 
            onClick={clearHandler}>
            Reset
            </Button>
          </Form>
         
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

export default CurrentPizza;
