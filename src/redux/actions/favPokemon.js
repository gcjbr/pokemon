import { FAV_POKEMON } from '../types';

export default function favPokemon(pokemon) {
  return (dispatch) => {
    return dispatch({
      type: FAV_POKEMON,
      payload: pokemon,
    });
  };
}
