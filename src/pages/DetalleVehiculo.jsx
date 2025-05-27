import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetalleVehiculo = () => {




    const parametros = useParams();
    const [info,setInfo] = useState({});



    const obtenerDatos = () => {
        fetch("https://www.swapi.tech/api/vehicles/" + parametros.id)
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
                                <img src="https://elcomercio.pe/resizer/QVY0kvwpXXflu15l2s9czI2h_g0=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PHVLWGIO7BESFBYXYNNN5XZOSU.jpg" className="" alt="..." width={450} />
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
                            cargo_capacity
                                <p>{info.properties.cargo_capacity}</p>
                            </div>
                            <div className="col-2">
                            model
                                <p>{info.properties.model}</p>
                            </div>
                            <div className="col-2">
                            manufacturer
                                <p>{info.properties.manufacturer}</p>
                            </div>
                            <div className="col-2">
                            passengers
                                <p>{info.properties.passengers}</p>
                            </div>
                            <div className="col-2">
                            vehicle_class
                                <p>{info.properties.vehicle_class}</p>
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

export default DetalleVehiculo;