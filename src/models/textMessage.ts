import { Schema}  from 'mongoose';

const textMessageSchema = new Schema({
  text: { type: String, required: true }
});

export { textMessageSchema as TextMessage };