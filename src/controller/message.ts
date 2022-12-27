import { Request, Response } from 'express';
import Chat from '../models/chat';

/**
 * Get all chats 
 */
export const getMessages = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const chat = await Chat.findById({_id:id});


        res.status(201).json(chat?.message);

    } catch (e) {

        res.status(500).json({
            msg: `error to get the chat messages.`
        });

    }

}

/**
 * Create chat 
 */

export const createMessage = async (req: Request, res: Response) => {

    const { ...body } = req.body;
    const { id } = req.params;
   
    
    try {
        
        const chat = await Chat.findByIdAndUpdate({ _id:id },{ $push: { messages: body } });
       
        // Guardar DB
        // La realidad es que en este punto por el checkeo que se hace en el router no podria ser null 
        // por eso el ?
        await chat?.save(
        );

        res.status(201).json(chat);

    } catch (e) {
        return res.status(500).json({
            msg: `error to create the message in the chat.`
        });
    }

}
