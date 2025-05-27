import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardPlanetas= (props) => {


    useEffect(()=>{
    },[])

    return (
        <div className="card mx-2" style={{ minWidth: '300px' }}>
            <img src="https://th.bing.com/th/id/OIP.nuR49DenIOwJ1mAdgSNvhgHaHY?w=187&h=186&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="row">
                    <div className="col">
                    <h5 className="card-title">{props.element.name}</h5>
                    
                        <ul>
                            <li>Terrain: {props.element.terrain}</li>
                            <li>Gravity: {props.element.gravity}</li>
                        </ul>
                   
                    <Link to={'/detallepersonaje/' + props.element.id}>
                        <button className="btn btn-primary">Learn More!</button>
                    </Link>
                   
            
                    <button className="btn botonFavorito" style={{float: "right"}} onClick={()=>props.addFavoritos(props.element.id,props.element.name,'personaje')}>
                        
                        
                        {
                            props.store.favoritos.find(x=>x.id == props.element.id)?.id != undefined
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

export default CardPlanetas;