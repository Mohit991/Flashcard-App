import express, { Request, Response } from "express"

import {config} from "dotenv"
config()

import mongoose from 'mongoose'
import Deck from './models/Deck'
const port = 5000
const app = express()
app.use(express.json())

app.post('/decks', async (req: Request, res: Response) => {
    console.log(req.body);

    const newDeck = new Deck({
        title: 'First Deck'
    })
    const  createdDeck = await newDeck.save()
    res.json(createdDeck)
})

mongoose.connect(process.env.MONGO_URL!)
.then(() => {
    console.log(`Listening at port ${port}`)
    app.listen(port)
})

