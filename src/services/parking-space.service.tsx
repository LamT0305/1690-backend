import index from "../models/index"


const parkingSpaceModel = index.parkingSpaceModel;

export const getAllSpace = async () => {
    const spaces = await parkingSpaceModel.find()
    return {
        status: "success",
        spaces: spaces
    };
}

export const getAvailableSpaces = async () => {
    const available = await parkingSpaceModel.find({ status: "available" })

    if (!available) {
        throw new Error("No available space");
    }
    return {
        status: "success",
        available: available
    }
}

export const updateStatus = async (id: String, status: String) => {
    const space = await parkingSpaceModel.findById(id);

    if (!space) {
        throw new Error("No space found");
    }

    if(!id || !status) {
        throw new Error("Invalid field information");
    }
    const updateStatus = await parkingSpaceModel.findByIdAndUpdate(
        id,
        { $set: { status: status } },
        { new: true }
    )

    return {
        status: "success",
        updateStatus: updateStatus
    };
}