import { Schema, model } from 'mongoose';
import { Chat } from '../types';

const ChatSchema: Schema = new Schema({

    isFavorite: {
        type: Boolean,
        default: false
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'message',
        required: false
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customer',
        required: true
    }

});


ChatSchema.methods.toJSON = function () {
    const { ...data } = this.toObject();
    return data;
};

/**
 * chat model =>
 * {
 *   isFavorite: {
          type: Boolean,
          default: false
      },
      message: {
           type: Schema.Types.ObjectId,
               required: false
      },
      customer: {
          type: Schema.Types.ObjectId,
          ref: 'customer',
          required: true
      }
 * }
 */
export default model<Chat>('Chat', ChatSchema);


