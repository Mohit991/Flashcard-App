import { useEffect, useState } from 'react';
import './App.css';

type TDeck = {
  title: string,
  _id: string
}

function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState('');

  async function handleCreateDeck(e) {
    e.preventDefault();
    await fetch('http://localhost:5000/decks', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        'content-type': 'application/json',
      },
    });
    setTitle('');
  }

  useEffect(() => {
    async function fetchDecks() {
      const res = await fetch('http://localhost:5000/decks');
      const newDecks = await res.json();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <>
    <div className='input-form'>
      <form onSubmit={handleCreateDeck}>
        <label className='input-label' htmlFor="deck-title">Deck Title</label>
        <input
          className='input-field'
          id="deck-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="submit-button" type="submit">Create Deck</button>
      </form>
    </div>
    <hr className='separator'/>
    <div className="App">
      {decks.map((deck) => (
        <div key={deck._id} className="card">
          <h2 className="card-title">{deck.title}</h2>
          {/* You can add more content here if needed */}
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
