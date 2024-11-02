import {Router} from 'express'
import { createTeacherPosition,
    getAllTeacherPositions} from '../controllers/teacherPositionController.js'
import upload from '../middleware/multer.js'



const router = new Router()

router.post('/create-position-teacher',upload.none(), createTeacherPosition);
router.get('/', getAllTeacherPositions)


export default router