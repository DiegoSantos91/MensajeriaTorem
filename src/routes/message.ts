import { Router } from 'express';
import { check } from 'express-validator';
import { getMessages, createMessage } from '../controller/message';
import { chatExist } from '../helpers/db-validators';
import { validateProps } from '../middlewares/validateProps';
const router = Router();
/** 
 * Get all
 */
router.get('/:id',[
    check('id', 'The id is invalid.').isMongoId(),
    check('id').custom(chatExist),
    validateProps
], getMessages);
/** 
 * Create 
 */
router.post('/:id', [
    check('id', 'The id is invalid.').isMongoId(),
    check('id').custom(chatExist),
    validateProps
], createMessage);


export default router;
