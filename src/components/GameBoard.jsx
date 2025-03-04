import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner } from "../Helper";


const No_Player = 0;
const Player_1 = 1;
const Player_2 = 2;
const noOfCircles = 16;
const GameBoard = () => {
  const [gameboard, setGameboard] = useState(Array(16).fill(No_Player));
  const [currentPlayer, setCurrentPlayer] = useState(Player_1);
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
    backgroundColor: "bisque",
    border: "8px solid burlywood",
    borderRadius: "8%",
    webkitBoxShadow: "7px 5px 15px 3px rgba(0,0,0,0.9)",
    boxShadow: "7px 5px 15px 3px rgba(0,0,0,0.9)",
  };

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < noOfCircles; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const clickedCirle = (id) => {
    //console.log("circle clicked" + id);
    //this is also update the array state like spread operator
    // gameboard[id] = currentPlayer;
    // setGameboard(gameboard);
    // console.log(gameboard);
    // setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1);

    // spread operator
    // const board = gameboard;
    // board[id] = currentPlayer;
    // setGameboard(board)
    // console.log(board);
    if(isWinner(gameboard,id,currentPlayer)){
      console.log("Winner");
      
    }
    setGameboard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1);
  };
  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        onCircleClicked={clickedCirle}
        className={`player_${gameboard[id]}`}
      />
    );
  };
  return (
    <>
      <Header player={currentPlayer}/>
      <div style={style}>{initBoard()}</div>
      <Footer/>
    </>
  );
};

export default GameBoard;
