import React from 'react';
import './style.css';

function Navbar(props) {
    return (
       <div>
          <nav className="navbar sticky-top navbar-dark">
            <h2 className="title col-4 text-center">Clicky Game</h2>
            {/* <h4 className="col-4 text-center">Click an image to begin! </h4> */}
            <h4 className="col-4 text-center animated fadeInDown">{props.message} </h4>
            <h2 className="text-light col-4 text-center">Score: {props.score} | Top Score: {props.topScore}</h2>
          </nav>
       </div>
    );
 }
 
 export default Navbar;