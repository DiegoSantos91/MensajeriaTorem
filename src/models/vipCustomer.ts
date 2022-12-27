import {Schema} from 'mongoose';

const vipCustomerSchema = new Schema({
  creditCard: { type: String, required: true }
});

export { vipCustomerSchema as VipCustomer };