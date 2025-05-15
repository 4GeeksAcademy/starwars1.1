import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardPersonaje = (props) => {


    useEffect(()=>{
    
    },[])

    return (
        <div className="card mx-2" style={{ minWidth: '300px' }}>
            <img src="https://th.bing.com/th/id/OIP.drExegRbmVpPq_44ztMElAHaFj?w=212&h=180&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="row">
                    <div className="col">
                    <h5 className="card-title">{props.element.name}</h5>
                    
                        <ul>
                            <li>Altura: {props.element.height}</li>
                            <li>Color Cabello: {props.element.hair_color}</li>
                            <li>Color piel: {props.element.skin_color}</li>
                        </ul>
                   
                    <Link to={'/detallepersonaje/' + props.element.id}>
                        <button className="btn btn-primary">Go somewhere</button>
                    </Link>
                   
            
                    <button className="btn btn-warning" style={{float: "right"}}><i className="fa-solid fa-heart"></i></button>
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPersonaje;