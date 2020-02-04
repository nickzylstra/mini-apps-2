import React from 'react';
import Smiley from './Smiley.jsx';
import Timer from './Timer.jsx';
import MineCount from './MineCount.jsx';
import './Header.css'


const Header = () => {

  return (
    <div className="container" >
      <MineCount />
      <Smiley />
      <Timer />
    </div>
  )
};

export default Header;
