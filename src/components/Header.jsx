import React from 'react'
import "../Game.css"
import{GAME_STATE_WIN,GAME_STATE_PLAYING} from "../Constant"

const Header = ({player}) => {
  return (
    <div className='panel header'>
        <div className="header-text">Player {player} Turn</div>
    </div>
  )
}

export default Header