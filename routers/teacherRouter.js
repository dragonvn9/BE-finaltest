import {Router} from 'express'
import {createTeacher,
    getAllTeachers} from '../controllers/teacherColtroller.js'
import upload from '../middleware/multer.js'


const router = new Router()

router.post('/creat-teacher', upload.fields([{ name: 'avatarImage', maxCount: 1 }]), createTeacher);
router.get('/', getAllTeachers );


export default router

