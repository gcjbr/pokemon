import { SET_ERROR, SEARCH_POKEMON, FAV_POKEMON, UNFAV_POKEMON } from './types';

const defaultState = {
  pokemon: null,
  faved: [],
  error: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: payload,
        error: false,
      };
      break;
    case FAV_POKEMON:
      const isAlreadyFave = state.faved.find((poke) => poke.id === payload.id);
      if (!isAlreadyFave) {
        const faved = [...state.faved, payload];
        return {
          ...state,
          faved,
        };
      }
      return state;
      break;
    case UNFAV_POKEMON:
      const faved = state.faved.filter((poke) => poke.id !== payload.id);
      return {
        ...state,
        faved,
      };

      break;
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
      break;
    default:
      return state;
  }
};
