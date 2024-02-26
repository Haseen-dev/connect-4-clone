import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {
  const style={
    display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        padding:"20px",
        width:"500px",
        // margin:"0 auto"
        position:"absolute",
        top:"25%",
        left:"50%",
        marginLeft:"-250px"
  }
  return (
    <div
      style={style}
    >
      <GameCircle id={1} name="red" />
      <GameCircle id={2} name="blue" />
      <GameCircle id={3} name="red" />
      <GameCircle id={4} name="blue" />
      <GameCircle id={5} name="red" />
      <GameCircle id={6} name="blue" />
      <GameCircle id={7} name="red" />
      <GameCircle id={8} name="blue" />
      <GameCircle id={9} name="red" />
      <GameCircle id={10} name="blue" />
      <GameCircle id={11} name="red" />
      <GameCircle id={12} name="blue" />
      <GameCircle id={13} name="red" />
      <GameCircle id={14} name="blue" />
      <GameCircle id={15} name="red" />
      <GameCircle id={16} name="blue" />
    </div>
  );
};

export default GameBoard;
