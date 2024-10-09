import { IoIosCloseCircle } from "react-icons/io";

import axios from 'axios';
import Image from "next/image";
import { useState } from "react";
import { toast } from 'sonner';
import uploading from '../../../public/assets/picture_uploadig.gif';
import { Input } from "../ui/input";

const ImageUpload = ({ setFormData, quizBanner }) => {
    const [imageUrl, setImageUrl] = useState(quizBanner);
    const [image, setImage] = useState()
    const [loading, setLoading] = useState(false);
    const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_COLUD_NAME;

    const handleReset = () => {
        setImageUrl()
    }

    const handleimageUpload = async (e) => {
        setLoading(true);
        const [imageData] = e.target.files;
        const formData = new FormData();
        formData.append('file', imageData);
        formData.append('upload_preset', 'quiz-pulse')
        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`, formData)
            setImageUrl(res.data.url)
            // setImage(res.data.url)
            setFormData((prev) => ({ ...prev, quizImage: res.data.url }))
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }

    return (
        <label htmlFor="imageUrl" className='relative'>
            {loading ? <div className='h-[150px] w-full rounded flex justify-center items-center'><Image src={uploading} width={100} height={100} alt='uploading' /></div> :
                imageUrl ?
                    <div className='relative'>
                        <Image className='h-[350px] w-full rounded border border-gray-400 object-cover' src={imageUrl} height={250} width={250} alt='imageUrl' />

                        <button onClick={handleReset} className='absolute top-2 right-2 rounded-full'>
                            <IoIosCloseCircle className='text-red-400 hover:text-red-500 duration-200 text-xl' />
                        </button>
                    </div> :
                    <div className='h-[350px] w-full rounded-md bg-[#f5f5f5] flex items-center cursor-pointer'>
                        <p className="text-center w-full font-semibold">Update Quiz Banner</p>
                    </div>
            }
            <Input accept="image/*" type="file" onChange={handleimageUpload} id="imageUrl" className="absolute top-1/2 opacity-0" />
        </label>
    );
};

export default ImageUpload;