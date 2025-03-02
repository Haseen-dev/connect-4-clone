import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    padding: "20px",
    width: "500px",
    // margin:"0 auto"
    position: "absolute",
    top: "25%",
    left: "50%",
    marginLeft: "-250px",
  };
  return (
    <div style={style}>
      <GameCircle id={1} />
      <GameCircle id={2} />
      <GameCircle id={3} />
      <GameCircle id={4} />
      <GameCircle id={5} />
      <GameCircle id={6} />
      <GameCircle id={7} />
      <GameCircle id={8} />
      <GameCircle id={9} />
      <GameCircle id={10} />
      <GameCircle id={11} />
      <GameCircle id={12} />
      <GameCircle id={13} />
      <GameCircle id={14} />
      <GameCircle id={15} />
      <GameCircle id={16} />
    </div>
  );
};

export default GameBoard;
