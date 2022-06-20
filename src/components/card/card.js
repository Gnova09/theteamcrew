import React from "react";

const Card = (props) =>{
    const {name, carrera, photo} = props;
    return(
        <div className = 'card'>
            <div className="img-content">
                <img alt="placeholder" src={photo}/>
                <p>{carrera}</p>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
export default Card;