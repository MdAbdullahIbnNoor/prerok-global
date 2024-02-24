import axios from "axios";

interface ImageData {
    // Define the type of your image data here.
    // For example, if it's a File object, you can use:
    // image: File;
    image: any; // Change 'any' to the actual type of your image data
}

export const imageUpload = async (imageData: ImageData) => {
    const formData = new FormData();
    formData.append("image", imageData.image);
    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.VITE_IMGBBAPIKEY}`,
        formData
    );
    return data;
};
