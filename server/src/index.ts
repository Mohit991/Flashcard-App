import express, { Request, Response } from "express"
import cors from 'cors'
import {config} from "dotenv"
config()

import mongoose from 'mongoose'
import Deck from './models/Deck'
const port = 5000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/decks', async (req: Request, res: Response) => {
    const decks = await Deck.find()
    // console.log(decks);
    res.json(decks)
})

app.post('/decks', async (req: Request, res: Response) => {
    const deckTitle = req.body.title
    // console.log(deckTitle);
    
    const newDeck = new Deck({
        title: deckTitle
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

app.delete('/decks/:deckId', async (req: Request, res: Response) => {
    const deckId = req.params.deckId
    const deck = await Deck.findByIdAndDelete(deckId)
    // res.json({
    //     message: "Deleted Successfully"
    // })
    res.json(deck)
})
mongoose.connect(process.env.MONGO_URL!)
.then(() => {
    console.log(`Listening at port ${port}`)
    app.listen(port)
})

