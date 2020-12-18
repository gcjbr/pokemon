import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import favPokemon from '../redux/actions/favPokemon';
import removePokemon from '../redux/actions/removePokemon';

export default function Pokemon(props) {
  const dispatch = useDispatch();
  const faved = useSelector((state) => state.faved);
  const { pokemon } = props;
  const isFaved = faved.find((poke) => poke.id === pokemon.id);
  return (
    <div className='pokemon'>
      <h2>{pokemon.name}</h2>
      <div>
        <img src={pokemon.sprites.front_default} />
      </div>
      <div className='pokemon__items'>
        {pokemon.abilities && <h3>Abillities</h3>}
        {pokemon.abilities.map((ab) => (
          <div>{ab.ability.name}</div>
        ))}
      </div>
      <div className='pokemon__items'>
        <div>
          <strong>Height:</strong> {pokemon.height}
        </div>
      </div>
      <div>
        {isFaved ? (
          <button
            className='btn btn--danger'
            onClick={() => dispatch(removePokemon(pokemon))}
          >
            Remove from favorites
          </button>
        ) : (
          <button className='btn' onClick={() => dispatch(favPokemon(pokemon))}>
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
}
