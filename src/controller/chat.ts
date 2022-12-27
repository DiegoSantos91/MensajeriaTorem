import { Request, Response } from 'express';
import Chat from '../models/chat';

/**
 * Get all chats 
 */
export const getChats = async (_req: Request, res: Response) => {
    try {

        const chats = await Chat.find();

        res.status(201).json(chats);

    } catch (e) {

        res.status(500).json({
            msg: `error to get the chats.`
        });

    }

}

/**
 * Create chat 
 */

export const createChat = async (req: Request, res: Response) => {

    const { ...body } = req.body;

    const chatDB = await Chat.findOne({ customer: body.customer });

    if (chatDB) {
        return res.status(500).json({
            msg: `The chat with the customer : ${chatDB.customer}, already exists.`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body
    }
    try {

        const newChat = new Chat(data);

        // Guardar DB
        await newChat.save(
        );

        res.status(201).json(newChat);

    } catch (e) {
        return res.status(500).json({
            msg: `error to update the chat.`
        });
    }

}

/**
 * Update chat 
 */
export const updateChat = async (req: Request, res: Response) => {

    const { id } = req.params;
    //Aca dentro del data se encuentra el customer que se debe actualizar en 
    //el caso de ser necesario se puede sacar de la desestructuracion y actualizar aparte.
    const { ...data } = req.body;

    try {

        const updatedChat = await Chat.findByIdAndUpdate({ _id: id }, data);

        res.status(201).json(updatedChat);

    } catch (e) {

        res.status(500).json({
            msg: `error to update the chat.`
        });
    }
}

export const deleteChat = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {

        const chatDeleted = await Chat.findByIdAndUpdate(id);

        res.status(201).json(chatDeleted);

    } catch (e) {

        res.status(500).json({
            msg: `error deleting chat.`
        });

    }
}

