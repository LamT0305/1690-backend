import { Request, Response } from "express"
import { getAllSpace, getAvailableSpaces, updateStatus } from "../services/parking-space.service";
import parkingSpaceModel from "../models/parking-space.model";


export const getAllParkingSpace = async (req: Request, res: Response) => {
    try {
        res.send(await getAllSpace());
    } catch (e) {
        console.log(e);
        res.send({ status: "error", message: e })
    }
}

export const getAvailableSpace = async (req: Request, res: Response) => {
    try {
        res.send(await getAvailableSpaces());
    } catch (e) {
        console.log(e);
        res.send({ status: "error", message: e })
    }
}


export const updateStatusSpace = async (req: Request, res: Response) => {
    try {
        const space_id = req.params.id as string
        const { status } = req.body

        const updateResult = await updateStatus(space_id, status); // Log the result
        res.send(updateResult);
    } catch (e) {
        console.log(e);
        res.send({ status: "error", message: e });
    }
}

export const addSpace = async (req: Request, res: Response) => {
    try {

        const { space_number, status } = req.body

        if (!space_number || !status) {
            throw new Error("invalid ");
        }

        const space = await parkingSpaceModel.create({
            space_number: space_number,
            status: status
        })

        res.send({ status: "success", space: space });
    } catch (e) {
        res.send({ status: "error", message: e });
        console.log(e)
    }
}

