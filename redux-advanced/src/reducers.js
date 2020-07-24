// import SIZE_SLICE from "./actions";
// import COUNT from "./actions";
// import SLICE from "./actions";
// import AVERAGE from "./actions";
// import CLEAR from "./actions";
import {SIZE_SLICE,COUNT, SLICE,AVERAGE ,CLEAR} from "./actions";

const initialState = {
    totalPizza: 0,
    sizeSlice:4,
    count:0,
    slice:0
};

const Pizza = {
    ...initialState
};

function pizzaReducer (state=initialState,action){
    if (action.type === "SIZE_SLICE") {
       return{
        sizeSlice: action.value
       };
    }
    if (action.type === "COUNT") {
       return{
        count : action.value
       };
    }
    if (action.type === "SLICE") {
        return{
            slice : action.value
        };
    }
    if (action.type === "AVERAGE") {
        return{
            totalPizza: Math.ceil((state.count * state.slice) /state.sizeSlice)
        };
    }
    if (action.type === "CLEAR") {
        return{
            Pizza : { ...initialState }
        };
    }
    return state
}

export default pizzaReducer;