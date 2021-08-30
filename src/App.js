import React, {Fragment, useState} from 'react';
import Card from './Card.jsx'
import Formulario from "./Formulario.jsx";

export default function App() {
    const [datos, setDatos] = useState({
      name: "",
    });
  
  const buscarCiudad = (ciudad) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`) 
  //acepta la URL de la API como parámetro
    .then(r => r.json())
    .then((recurso) => {
      //contiene el código para gestionar los datos recibidos de la API
      if(recurso.main !== undefined){
          const ciudad = {
            name: recurso.name,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
        console.log(ciudad)
        setDatos(ciudad);
      } else {
        console.log("Ciudad No encontrada")
      }
    });
}

      const handleSubmit = (event) => {
        event.preventDefault()
        console.log(datos.name)
        buscarCiudad(datos.name)

      }

        const handleInputChange = (event) => {
          setDatos({
              ...datos,
              [event.target.name] : event.target.value
          })
      }

    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <label>Buscador</label> 
          <input 
              type="text" 
              onChange={handleInputChange}
              name="name"
          />
          <button type="submit">Buscar Ciudad</button>
        </form>
        <Card name={datos.name} min={datos.min} max={datos.max} img={datos.img}/>
      </Fragment>
    );
}

