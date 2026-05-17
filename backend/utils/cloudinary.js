import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const uploadOnCloudinary = async (file) => {

    try {

        const result = await cloudinary.uploader.upload(
            file.replace(/\\/g, "/"),
            {
                resource_type: "image",
            }
        );

        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }

        return result.secure_url;

    } catch (error) {

        console.log("FULL CLOUDINARY ERROR:", error);

        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
    }
};

export default uploadOnCloudinary;