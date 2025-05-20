import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetallePersonaje = () => {




    const parametros = useParams();
    const [info,setInfo] = useState({});



    const obtenerDatos = () => {
        fetch("https://www.swapi.tech/api/people/" + parametros.id)
        .then(res => res.json())
        .then(data => {
console.log(data);
            if(data != null && data.message == "ok"){
                console.log(data);
                setInfo(data.result);
            }

        })
        .catch(err => console.error(err))
    }

    useEffect(()=>{
        obtenerDatos();
    },[])


    if(JSON.stringify(info) !== "{}"){
        return (
            <div>
                
                            <div>
    <div className="row">
                            <div className="col-6">
                                <img src="https://th.bing.com/th/id/OIP.drExegRbmVpPq_44ztMElAHaFj?w=212&h=180&c=7&r=0&o=5&pid=1.7" className="" alt="..." width={450} />
                            </div>
                            <div className="col-6">
                                <h1 className="text-center">{info.properties.name}</h1>
                                <p className="text-center">
                                    {info.description}
                                </p>
                            </div>
                        </div>
                        <hr className="lineaDivision"></hr>
                        <div className="row propsDetalle">
                            <div className="col-2">
                                Name
                                <p>{info.properties.name}</p>
                            </div>
                            <div className="col-2">
                                Birth Year
                                <p>{info.properties.birth_year}</p>
                            </div>
                            <div className="col-2">
                                Gender
                                <p>{info.properties.gender}</p>
                            </div>
                            <div className="col-2">
                                Height
                                <p>{info.properties.height}</p>
                            </div>
                            <div className="col-2">
                                Skin Color
                                <p>{info.properties.skin_color}</p>
                            </div>
                            <div className="col-2">
                                Eye Color
                                <p>{info.properties.eye_color}</p>
                            </div>
                        </div>
            
                        <Link to={'/starwars'}>
                            <button className="btn btn-primary">Volver</button>
                        </Link>
                                </div>
    
                           
                        
                        
                                   
            </div>
        )
    }
    
}

export default DetallePersonaje;