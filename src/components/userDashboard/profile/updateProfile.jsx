import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconPencil } from "@tabler/icons-react";
import ImageUpload from "@/components/shared/imageUpload";

const UpdateProfile = ({ currentUser }) => {
    // State for profile fields
    const [name, setName] = useState(currentUser?.name || "");
    const [profilePhoto, setProfilePhoto] = useState(currentUser?.image || "");
    const [error, setError] = useState("");

    // Function to handle profile update
    const handleProfileUpdate = (e) => {
        e.preventDefault();

        if (!name || !profilePhoto) {
            setError("Name and Profile Photo are required.");
            return;
        }

        // Mock API call or actual API call to update profile
        const updatedProfile = {
            name,
            image: profilePhoto,
        };

        console.log("Updated Profile:", updatedProfile);

        // Clear error after successful update
        setError("");
    };

    // Function to handle profile photo change (URL or File Upload)
    const handleProfilePhotoChange = (e) => {
        // If you want to upload image via URL
        setProfilePhoto(e.target.value);

        // Or if using file input for image upload, handle file selection
        // const file = e.target.files[0];
        // Upload the file to a server (e.g., Cloudinary) and get the URL
        // setProfilePhoto(uploadedImageUrl);
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-[#5C0096] hover:bg-[#500081] px-4 py-2 text-white hover:text-white flex items-center justify-center gap-2 rounded-full transition-colors w-full md:w-auto"
                    >
                        <IconPencil stroke={2} /> Update Profile
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-4/5 md:w-3/5 rounded-xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Update your Profile</AlertDialogTitle>
                        <AlertDialogDescription>
                            <form onSubmit={handleProfileUpdate}>
                                <div className="">
                                    {/* Name Field */}
                                    <div className="flex flex-row mb-2 items-center gap-2">
                                        <Label htmlFor="name" className="w-1/3 text-black">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-2/3"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Profile Photo Field (URL input) */}

                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Label htmlFor="photo" className="w-1/3 text-black">
                                            Update Photo
                                        </Label>
                                        <div className="w-2/3">
                                            <ImageUpload boxHeight="200px" id="photo" setFormData={setProfilePhoto} />
                                        </div>
                                    </div>

                                    {/* Optional: Profile Photo preview */}
                                    {profilePhoto && (
                                        <div className="">
                                            <img
                                                src={profilePhoto}
                                                alt="Profile Preview"
                                                className="h-24 w-24 rounded-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}
                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="bg-none hover:bg-[#500081] border-2 border-[#5C0096] px-8 py-4 text-[#5C0096] hover:text-white rounded-full">
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={handleProfileUpdate}
                            className="bg-[#5C0096] hover:bg-[#500081] px-4 py-2 text-white rounded-full"
                        >
                            Update Profile
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default UpdateProfile;
