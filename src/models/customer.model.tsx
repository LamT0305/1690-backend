import mongoose, { Schema } from "mongoose";
import ICustomer from "../interfaces/customer.interface";

const customerSchema: Schema<ICustomer> = new Schema<ICustomer>({
    name: {
        type: "string",
        required: true,
    },
    phone: {
        type: "string",
        required: true
    },
    licinsePlate: {
        type: "string",
        required: true
    }
})

export default mongoose.model<ICustomer>("Customer", customerSchema);