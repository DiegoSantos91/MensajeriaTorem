import { Schema, model }  from 'mongoose';
import { Customer } from '../types';
import { RegularCustomer } from './regularCustomer';
import { VipCustomer } from './vipCustomer';

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

const customerModel = model<Customer>('Customer', customerSchema);
const vipCustomerModel = customerModel.discriminator('VipCustomer', VipCustomer);
const regularCustomerModel = customerModel.discriminator('RegularCustomer', RegularCustomer);

export default {
    customerModel ,
    vipCustomerModel ,
    regularCustomerModel 
};