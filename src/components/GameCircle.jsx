import React from "react";
import "../Game.css"

// const onclick = (id) => {
//   alert("on click" + id);
// };

const GameCircle = ({ id, onCircleClicked,className }) => {
  const style={
    height:"100px",
    width:"100px",
    margin:"10px",
    borderRadius:"50%",
    border:"5px solid black"
  }
  return (
    // <div
    //   onClick={() => onclick(id)}
    //   style={{...style,backgroundColor:id%2===0 ? "blue":"red"}}
    // >
    //   {name}
    // </div>
     <div
     className={`${className}`}
     onClick={() => onCircleClicked(id)}
     style={style}
   >
   </div>
  );
};

export default GameCircle;
