import { Request, Response } from "express";
import { addCustomer } from "../services/customer.service";

export const addcustomer = (req: Request, res: Response) => {
    try {

        const name = req.body.name as string;
        const phone = req.body.phone as string;
        const licinsePlate = req.body.licinsePlate as string;

        const add = addCustomer(name, phone, licinsePlate)
        res.send({ status: "success", customer: add })
    } catch (e) {
        res.send({ status: "error", message: e })
    }
}