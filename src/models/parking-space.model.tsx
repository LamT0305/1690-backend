import mongoose, { Schema } from "mongoose";
import IParkingSpace from "../interfaces/parking-space.interface";

const parkingSpaceSchema: Schema<IParkingSpace> = new Schema<IParkingSpace>({
    space_number: {
        type: "string",
        required: true,
    },
    status: {
        type: "string",
        required: true,
    }
})

export default mongoose.model<IParkingSpace>("ParkingSpace", parkingSpaceSchema)