import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import CardPersonaje from "../components/CardPersonaje";


const StarWars = () => {

    
    const { store, dispatch } = useGlobalReducer();
    const [personajes,setPersonajes] = useState([]);
    const [vehiculos,setVehiculos] = useState([]);
    const [planetas,setPlanetas] = useState([]);


    const obtenerPersonajes = async () => {

        try {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
        

            const personajesResp = await Promise.all(
                data.results.map(async (personaje) => {
                  const res = await fetch(personaje.url);
                  const info = await res.json();
          
                  return {
                    id: personaje.uid,
                    name: personaje.name,
                    skin_color: info.result.properties.skin_color,
                    hair_color: info.result.properties.hair_color,
                    height: info.result.properties.height,
                    gender: info.result.properties.gender,
                    eye_color: info.result.properties.eye_color
                  };
                })
            )
        

            setPersonajes(personajesResp);

            console.log(personajesResp);

            /*
            dispatch({
              type: 'get_personajes',
              payload: { personajes }
            });
            */
          } catch (error) {
            console.error("Error al obtener personajes:", error);
          }

    }

    const obtenerVehiculos = async () => {

      try {
          const response = await fetch("https://www.swapi.tech/api/vehicles");
          const data = await response.json();
  
          console.log(data);

          const vehiculosResp = await Promise.all(
              data.results.map(async (vehiculo) => {
                const res = await fetch(vehiculo.url);
                const info = await res.json();
                console.log('info');
                console.log(info);
                return {
                  id: info.uid,
                  name: info.properties.name,
                  cargo_capacity: info.properties.cargo_capacity,
                  vehicle_class: info.properties.vehicle_class
                };
              })
          )
      


/*
          setPersonajes(personajesResp);


          */
          
        } catch (error) {
          console.error("Error al obtener personajes:", error);
        }

  }

    const addFavoritos = (id,name,tipo) => {
        
        const favorito = {
            id: id,
            name: name,
            tipo: tipo
          };


        dispatch({ type: 'add_favorito', payload: favorito });

        console.log(store);
    }

    useEffect(()=>{
        obtenerPersonajes();
        //obtenerVehiculos();
        
    },[])

    return (
    <div>

        

        <div className="container mt-4">
            <h1 className="text-danger">Personajes</h1>
            <div className="d-flex flex-nowrap overflow-auto">

                {
                    
                    personajes.map((item)=>(
                       <CardPersonaje  element={item} key={item.id} addFavoritos={addFavoritos} store={store}/>
                    ))
                    
                }
                



        
            </div>
        </div>


    </div>)
}

export default StarWars;