import EventEmitter from "events";
import AppDispatcher from "./AppDispatcher";

let initialState = {
  totalPizza: 0,
  sizeSlice:4,
  count:0,
  slice:0
};

let Pizza = {
  ...initialState
};

class PizzaStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      if (action.type === "sizeSlice") {
        Pizza.sizeSlice = action.value;
        this.emit("change");
      }
      if (action.type === "count") {
        Pizza.count = action.value;
        this.emit("change");
      }
      if (action.type === "slice") {
        Pizza.slice = action.value;
        this.emit("change");
      }
      if (action.type === "average") {
        
        Pizza.totalPizza = Math.ceil((Pizza.count * Pizza.slice) /Pizza.sizeSlice);
        this.emit("change");
      }
      if (action.type === "clear") {
        Pizza = { ...initialState };
        this.emit("change");
      }
    });
  }
  getState() {
    return Pizza;
  }
}
export default new PizzaStore();
