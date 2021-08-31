import React, {Fragment} from 'react';

const Buscador = function({datos, setDatos}){

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
                };
                setDatos(ciudad);
            }else {console.log("Ciudad No encontrada")}
        });
    }
    
      
    const handleSubmit = (event) => {
        event.preventDefault()
        buscarCiudad(datos.name)
    }
      
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
      
    return (
        <Fragment key={datos.id}>
            <div>
                <h1>Buscador</h1> 
            </div>
            <div>
                <input 
                    type="text" 
                    onChange={handleInputChange}
                    name="name"
                />
            </div>
            <div>
                <button 
                        type="submit"
                        onClick={handleSubmit}
                >Buscar Ciudad</button>
            </div>
        </Fragment>
    )                
}

export default Buscador;