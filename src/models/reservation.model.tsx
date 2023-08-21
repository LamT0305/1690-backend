import mongoose, { Schema } from "mongoose";
import IReservation from "../interfaces/reservation.interface";

const reservationSchema: Schema<IReservation> = new Schema<IReservation>({
    customer_id: {
        type: String,
        required: true,
    },
    space_id: {
        type: String,
        required: true,
    },
    reservation_time: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Reservation", reservationSchema)