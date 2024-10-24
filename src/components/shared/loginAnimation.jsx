"use client";

import React from 'react';
import loginAnimation from '../../../public/assets/login.json'; // Lottie JSON animation
import { Player } from "@lottiefiles/react-lottie-player"; // Use Player from lottie-react

const LoginAnimation = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src={loginAnimation}
                style={{ height: 'auto', width: "auto" }}
            />
        </div>
    );
};

export default LoginAnimation;