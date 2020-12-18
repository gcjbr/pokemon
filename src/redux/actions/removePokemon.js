import { UNFAV_POKEMON } from '../types';

export default function removePokemon(pokemon) {
  return (dispatch) => {
    return dispatch({
      type: UNFAV_POKEMON,
      payload: pokemon,
    });
  };
}
