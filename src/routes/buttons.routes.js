import {Router} from 'express'
import {getButtons,getButton,postButton,putButton,deleteButton} from  '../controllers/buttons.controller.js'

const router = Router()

router.get('/',getButtons)
router.get('/:id',getButton)
router.post('/',postButton)
router.put('/:id',putButton)
router.delete('/:id',deleteButton)

export default router