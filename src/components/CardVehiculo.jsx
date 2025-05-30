import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardVehiculo = (props) => {


    useEffect(()=>{
    },[])

    return (
        <div className="card mx-2" style={{ minWidth: '300px' }}>
            <img src="https://elcomercio.pe/resizer/QVY0kvwpXXflu15l2s9czI2h_g0=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PHVLWGIO7BESFBYXYNNN5XZOSU.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="row">
                    <div className="col">
                    <h5 className="card-title">{props.element.name}</h5>
                    
                        <ul>
                            <li>Cargo Capacity: {props.element.cargo_capacity}</li>
                            <li>Vehicle Class: {props.element.vehicle_class}</li>
                        </ul>
                   
                    <Link to={'/detallevehiculo/' + props.element.id}>
                        <button className="btn btn-primary">Learn More!</button>
                    </Link>
                   
            
                    <button className="btn botonFavorito" style={{float: "right"}} onClick={()=>props.addFavoritos(props.element.id,props.element.name,'vehiculo')}>
                        
                        
                        {
                            props.store.favoritos.find(x=>x.id == props.element.id && x.tipo == 'vehiculo')?.id != undefined
                            ? <i className="fa-solid fa-heart favorite" ></i>
                            : <i className="fa-solid fa-heart noFavorite"></i>
                        }

                    </button>
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVehiculo;