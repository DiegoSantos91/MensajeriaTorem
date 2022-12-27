import { Router } from 'express';
import { check } from 'express-validator';
import { createChat, getChats,updateChat,deleteChat } from '../controller/chat';
import { chatExist } from '../helpers/db-validators';
import { validateProps } from '../middlewares/validateProps';
const router = Router();
/** 
 * Get all
 */
router.get('/', getChats);
/** 
 * Create 
 */
router.post('/', [
    validateProps
], createChat);
/** 
 * Update
 */
router.put('/:id', [
    check('id', 'The id is invalid.').isMongoId(),
    check('id').custom(chatExist),
    validateProps
], updateChat);
/** 
 * Delete
 */
router.delete('/:id', [

    check('id', 'The id is invalid.').isMongoId(),
    check('id').custom(chatExist),
    validateProps,

], deleteChat);

export default router;


