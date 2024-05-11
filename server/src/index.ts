import express, { Request, Response } from "express"
import mongoose from 'mongoose'
import Deck from './models/Deck'
const port = 5000
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello")
})

mongoose.connect('mongodb+srv://flashcard-user:12345@cluster0.3mdkncw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log(`Listening at port ${port}`)
    app.listen(port)
})

