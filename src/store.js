export const initialStore=()=>{
  return{
    favoritos:[
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_favoritos':
      const listaPersonajes = action.payload;
      return {
        ...store,
        personajes: listaPersonajes.personajes
      };

    case 'add_favorito':
      // Verificamos si el favorito ya existe
      const existe = store.favoritos.some(fav => fav.id === action.payload.id && fav.tipo === action.payload.tipo);
      return {
        ...store,
        favoritos: existe ? store.favoritos : [...store.favoritos, action.payload]
      };

      case 'remove_favorito':
      return {
        ...store,
        favoritos: store.favoritos.filter(fav => fav.id !== action.payload.id)
      };

    default:
      throw new Error('Unknown action.');
  }
}