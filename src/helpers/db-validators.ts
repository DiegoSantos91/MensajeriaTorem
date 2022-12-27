import mongoose from 'mongoose';
import chat from '../models/chat';

/**
 * Chats validator with id 
 */
export const chatExist = async( id:mongoose.Types.ObjectId ) => {

    // Verificar si el correo existe
    const chatExist = await chat.findById(id);
    if ( !chatExist ) {
        throw new Error(`The chat with id: ${id}, does not exist`);
    }
}