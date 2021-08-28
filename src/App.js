import react, {useState} from "react";

export default function App() {
    const [input, setInput] = useState([]);
  /*
  fetch(url) 
  //acepta la URL de la API como parámetro
    .then(function() {
      //contiene el código para gestionar los datos recibidos de la API

    })
    .catch(function() {
      //se ejecutará si se produce un error al invocar la API de su elección

    });*/

    function onSearch(ciudad) {
    ciudad.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setInput(input => [...input, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
      }

        const handleInputChange = (event) => {
          setInput({
              ...input,
              [event.target.name] : event.target.value
          })
      }

    return (
        <div>
        <form onSubmit={onSearch}>
          <label>Buscador</label> 
          <input type="text" onChange={handleInputChange}/>
          <button type="submit">Buscar Ciudad</button>
          <h1>{input.caja}</h1>
        </form>
      </div>
    );
}

