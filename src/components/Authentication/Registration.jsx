'use client'

import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { useForm } from "react-hook-form";

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (



        
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-base-200 p-8 md:p-12 lg:p-16 rounded-xl shadow-lg w-full max-w-4xl">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-10">
                    <div className="w-full lg:w-1/2">

                    <div className=" w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                        <h1 className="flex justify-center lg:hidden  text-5xl lg:text-5xl font-bold text-primary mb-4">QuizPluse</h1>
                        <h2 className="flex justify-center lg:hidden  text-2xl lg:text-4xl font-semibold mb-4">Register Now!</h2>
                        <p className="flex lg:hidden  text-lg lg:text-xl mb-6">
                            Register now and start your quiz journey! Track your scores, compete with friends, and unlock exclusive quizzes to win exciting rewards!
                        </p>

                     
                     
                    </div>
                    <h2 className="lg:flex hidden text-2xl lg:text-4xl w-full  ml-16  font-semibold">Register Now!</h2>


                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 mt-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    name="fullName"
                                    {...register("fullName", { required: true })}
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-bordered w-full"
                                />
                                {errors.fullName && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    {...register("email", { required: true })}
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                />
                                {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    {...register("password", { required: true })}
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                />
                                {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    name="ConfirmPassword"
                                    {...register("ConfirmPassword", { required: true })}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full"
                                />
                                {errors.ConfirmPassword && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div className="form-control mt-4 md:col-span-2 flex justify-center">
                                <button type="submit" className="btn btn-primary w-full">Register</button>
                            </div>
                            
                        </form>

                        

                        <div className="space-y-2 mt-6">
                            <button className="btn w-full btn-outline lg:text-[18px] text-[15px]">
                                <FcGoogle /> Sign in with Google
                            </button>
                            {/* <button onClick={() => handleGithubLogin()} className="btn btn-outline text-[18px]">
                                <FaGithub /> Sign in with Github
                            </button> */}
                        </div>

                        <p className='text-lg mt-2'>
                            Already have an account? <a href="/login" className='text-blue-600'>Login</a>
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 text-center lg:text-left pt-12 lg:mt-14 ">
                        <h1 className="lg:flex hidden text-3xl lg:text-5xl font-bold text-primary mb-4">QuizPluse</h1>
                        {/* <h2 className="lg:flex hidden text-2xl lg:text-4xl font-semibold mb-4">Register Now!</h2> */}
                        <p className="lg:flex hidden text-lg lg:text-xl mb-6">
                            Register now and start your quiz journey! Track your scores, compete with friends, and unlock exclusive quizzes to win exciting rewards!
                        </p>
                        {/* <p className='text-lg'>
                            Already have an account? <a href="/login" className='text-blue-600'>Login</a>
                        </p> */}
                    </div>
                </div>
            </div>
            cls
        </div>
    );
};

export default Registration;
