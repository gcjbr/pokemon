import React from 'react';
import { useSelector } from 'react-redux';
import Pokemon from './Pokemon';

export default function Faved() {
  const state = useSelector((state) => state);
  const faved = useSelector((state) => state.faved);
  return (
    <div>
      {!faved.length && <div>No favorite pokemons yet!</div>}
      {faved.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
