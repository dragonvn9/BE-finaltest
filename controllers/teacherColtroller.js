import teacherModel from '../models/teacher.js';
import { v2 as cloudinary } from 'cloudinary';

// Tạo một giáo viên mới
const createTeacher = async (req, res) => {
    try {

        const { code, name, level, teacherPositionId, status } = req.body;
        if (!req.files || !req.files.avatarImage || req.files.avatarImage.length === 0) {
            return res.status(400).send({ message: "No file uploaded." });
        }
        const avatarImage = req.files.avatarImage[0]; 

        // Upload lên Cloudinary
        const imageUpload = await cloudinary.uploader.upload(avatarImage.path, { resource_type: "image" });

        //console.log(code, name, level, teacherPositionId, status, imageUpload);

        if (!code || !name || !level || !teacherPositionId || status === undefined) {
            return res.status(400).send({ message: "All fields are required" });
        }


        const newTeacher = await teacherModel.create({
            avatarImage: imageUpload.secure_url, // Lưu URL hình ảnh
            code,
            name,
            level,
            teacherPositionId,
            status
        });

        return res.status(201).send({
            newTeacher,
            message: "Create new teacher successfully"
        });

    } catch (error) {
        console.error("Cloudinary Error:", error);
        res.status(500).send({error: error.message });
    }
};

// Lấy tất cả thông tin giáo viên
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await teacherModel.find().populate('teacherPositionId','name');
        if (!teachers || teachers.length === 0) {
            return res.status(404).send({
                message: "No information available"
            });
        }

        res.status(200).send({
            teachers,
            message: "Get all teachers successfully"
        });
    } catch (error) {
        res.status(500).send({ message: 'Vô đến đây', error: error.message });
    }
};

export {
    createTeacher,
    getAllTeachers
};
