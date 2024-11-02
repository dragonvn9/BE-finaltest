import mongoose from "mongoose";


const teacherPositionSchema = new mongoose.Schema({
  ordinalNumber: Number,
  codePosition: String,
  name: String,
  status: String,
  description: String
});

const teacherPositionModel = mongoose.model('TeacherPosition', teacherPositionSchema)
export default teacherPositionModel