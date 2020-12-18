import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchPokemon from '../redux/actions/searchPokemon';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='search'>
      <div>
        <input
          className='search__bar'
          type='text'
          placeholder='Search your Pokemon'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div>
        <button
          className='btn'
          onClick={() => dispatch(searchPokemon(searchInput))}
        >
          Search
        </button>
      </div>
    </div>
  );
}
