import React from 'react';
import myImage from '../image/logo.png'
 
function nav(){
   return (
   <nav className="nav">
      <div className="logo">
        <img src={myImage} alt="my logo" style="width:90px"></img>
      </div>

      <nav className="navright">
        <a href="#full">About</a>
        <a href="#project">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact me">Contact</a>
      </nav>
    </nav>);
};

export default nav;