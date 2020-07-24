export const SIZE_SLICE = "SIZE_SLICE";
export const COUNT = "COUNT";
export const SLICE = "SLICE";
export const AVERAGE = "AVERAGE"; 
export const CLEAR = "CLEAR";


export function sizeSlice (value) {
  return{type:SIZE_SLICE,value:value}
}

export function count (value) {
  return{type:COUNT,value:value}
}

export function slice (value) {
  return{type:SLICE,value:value}
}

export function average (value) {
  return{type:AVERAGE,value:value}
}

export function clear () {
  return{type:CLEAR}
}