import React from "react";

import "./card.styles.css"
export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt=""/>
            <p>{props.monster.name}</p>
            <p>{props.monster.email}</p>
        </div>
    )
}