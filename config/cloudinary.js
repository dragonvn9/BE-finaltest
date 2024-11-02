import { v2 as cloudinary } from 'cloudinary';

// Hàm kết nối với Cloudinary
const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY
    });
    console.log('Connected to Cloudinary successfully');
  } catch (error) {
    console.error('Error connecting to Cloudinary:', error);
  }
};

export default connectCloudinary; 