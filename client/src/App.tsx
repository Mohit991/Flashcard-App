import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { createDeck } from './api/createDeck';
import { deleteDeck } from './api/deleteDeck';
import { getDecks } from './api/getDecks';
import {TDeck} from './api/createDeck'

function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState('');

  async function handleCreateDeck(e) {
    e.preventDefault();
    const deck = await createDeck(title) 
    setDecks([...decks, deck])
    setTitle('');
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    async function fetchDecks() {
      const allDecks = await getDecks()
      setDecks(allDecks);
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
    <div className="App">
      {decks.map((deck) => (
        <div key={deck._id} className="card">
          <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
          <Link to={`decks/${deck._id}`}>
            <h2 className="card-title">{deck.title}</h2>
          </Link>
          {/* You can add more content here if needed */}
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
