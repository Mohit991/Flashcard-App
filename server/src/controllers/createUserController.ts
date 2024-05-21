import { Request, Response } from "express"
import User from "../models/User"

export async function createUserController(req: Request, res: Response){
    const name = req.body.name
    const password = req.body.password   
    const newUser = new User({
        name: name,
        password: password
    })
    const createdUser = await newUser.save()
    res.json(createdUser)
}
