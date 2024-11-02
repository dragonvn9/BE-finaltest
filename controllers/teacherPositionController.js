import teacherPositionModel from '../models/teacherPosition.js';
import multer from 'multer';

const upload = multer();

const createTeacherPosition = async (req, res) => {

    try {
        const {ordinalNumber, codePosition, name, status, description} = req.body;
        if (!ordinalNumber || !codePosition || !name || !status ||!description) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newPosition = await teacherPositionModel.create({
            ordinalNumber,
            codePosition,
            name,
            status,
            description
        })

        return res.status(200).send({
            newPosition,
            message: "create new position teacher sucessfully"
        })

    } catch (error) {
        return res.status(400).send({
            message: 'Vô đến đây',
            error: error.message
        });

    }

}

// lấy tất cả thông tin position teacher
const getAllTeacherPositions = async (req, res) => {
    try {
        const positions = await teacherPositionModel.find();
        if (!positions || positions.length === 0) {
            return res.status(404).send({
                message: "No information available"
            })
        }
        res.status(200).send({
            positions,
            message: "get all position teacher successfull"
        })
    } catch (error) {
        res.status(500).send(err.message);
    }
};

export {
    createTeacherPosition,
    getAllTeacherPositions
}