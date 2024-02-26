import React from "react";

const onclick = (id) => {
  alert("on click" + id);
};

const GameCircle = ({ id, name }) => {
  const style={
    color: name === "red" ? "red" : "blue",
    backgroundColor: name === "red" ? "red" : "blue",
    height:"100px",
    width:"100px",
    margin:"10px",
    borderRadius:"50%"
  }
  console.log(id);
  return (
    <div
      onClick={() => onclick(id)}
      style={style}
    >
      {name}
    </div>
  );
};

export default GameCircle;
