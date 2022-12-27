
import { Schema, model } from 'mongoose';
import { Message } from '../types';
import { LocationMessage } from './locationMessage';
import { TextMessage } from './textMessage';

const messageSchema = new Schema({
    timestamp: {
        type: Date,
        required: true
    },
    isReceived: {
        type: Boolean,
        required: true
    }
});

const messageModel = model<Message>('Message', messageSchema);
const textMessageModel = messageModel.discriminator('TextMessage', TextMessage);
const locationMessageModel = messageModel.discriminator('LocationMessage', LocationMessage);

messageSchema.methods.toJSON = function () {
    const { ...data } = this.toObject();
    return data;
};

export default {
    messageModel,
    textMessageModel,
    locationMessageModel
};