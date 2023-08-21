import mongoose, { Schema } from "mongoose";
import ITransaction from "../interfaces/transaction.interface";

const transactionSchema: Schema<ITransaction> = new Schema<ITransaction>({
    customer_id: {
        type: String,
        required: true
    },
    space_id: {
        type: String,
        required: true
    },
    transaction_time: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Transaction", transactionSchema)