import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetallePlaneta = () => {




    const parametros = useParams();
    const [info,setInfo] = useState({});



    const obtenerDatos = () => {
        fetch("https://www.swapi.tech/api/planets/" + parametros.id)
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
                                <img src="https://th.bing.com/th/id/OIP.nuR49DenIOwJ1mAdgSNvhgHaHY?w=187&h=186&c=7&r=0&o=5&pid=1.7" className="" alt="..." width={450} />
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
                            gravity
                                <p>{info.properties.gravity}</p>
                            </div>
                            <div className="col-2">
                            diameter
                                <p>{info.properties.diameter}</p>
                            </div>
                            <div className="col-2">
                            terrain
                                <p>{info.properties.terrain}</p>
                            </div>
                            <div className="col-2">
                            population
                                <p>{info.properties.population}</p>
                            </div>
                            <div className="col-2">
                            surface_water
                                <p>{info.properties.surface_water}</p>
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

export default DetallePlaneta;