import { Request, Response } from "express"
import Deck from "../models/Deck"

export async function createDeckController(req: Request, res: Response){
    const deckTitle = req.body.title    
    const newDeck = new Deck({
        title: deckTitle
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
}
