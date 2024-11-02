import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import teacherRouter from './routers/teacherRouter.js'
import teacherPositionRouter from './routers/teacherPositionRouter.js'
import connectCloudinary from './config/cloudinary.js';
import dotenv from 'dotenv'; // Import dotenv
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
connectCloudinary();

mongoose.connect('mongodb+srv://vndragon:thai900U@cluster0.ybccu.mongodb.net/finaltest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.use(express.json()); 

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// định nghĩa router
app.use('/api/teacher', teacherRouter);
app.use('/api/teacherposition', teacherPositionRouter);


app.listen(8080, () => {
    console.log('Server is running!');
});
