import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  avatarImage: String, // Để đơn giản, lưu avatar dưới dạng URL
  code: Number,
  name: String,
  level: String,
  teacherPositionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TeacherPosition',
  },
  status: Boolean,
});


const teacherModel = mongoose.model('Teacher', teacherSchema)
export default teacherModel