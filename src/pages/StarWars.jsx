import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import CardPersonaje from "../components/CardPersonaje";
import CardVehiculo from "../components/CardVehiculo";
import CardPlanetas from "../components/CardPlanetas";


const StarWars = () => {

    
    const { store, dispatch } = useGlobalReducer();
    const [personajes,setPersonajes] = useState([]);
    const [vehiculos,setVehiculos] = useState([]);
    const [planetas,setPlanetas] = useState([]);



    const obtenerPersonajesDetalle = async () => {

      try{

        const responsePersonajes = await fetch('https://www.swapi.tech/api/people');
        const dataPersonajes = await responsePersonajes.json();

        const detallePromesa = dataPersonajes.results.map((item)=>
          fetch(item.url).then(res=> res.json())
        )

        const dataDetalle = await Promise.all(detallePromesa);

        const info = [];

        dataPersonajes.results.map((personaje)=>{
          dataDetalle.map(detalle => {
            if(personaje.uid == detalle.result.uid){
              info.push({
                id: personaje.uid,
                name: personaje.name,
                skin_color: detalle.result.properties.skin_color,
                hair_color: detalle.result.properties.hair_color,
                height: detalle.result.properties.height,
                gender: detalle.result.properties.gender,
                eye_color: detalle.result.properties.eye_color
              })
            }
          })
        })

        setPersonajes(info);

      }catch(ex){
        console.log(ex);
      }

    }

    const obtenerVehiculosDetalle = async () => {
      try{

        const responseVehiculos = await fetch('https://www.swapi.tech/api/vehicles');
        const dataVehiculos = await responseVehiculos.json();

        const detallePromesa = dataVehiculos.results.map((item)=>
          fetch(item.url).then(res=> res.json())
        )

        const dataDetalle = await Promise.all(detallePromesa);

        const info = [];

        dataVehiculos.results.map((vehiculo)=>{
          dataDetalle.map(detalle => {
            if(vehiculo.uid == detalle.result.uid){
              info.push({
                id: vehiculo.uid,
                name: detalle.result.properties.name,
                cargo_capacity: detalle.result.properties.cargo_capacity,
                vehicle_class: detalle.result.properties.vehicle_class
              })
            }
            
          })
        })

        setVehiculos(info);

      }catch(ex){
        console.log(ex);
      }

    }

    const obtenerPlanetasDetalle = async () => {
      try{

        const responsePlanetas = await fetch('https://www.swapi.tech/api/planets');
        const dataPlanetas = await responsePlanetas.json();

        
        const detallePromesa = dataPlanetas.results.map((item)=>
          fetch(item.url).then(res=> res.json())
        )

        const dataDetalle = await Promise.all(detallePromesa);

        console.log(dataDetalle);

        const info = [];

        
        dataPlanetas.results.map((planeta)=>{
          dataDetalle.map(detalle => {
            if(planeta.uid == detalle.result.uid){
              info.push({
                id: planeta.uid,
                name: detalle.result.properties.name,
                terrain: detalle.result.properties.terrain,
                gravity: detalle.result.properties.gravity
              })
            }
            
          })
        })
        
        setPlanetas(info);
      
      }catch(ex){
        console.log(ex);
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
        obtenerPersonajesDetalle();
        obtenerVehiculosDetalle();
        obtenerPlanetasDetalle();
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

        <div className="container mt-4">
            <h1 className="text-danger">Vehiculos</h1>
            <div className="d-flex flex-nowrap overflow-auto">

                {
                    vehiculos.map((item)=>(
                       <CardVehiculo  element={item} key={item.id} addFavoritos={addFavoritos} store={store}/>
                    ))
                }
            </div>
        </div>

        <div className="container mt-4">
            <h1 className="text-danger">Planetas</h1>
            <div className="d-flex flex-nowrap overflow-auto">

                {
                    planetas.map((item)=>(
                       <CardPlanetas  element={item} key={item.id} addFavoritos={addFavoritos} store={store}/>
                    ))
                }
            </div>
        </div>


    </div>)
}

export default StarWars;