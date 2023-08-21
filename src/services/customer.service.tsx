import index from "../models/index"

const customerModel = index.customerModel;

export const addCustomer = async (name: String, phone: String, licinsePlate: String) => {
    const customer = await customerModel.create({
        name: name,
        phone: phone,
        licinsePlate: licinsePlate
    })

    return customer
}