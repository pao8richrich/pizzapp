import React from 'react';
import imgPizza from './img/pizza01.png';
import './App.css';
import { Container, Row, Col,  Card,Form, Button  } from 'react-bootstrap';
import {sizeSlice, count, slice,average,clear} from "./actions"
import { connect , Provider} from 'react-redux';
import store from "./PizzaStore";
const App = () => {
  return (
    <Provider store={store}>
      <PizzaContainer/>
    </Provider>
  );
};

function Pizza(props) {

  const {totalPizza ,sizeSliceHandler,countHandler,sliceHandler,clearHandler,averageHandler} = props
  return (
    
    <Container className="justify-content-md-center ">
          <div className="Title">Pide tu pizza Ya!</div>
          <span className="sabor">sabor de la casa: Redux </span>
    
          <Row >
            <Col>
              <Card>
                <Form>
                  <div className="TitleCard">Calcula tu pizza</div>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Tamaño de la pizza</Form.Label>
                  <Form.Control as="select"  onChange={event => sizeSliceHandler(Number(event.target.value))} >
                      <option value={4} >Pequeña</option>
                      <option value={6}>Mediana</option>
                      <option value={8}>Grande</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Invitados</Form.Label>
                    <Form.Control 
                      type="number" 
                      placeholder="Cantidad " 
                      onChange={event => countHandler(Number(event.target.value))}
                    />
                  </Form.Group>
    
                  <Form.Group >
                  <Form.Label>Cantidad por persona</Form.Label>
                  <Form.Control 
                  type="number" 
                  placeholder="Cantidad " 
                  onChange={event => sliceHandler(Number(event.target.value))}
                  />
                  </Form.Group>
                  <div className="titleResult">Necesitaras en total <span>{totalPizza} {totalPizza >1 ? "pizzas" : "pizza"}</span></div>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    onClick={ event => {event.preventDefault(); averageHandler()}}>
                    Calcular
                  </Button>
                  <Button 
                  variant="primary" 
                  type="submit" 
                  onClick={event => {event.preventDefault(); clearHandler()}}>
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





const mapStateToProps = (state => {
  return state

});
const mapDispatchToProp = (dispatch => {
  return {
    sizeSliceHandler : event => dispatch(sizeSlice(event)),
    countHandler : event => dispatch(count(event)),
    sliceHandler : event => dispatch(slice(event)),
    clearHandler :() => dispatch(clear()),
    averageHandler : event => dispatch(average(event)),
  }
});

const PizzaContainer = connect(
  mapStateToProps,
  mapDispatchToProp
)(Pizza);

export default App;