import React from 'react';
import Style from './Card.module.css'

function Card(datos){
    return (
        <div className={Style.contenedor}>
            <h1>Titulo: {datos.name}</h1>
            <div>
                <h2>Min: {datos.min}</h2>
                <h2>Max: {datos.max}</h2>
                <img src={`http://openweathermap.org/img/wn/${datos.img}@2x.png`} alt="img"/>
            </div>
        </div>
    )  
}

export default Card;