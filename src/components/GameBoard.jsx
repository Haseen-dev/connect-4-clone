import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { getComputerMove, isDraw, isWinner } from "../Helper";

import {
  No_Player,
  Player_1,
  Player_2,
  noOfCircles,
  GAME_STATE_WIN,
  GAME_STATE_PLAYING,
  GAME_STATE_DRAW,
} from "../Constant";

const GameBoard = () => {
  const [gameboard, setGameboard] = useState(Array(16).fill(No_Player));
  const [currentPlayer, setCurrentPlayer] = useState(Player_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(No_Player);
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    padding: "20px",
    width: "500px",
    position: "absolute",
    top: "25%",
    left: "50%",
    marginLeft: "-250px",
    backgroundColor: "bisque",
    border: "8px solid burlywood",
    borderRadius: "8%",
    boxShadow: "7px 5px 15px 3px rgba(0,0,0,0.9)",
  };
  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setGameboard(Array(16).fill(No_Player));
    setCurrentPlayer(Player_1);
    setGameState(GAME_STATE_PLAYING)
  };
  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < noOfCircles; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const suggestMove=()=>{
    clickedCirle(getComputerMove(gameboard))
  }

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
    if (gameboard[id] !== No_Player) return;
    if (gameState !== GAME_STATE_PLAYING) return;
    if (isWinner(gameboard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }
    if (isDraw(gameboard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(No_Player);
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
      <Header
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />
      <div style={style}>{initBoard()}</div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
    </>
  );
};

export default GameBoard;
