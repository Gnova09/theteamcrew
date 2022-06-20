import React from "react";
import Card from './card';

const Cardlist = ({object}) =>{
    const cardlist = object.map((user, i) => {
        return (
        <Card key= {i} name={object[i].name} carrera={object[i].carrera} photo={object[i].photo} />
        );
    });
    return (
    <div className="cardlist">
        {cardlist}
    </div>
    );
}
export default Cardlist