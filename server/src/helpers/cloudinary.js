// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");




// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const storage = new multer.memoryStorage();

// // async function imageUploadUtil(file) {
// //   const result = await cloudinary.uploader.upload(file, {
// //     resource_type: "auto",
// //   });

// //   return result;
// // }


// async function imageUploadUtil(file) {
//   const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
//   const result = await cloudinary.uploader.upload(base64, {
//     resource_type: "auto",
//   });
//   return result;
// }


// const upload = multer({ storage });

// module.exports = { upload, imageUploadUtil };



const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Load .env if not loaded globally
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use memory storage (stores in RAM as buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Uploads a file (buffer) to Cloudinary using base64 encoding
 * @param {Object} file - Multer file object (must include buffer and mimetype)
 */
async function imageUploadUtil(file) {
  if (!file || !file.buffer || !file.mimetype) {
    throw new Error("Invalid file upload. Missing file, buffer, or mimetype.");
  }

  // Convert buffer to base64
  const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

  // Upload to Cloudinary
  const result = await cloudinary.uploader.upload(base64, {
    resource_type: "auto",
  });

  return result; // result.secure_url will be your image URL
}

module.exports = { upload, imageUploadUtil };
