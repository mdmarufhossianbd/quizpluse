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

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    // Function to validate and handle password change
    const handlePasswordChange = (e) => {
        e.preventDefault();

        // Clear previous errors
        setError("");

        // Basic validation
        if (!currentPassword) {
            setError("Current password is required.");
            return;
        }

        if (currentPassword === newPassword) {
            setError("New password cannot be the same as the current password.");
            return;
        }

        if (newPassword.length < 6) {
            setError("New password should be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        // password change logic here or API call
        console.log(currentPassword, newPassword, confirmPassword);



        // Clear form after successful password change
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };


    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-[#5C0096] hover:bg-[#500081] px-4 text-white hover:text-white flex items-center justify-center gap-2 rounded-full transition-colors w-full md:w-auto"
                    >
                        <IconPencil stroke={2} /> Change Password
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-4/5 md:w-3/5 rounded-xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center mb-2">Change your Password</AlertDialogTitle>
                        <hr className="border-[#5c00969f]" />
                        <AlertDialogDescription>
                            <form onSubmit={handlePasswordChange}>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-2 items-center gap-4">
                                        <Label htmlFor="currentPassword" className="text-black">
                                            Current Password
                                        </Label>
                                        <Input
                                            id="currentPassword"
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 items-center gap-4">
                                        <Label htmlFor="newPassword" className="text-black">
                                            New Password
                                        </Label>
                                        <Input
                                            id="newPassword"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 items-center gap-4">
                                        <Label htmlFor="confirmPassword" className="text-black">
                                            Confirm New Password
                                        </Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                {error && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}

                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="bg-none hover:bg-[#500081] border-2 border-[#5C0096] px-8 py-4 text-[#5C0096] hover:text-white rounded-full">Cancel</AlertDialogCancel>

                        <AlertDialogAction onClick={handlePasswordChange} className="bg-[#5C0096] hover:bg-[#500081] px-4 py-2 text-white hover:text-white rounded-full">
                            Change Password
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ChangePassword;
