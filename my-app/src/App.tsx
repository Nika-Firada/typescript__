import React from 'react';
import { DogFactType, fetchDogFacts } from './dog-facts';
import Form from './Form';
import Fact from './Fact';

function App() {
  const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => {
      setFacts(facts);
    });
  };

  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts.map((fact, index) => (
          <Fact key={index} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
}

export default App;
