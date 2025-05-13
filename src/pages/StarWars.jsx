import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


const StarWars = () => {

    
    const { store, dispatch } = useGlobalReducer();


    const obtenerPersonajes = () => {

        fetch("https://www.swapi.tech/api/people")
        .then(res => res.json())
        .then(data =>{

            let resultapi = {
                    personajes:[
                    {
                        id:0,
                        name:''
                    }
                ]
            }
            
            data.results.map((x)=>{
                resultapi.personajes.push({
                    id: x.uid,
                    name:x.name
                });
            })

            dispatch({
                type: 'get_personajes',
                payload: resultapi
            });

            console.log(store);

        })
        .catch(err => console.error(err))

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
                    store.personajes.map((item)=>{
                        <div className="card mx-2" style={{ minWidth: '300px' }}>
                            <img src="https://th.bing.com/th/id/OIP.drExegRbmVpPq_44ztMElAHaFj?w=212&h=180&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                            
                                    <button className="btn btn-warning" style={{float: "right"}}><i className="fa-solid fa-heart"></i></button>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                



        
            </div>
            </div>


    </div>)
}

export default StarWars;