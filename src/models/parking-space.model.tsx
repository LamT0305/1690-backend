import mongoose, { Schema } from "mongoose";
import IParkingSpace from "../interfaces/parking-space.interface";

const parkingSpaceSchema: Schema<IParkingSpace> = new Schema<IParkingSpace>({
  space_number: {
    type: "string",
    required: true,
    unique: true,
  },
  status: {
    type: "string",
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  line: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IParkingSpace>(
  "ParkingSpace",
  parkingSpaceSchema
);
