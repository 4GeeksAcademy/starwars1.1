import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import CardPersonaje from "../components/CardPersonaje";


const StarWars = () => {

    
    const { store, dispatch } = useGlobalReducer();


    const obtenerPersonajes = async () => {

        try {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
        

        

            const personajes = await Promise.all(
                data.results.map(async (personaje) => {
                  const res = await fetch(personaje.url);
                  const info = await res.json();
          
                  return {
                    id: personaje.uid,
                    name: personaje.name,
                    skin_color: info.result.properties.skin_color,
                    hair_color: info.result.properties.hair_color,
                    height: info.result.properties.height
                  };
                })
            )
        
            dispatch({
              type: 'get_personajes',
              payload: { personajes }
            });
          } catch (error) {
            console.error("Error al obtener personajes:", error);
          }

    }

    useEffect(()=>{
        obtenerPersonajes()
    },[])

    return (
    <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="navbar-brand" href="#" src="https://th.bing.com/th/id/OIP.8nicOZjrXoCcLIy_v4CiRAAAAA?w=315&h=133&c=7&r=0&o=5&pid=1.7"  width={100}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge text-bg-secondary">0</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container mt-4">
            <h1 className="text-danger">Personajes</h1>
            <div className="d-flex flex-nowrap overflow-auto">

                {
                    store.personajes.map((item)=>(
                       <CardPersonaje  element={item} key={item.id}/>
                    ))
                }
                



        
            </div>
            </div>


    </div>)
}

export default StarWars;