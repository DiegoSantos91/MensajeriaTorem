import {Schema} from 'mongoose';

const locationMessageSchema = new Schema({
  latitud: { type: Number, required: true },
  longitud: { type: Number, required: true }
});

export { locationMessageSchema as LocationMessage };