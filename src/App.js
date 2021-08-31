import React, {Fragment, useState} from 'react';
import Card from './Card.jsx'
//import Style from './Formulario.module.css'
import Buscador from "./Buscador.jsx";

export default function App() {
    const [datos, setDatos] = useState({
      name: "",
    });

    return (
      <Fragment>
        <Buscador datos={datos} setDatos={setDatos}/>
        <Card name={datos.name} min={datos.min} max={datos.max} img={datos.img}/>
      </Fragment>
    );
}

