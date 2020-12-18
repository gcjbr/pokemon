import { SEARCH_POKEMON, SET_ERROR } from '../types';

export default function searchPokemon(name) {
  return async (dispatch) => {
    try {
      const apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
      const response = await fetch(`${apiEndpoint}${name}`);
      const data = await response.json();
      return dispatch({
        type: SEARCH_POKEMON,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
      });
    }
  };
}
