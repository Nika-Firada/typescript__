import React, {useState, useEffect} from 'react';

import { CharacterType, fetchCharacter } from './Characters';
import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

function App() {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter().then((c) => {
      setCharacter(c);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
    </main>
  );
}

export default App;
