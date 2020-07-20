import React,{useEffect,useState} from 'react';

function TheTotalPizzas({counter, slice, size}) {
   const[total, setTotal] = useState(0);
    
   useEffect(()=>{
    let theSize = size === 0 ? 1 :size 
    let average = Math.round((counter * slice) /theSize);
    setTotal(average)
   },[counter,slice,size]);
  return (
      <>
      {
          <div className="titleResult">Necesitaras en total <span>{total} {total >1 ? "pizzas" : "pizza"}</span> </div>
      }
      </>
  )
}

export default TheTotalPizzas;