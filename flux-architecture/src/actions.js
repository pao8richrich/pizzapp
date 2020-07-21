import AppDispatcher from "./AppDispatcher";

export const sizeSlice = value => {
  const action = {
    type: "sizeSlice",
    value
  };
  AppDispatcher.dispatch(action);
};
export const count = value => {
  const action = {
    type: "count",
    value
  };
  AppDispatcher.dispatch(action);
};
export const slice = value => {
  const action = {
    type: "slice",
    value
  };
  AppDispatcher.dispatch(action);
};
export const average = value => {
  const action = {
    type: "average",
    value
  };
  AppDispatcher.dispatch(action);
};
export const clear = () => {
  const action = {
    type: "clear"
  };
  AppDispatcher.dispatch(action);
};

