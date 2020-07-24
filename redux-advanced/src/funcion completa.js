function Pizza() {
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
      
    return (
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