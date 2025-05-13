export const initialStore=()=>{
  return{
    personajes:[
      {
        id:0,
        name:''
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_personajes':

      const listaPersonajes = action.payload

      return {
        ...store,
        personajes: listaPersonajes.personajes
      };
    default:
      throw Error('Unknown action.');
  }    
}
