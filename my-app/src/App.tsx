import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { CharacterType, fetchCharacter } from './characters';
import { CharacterInformation } from './CharacterInformation';
import Counter from './Counter';


function App() {
  const [character, setCharacter] = useState<CharacterType | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setTimeout(() =>{
      fetchCharacter().then(c =>{setCharacter(c); setLoading(false)});
    }, 1000)
  },[])
  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
      <Counter />
    </main>
  );
}

export default App;
