import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetallePersonaje = () => {




    const parametros = useParams();
    const [info,setInfo] = useState({});



    const obtenerDatos = () => {
        fetch("https://www.swapi.tech/api/people/" + parametros.id)
        .then(res => res.json())
        .then(data => {

            if(data != null && data.message == "ok"){
                console.log(data);
                setInfo(data.result.properties);
            }

        })
        .catch(err => console.error(err))
    }

    useEffect(()=>{
        obtenerDatos();
    },[])

    return (
        <div>
            <h1>{info.name}</h1>

            <div>
                <span>altura : {info.height}</span>
            </div>

            <Link to={'/starwars'}>
                <button className="btn btn-primary">Volver</button>
            </Link>
                               
        </div>
    )
}

export default DetallePersonaje;