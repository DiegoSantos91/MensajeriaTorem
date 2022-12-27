import {Schema} from 'mongoose';

const regularCustomerSchema = new Schema({
  phoneNumber: { type: String, required: true }
});

export { regularCustomerSchema as RegularCustomer };