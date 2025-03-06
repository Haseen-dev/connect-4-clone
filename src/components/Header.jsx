import React from "react";
import "../Game.css";
import { GAME_STATE_WIN, GAME_STATE_PLAYING } from "../Constant";

const Header = ({ gameState, currentPlayer,winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {currentPlayer} Turn</div>;
      case GAME_STATE_WIN:
        return <div>Player {winPlayer} wins</div>;
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
