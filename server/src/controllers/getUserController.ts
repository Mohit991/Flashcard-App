import { Request, Response } from "express"
import User from "../models/User"

export async function getUserController(req: Request, res: Response){
    const name = req.body.name
    const password = req.body.password
    // console.log("get user called");
    
    const user = await User.find(
        {name: name, password: password}
    )
    res.json(user)
}