import {Router} from 'express'
import {getButtons,getButton,postButton,putButton,deleteButton} from  '../controllers/buttons.controller.js'

const router = Router()

router.get('/',getButtons)
router.get('/',getButton)
router.post('/',postButton)
router.put('/',putButton)
router.delete('/',deleteButton)

export default router