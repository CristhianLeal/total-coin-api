import {Router} from 'express'
import {getButtons,postButton,putButton,deleteButton} from  '../controllers/buttons.controller.js'

const router = Router()

router.get('/',getButtons)
router.post('/',postButton)
router.put('/:id',putButton)
router.delete('/:id',deleteButton)

export default router