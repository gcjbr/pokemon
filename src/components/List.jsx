import React from 'react';
import { useSelector } from 'react-redux';
import Pokemon from './Pokemon';

export default function List() {
  const pokemon = useSelector((state) => state.pokemon);
  const error = useSelector((state) => state.error);

  return (
    <div>
      <div className='list'>
        {error && <div className='error'>No Pokemon was found</div>}
        {pokemon && <Pokemon pokemon={pokemon} />}
      </div>
    </div>
  );
}
