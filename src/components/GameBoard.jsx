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
  const clickedCirle=(id)=>{
    console.log("circle clicked"+id);
  }
  return (
    <div style={style}>
      <GameCircle id={1}  onCircleClicked={clickedCirle}/>
      <GameCircle id={2}  onCircleClicked={clickedCirle}/>
      <GameCircle id={3}  onCircleClicked={clickedCirle}/>
      <GameCircle id={4}  onCircleClicked={clickedCirle}/>
      <GameCircle id={5}  onCircleClicked={clickedCirle}/>
      <GameCircle id={6}  onCircleClicked={clickedCirle}/>
      <GameCircle id={7}  onCircleClicked={clickedCirle}/>
      <GameCircle id={8}  onCircleClicked={clickedCirle}/>
      <GameCircle id={9}  onCircleClicked={clickedCirle}/>
      <GameCircle id={10} onCircleClicked={clickedCirle} />
      <GameCircle id={11} onCircleClicked={clickedCirle} />
      <GameCircle id={12} onCircleClicked={clickedCirle} />
      <GameCircle id={13} onCircleClicked={clickedCirle} />
      <GameCircle id={14} onCircleClicked={clickedCirle} />
      <GameCircle id={15} onCircleClicked={clickedCirle} />
      <GameCircle id={16} onCircleClicked={clickedCirle} />
    </div>
  );
};

export default GameBoard;
