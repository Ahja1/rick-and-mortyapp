import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/characterSlice';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const characterStatus = useSelector((state) => state.characters.status);

  useEffect(() => {
    if (characterStatus === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [characterStatus, dispatch]);

  if (characterStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (characterStatus === 'failed') {
    return <div>Error loading characters.</div>;
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
