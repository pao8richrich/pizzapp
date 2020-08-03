import React from 'react';
import imgPizza from './img/pizza01.png';
import './App.css';
import { Container, Row, Col,  Card,Form, Button  } from 'react-bootstrap';
import * as actions from "./actions";
import { connect , Provider} from 'react-redux';
import store from "./PizzaStore";
const App = () => {
  return (
    <Provider store={store}>
      <PizzaContainer/>
    </Provider>
  );
};

const sizeSliceHandler = e => {
  return{
    actions: actions.sizeSlice
  }
  // ({type:"SIZE_SLICE",value:e.target.value})
};
const countHandler = e => {
  return{
    count: actions.count
  }
  // ({type:"COUNT",value:e.target.value})
};
const sliceHandler = e => {
  return{
    slice: actions.slice
  }
  // ({type:"SLICE",value:e.target.value})
};
const clearHandler = () => {
  return{
    clear: actions.clear
  }
  // ({type:"CLEAR"})
};
const averageHandler = e => {
  e.preventDefault();
  return{
    average: actions.average
  }
  // ({type:"AVERAGE",value:e.target.value})
};

function Pizza(props) {

  // const {totalPizza} = this.props.totalPizza
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
                  <Form.Control as="select"  onChange={sizeSliceHandler} >
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
                      onChange={countHandler}
                    />
                  </Form.Group>
    
                  <Form.Group >
                  <Form.Label>Cantidad por persona</Form.Label>
                  <Form.Control 
                  type="number" 
                  placeholder="Cantidad " 
                  onChange={sliceHandler}
                  />
                  </Form.Group>
                  <div className="titleResult">Necesitaras en total <span>{totalPizza} {totalPizza >1 ? "pizzas" : "pizza"}</span></div>
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



// class Pizza extends Component{
//   constructor(props){
//     super(props);
    
//     this.sizeSliceHandler = this.sizeSliceHandler.bind(this);
//     this.countHandler = this.countHandler.bind(this);
//     this.sliceHandler = this.sliceHandler.bind(this);
//     this.clearHandler = this.clearHandler.bind(this);
//     this.averageHandler = this.averageHandler.bind(this);

//   }

//   sizeSliceHandler = e => {
//     this.props.dispatch({type:"SIZE_SLICE",value:e.target.value})
//   };
//   countHandler = e => {
//     this.props.dispatch({type:"COUNT",value:e.target.value})
//   };
//   sliceHandler = e => {
//     this.props.dispatch({type:"SLICE",value:e.target.value})
//   };
//   clearHandler = () => {
//     this.props.dispatch({type:"CLEAR"})
//   };
//   averageHandler = e => {
//     e.preventDefault();
//     this.props.dispatch({type:"AVERAGE",value:e.target.value})
//   };
//   render(){
//     const {totalPizza} = this.props.totalPizza
//     return(
//       <Container className="justify-content-md-center ">
//           <div className="Title">Pide tu pizza Ya!</div>
//           <span className="sabor">sabor de la casa: Redux </span>
    
//           <Row >
//             <Col>
//               <Card>
//                 <Form>
//                   <div className="TitleCard">Calcula tu pizza</div>
//                   <Form.Group controlId="exampleForm.ControlSelect1">
//                   <Form.Label>Tamaño de la pizza</Form.Label>
//                   <Form.Control as="select"  onChange={this.sizeSliceHandler} >
//                       <option value={4} >Pequeña</option>
//                       <option value={6}>Mediana</option>
//                       <option value={8}>Grande</option>
//                     </Form.Control>
//                   </Form.Group>
//                   <Form.Group >
//                     <Form.Label>Invitados</Form.Label>
//                     <Form.Control 
//                       type="number" 
//                       placeholder="Cantidad " 
//                       onChange={this.countHandler}
//                     />
//                   </Form.Group>
    
//                   <Form.Group >
//                   <Form.Label>Cantidad por persona</Form.Label>
//                   <Form.Control 
//                   type="number" 
//                   placeholder="Cantidad " 
//                   onChange={this.sliceHandler}
//                   />
//                   </Form.Group>
//                   <div className="titleResult">Necesitaras en total <span>{totalPizza} {totalPizza >1 ? "pizzas" : "pizza"}</span></div>
//                   <Button 
//                     variant="primary" 
//                     type="submit" 
//                     onClick={this.averageHandler}>
//                     Calcular
//                   </Button>
//                   <Button 
//                   variant="primary" 
//                   type="submit" 
//                   onClick={this.clearHandler}>
//                   Reset
//                   </Button>
//                 </Form>
//               </Card>
//             </Col>
//             <Col>
//               <img
//                 className="ml-3"
//                 src={imgPizza}
//                 alt="Pizza"
//               />
//             </Col>
//           </Row>
//       </Container>

//     );
//   }

// }


const mapStateToProps = (state => {
  return state
  // return{
  //   totalPizza: state.totalPizza
  // }
});
const mapDispatchToProp = (dispatch => {
  return {
    sizeSlice: event => dispatch(sizeSliceHandler(event)),
    count: event => dispatch(countHandler(event)),
    slice: event => dispatch(sliceHandler(event)),
    clear:() => dispatch(clearHandler()),
    average: event => dispatch(averageHandler(event)),
  }
});

const PizzaContainer = connect(
  mapStateToProps,
  mapDispatchToProp
)(Pizza);

export default App;