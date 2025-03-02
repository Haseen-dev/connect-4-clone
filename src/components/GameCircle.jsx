import React from "react";
import "../Game.css"

const onclick = (id) => {
  alert("on click" + id);
};

const GameCircle = ({ id, name }) => {
  const style={
    color: name === "red" ? "red" : "blue",
    //backgroundColor: name === "red" ? "red" : "blue",
    height:"100px",
    width:"100px",
    margin:"10px",
    borderRadius:"50%"
  }
  return (
    // <div
    //   onClick={() => onclick(id)}
    //   style={{...style,backgroundColor:id%2===0 ? "blue":"red"}}
    // >
    //   {name}
    // </div>
     <div
     className={`${id%2===0?"even":"odd"}`}
     onClick={() => onclick(id)}
     style={style}
   >
     {name}
   </div>
  );
};

export default GameCircle;
