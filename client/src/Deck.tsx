import React, {useEffect, useState} from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { createCard } from './api/createCard';
import { deleteCard } from './api/deleteCard';
import { getDeck } from './api/getDeck';
import { TDeck } from './api/getDecks';

export default function Deck() {
    const [deck, setDeck] = useState<TDeck | undefined>()
    const [cards, setCards] = useState<string[]>([]);
    const [text, setText] = useState('');
    const {deckId} = useParams()  

    async function handleCreateCard(e: React.FormEvent) {
        e.preventDefault();
        const {cards: serverCards} = await createCard(deckId!, text) 
        setCards(serverCards)
        setText('');
    }

      async function handleDeleteCard(index: number) {
        if(!deckId) return 
        const updatedDeck = await deleteCard(deckId, index);
        setCards(updatedDeck.cards)
      }

    useEffect(() => {
        async function fetchDeck() {
            if(!deckId) return
            const currentDeck = await getDeck(deckId)
            setDeck(currentDeck);
            setCards(currentDeck.cards)
        }
        fetchDeck();
    }, [deckId]);

    return (
        <>
        <div className='input-form'>
        <form onSubmit={handleCreateCard}>
            <label className='input-label' htmlFor="card-text">Card Text</label>
            <input
            className='input-field'
            id="card-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button className="submit-button" type="submit">Create Card</button>
        </form>
        </div>
        <div className="App">
        {cards.map((card, index) => (
            <div key={card} className="card">
            <button onClick={() => handleDeleteCard(index)}>X</button>
                <h2 className="card-title">{card}</h2>
            </div>
        ))}
        </div> 
        
        </>
    );
}

