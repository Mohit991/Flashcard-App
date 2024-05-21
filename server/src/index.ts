import express from "express"
import cors from 'cors'
import {config} from "dotenv"
config()

import mongoose from 'mongoose'

import { getDecksController } from "./controllers/getDecksController"
import { createDeckController } from "./controllers/createDeckController"
import { deleteDeckController } from "./controllers/deleteDeckController"
import { createCardForDeckController } from "./controllers/createCardForDeckController"
import { getDeckController } from "./controllers/getDeckController"
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeck"
import { getUserController } from "./controllers/getUserController"
import { createUserController } from "./controllers/createUserController"

const port = 5000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/decks', getDecksController)
app.post('/decks', createDeckController)
app.delete('/decks/:deckId', deleteDeckController)

app.get('/decks/:deckId', getDeckController)
app.post('/decks/:deckId/cards', createCardForDeckController)
app.delete('/decks/:deckId/cards/:index', deleteCardOnDeckController)

app.get('/user', getUserController)
app.post('/user', createUserController)

mongoose.connect(process.env.MONGO_URL!)
.then(() => {
    console.log(`Listening at port ${port}`)
    app.listen(port)
})

