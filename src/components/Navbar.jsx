import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="navbar-brand" href="#" src="https://th.bing.com/th/id/OIP.8nicOZjrXoCcLIy_v4CiRAAAAA?w=315&h=133&c=7&r=0&o=5&pid=1.7"  width={100}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge text-bg-secondary">{store.favoritos.length}</span>
                    </button>
                    <ul className="dropdown-menu">
                        {
							store.favoritos.map((element,index)=>{
								return(
                        				<li key={index}><a className="dropdown-item" href="#">{element.name}</a></li>
								)
							})
						}
                        
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
	);
};