import e, {Request, Response} from "express";
import {
    getAllSpace,
    getAvailableSpaces,
    updateStatus,
} from "../services/parking-space.service";
import parkingSpaceModel from "../models/parking-space.model";
import eventEmitters from "../configs/eventEmitters";

export const getAllParkingSpace = async (req: Request, res: Response) => {
    try {
        res.send(await getAllSpace());
    } catch (e) {
        console.log(e);
        res.send({status: "error", message: e});
    }
};

export const getAvailableSpace = async (req: Request, res: Response) => {
    try {
        res.send(await getAvailableSpaces());
    } catch (e) {
        console.log(e);
        res.send({status: "error", message: e});
    }
};

export const updateStatusSpace = async (req: Request, res: Response) => {
    try {
        const space_name = req.params.name as string;
        const {status} = req.body;

        const updateResult = await updateStatus(space_name, status); // Log the result
        eventEmitters.emit("updateLotStatus", updateResult);

        res.send(updateResult);
    } catch (e) {
        console.log(e);
        res.send({status: "error", message: e});
    }
};

export const addSpace = async (req: Request, res: Response) => {
    try {
        const {space_number, status} = req.body;

        if (!space_number || !status) {
            throw new Error("invalid ");
        }

        const space = await parkingSpaceModel.create({
            space_number: space_number,
            status: status,
        });

        res.send({status: "success", space: space});
    } catch (e) {
        res.send({status: "error", message: e});
        console.log(e);
    }
};

export const updateSpaceDetails = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const {lat, long, level} = req.body;
        if (!lat || !long || !level) {
            res.send({status: "error", message: "Invalid inputs"});
        }

        const space = await parkingSpaceModel.findByIdAndUpdate(
            id,
            {lat: lat, long: long, level: level},
            {new: true}
        );

        res.send({status: "success", space: space});
    } catch (error) {
        res.send({status: "error", message: error});
    }
};

export const findNearestSpace = async (req: Request, res: Response) => {
    try {
        let nearestSpace: any = null;

        const levels = [1, 2, 3];

        for (const level of levels) {
            const spaces = await parkingSpaceModel.find({level});

            for (const space of spaces) {
                if (space.status === "available" && space.line === 2) {
                    nearestSpace = space;
                    break;
                } else if (space.status === "available" && space.line === 1) {
                    nearestSpace = space;
                    break;
                }
            }

            if (nearestSpace) {
                break;
            }
        }

        if (nearestSpace) {
            res.send({status: "success", space: nearestSpace});
        } else {
            res.send({status: "error", message: "No available space found."});
        }
    } catch (e) {
        res.send({status: "error", message: e});
    }
};

export const updateLine = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const {line} = req.body;
        if (!line) {
            res.send({status: "error", message: "Invalid inputs"});
        }

        const space = await parkingSpaceModel.findByIdAndUpdate(
            id,
            {line: line},
            {new: true}
        );

        res.send({status: "success", space: space});
    } catch (e) {
        res.send({status: "error", message: e});
    }
};
