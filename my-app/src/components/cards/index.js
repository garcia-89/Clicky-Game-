import React from "react";
import './style.css';

function Card(props) {
    return (
        //in case the value is incorrect wobble the icons 
        <img className= {`rounded-circle m-3 hover11 column  ${props.animate? "animated wobble": ""}`} type="button" 
        alt={props.name} src={props.image}  onClick={() => props.clickPicture(props.id)} />
    );
}

export default Card;
