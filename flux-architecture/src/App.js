import React, {Component} from 'react';
import imgPizza from './img/pizza01.png';
import './App.css';
import { Container, Row, Col,  Card,Form, Button  } from 'react-bootstrap';
import PizzaStore from "./PizzaStore";
import * as actions from "./actions";
const App = () => {
  return (
    <div>
      <Pizza/>
    </div>
  );
};
class Pizza extends Component{
  constructor(props){
    super(props);
    this.state = PizzaStore.getState();

    
    this.sizeSliceHandler = this.sizeSliceHandler.bind(this);
    this.countHandler = this.countHandler.bind(this);
    this.sliceHandler = this.sliceHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.averageHandler = this.averageHandler.bind(this);

    this.updateState = this.updateState.bind(this);
    
  }
  updateState() {
    this.setState(PizzaStore.getState());
  }

  componentDidMount() {
    PizzaStore.on("change", this.updateState);
  }

  componentWillUnmount() {
    PizzaStore.off("change", this.updateState);
  }

  sizeSliceHandler = e => {
    actions.sizeSlice(e.target.value);
  };
  countHandler = e => {
    actions.count(e.target.value);
  };
  sliceHandler = e => {
    actions.slice(e.target.value);
  };
  clearHandler = () => {
    actions.clear();
  };
  averageHandler = e => {
    e.preventDefault();
    actions.average(e);
  };
  render(){
    const {totalPizza} = this.state
    return(
      <Container className="justify-content-md-center ">
          <div className="Title">Pide tu pizza Ya!</div>
          <span className="sabor">sabor de la casa: Flux </span>
    
          <Row >
            <Col>
              <Card>
                <Form>
                  <div className="TitleCard">Calcula tu pizza</div>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Tamaño de la pizza</Form.Label>
                  <Form.Control as="select"  onChange={this.sizeSliceHandler} >
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
                      onChange={this.countHandler}
                    />
                  </Form.Group>
    
                  <Form.Group >
                  <Form.Label>Cantidad por persona</Form.Label>
                  <Form.Control 
                  type="number" 
                  placeholder="Cantidad " 
                  onChange={this.sliceHandler}
                  />
                  </Form.Group>
                  <div className="titleResult">Necesitaras en total <span>{totalPizza} {totalPizza >1 ? "pizzas" : "pizza"}</span></div>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    onClick={this.averageHandler}>
                    Calcular
                  </Button>
                  <Button 
                  variant="primary" 
                  type="submit" 
                  onClick={this.clearHandler}>
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

}

export default App;