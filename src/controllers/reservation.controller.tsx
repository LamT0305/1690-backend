import { Request, Response } from "express";

export const makeReservation = async (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        res.send({ status: "error", message: e })
    }
}