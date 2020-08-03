
export const SIZE_SLICE = "SIZE_SLICE";
export const COUNT = "COUNT";
export const SLICE = "SLICE";
export const AVERAGE = "AVERAGE"; 
export const CLEAR = "CLEAR";

const initialState = {
    totalPizza: 0,
    sizeSlice:4,
    count:0,
    slice:0
};

const PizzaContainer = {
    ...initialState
};

function pizzaReducer (state=initialState,actions){
    if (actions.type === "SIZE_SLICE") {
        console.log("SIZE_SLICE",actions.value)
       return{
        ...state, sizeSlice: actions.value
        
       };
    }
    if (actions.type === "COUNT") {
        console.log("COUNT",actions.value)
       return{
        ...state, count : actions.value
       };
    }
    if (actions.type === "SLICE") {
        console.log("SLICE",actions.value)
        return{
        ...state, slice : actions.value
        };
    }
    if (actions.type === "AVERAGE") {
        console.log("AVERAGE",actions.value)
        return{
            ...state, totalPizza: Math.ceil((state.count * state.slice) /state.sizeSlice)
        };
    }
    if (actions.type === "CLEAR") {
        console.log("CLEAR",actions.value)
        return{
             ...initialState 
            // PizzaContainer : { ...initialState }
        };
    }
    return state
}

export default pizzaReducer;