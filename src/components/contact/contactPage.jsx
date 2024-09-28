"use client";
import React from "react";
import Input from "@/components/contact/input";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";


const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Form Data:", formValues);

    e.target.reset();
  };

  return (
    <div>
      <section className="relative py-20">
        <Image
          src="us.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-2xl lg:text-6xl font-bold">CONTACT WITH US</h1>
          <p className="mt-4 text-xl">
            For any information feel free to massage us
          </p>
        </div>
      </section>

      <section className="m-12 flex flex-col md:flex-row justify-center gap-5">
        <div className="w-full md:w-1/2 bg-purple-100 p-3 pt-10 rounded-lg shadow-md text-center space-y-10">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="text-xl ">
            <p>
              Have any questions or feedback about our Quiz App? We would love
              to hear from you! Contact us using the form below, and we will get
              back to you as soon as possible.
            </p>
          </div>
          <div className="mb-5">
          
            <p className="text-lg font-semibold">Massage us directly at</p>
            
            <a href="quizePulse@gmail.com" className="text-xl text-blue-500">
              
              quizePulse@gmail.com
            
              
            </a>
         
          </div>
          <div>
            <button className="bg-purple-900 text-white py-2 px-4 rounded">
            {/* <MessageCircle/> */}
            <AiFillMessage className="ml-2"/>
            chat
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-2 border-violet-100 rounded-lg w-full mx-auto px-8 py-6 space-y-5"
        >
          <h1 className="text-center text-3xl font-bold text-purple-900 ">
            Massage Us
          </h1>
          <Input label="Name" type="text" name="name" />
          <Input label="Email" type="text" name="email" />
          <div>
            <label htmlFor="message" className="block text-lg mb-2 font-bold">
              Message
            </label>
            <textarea
              className="w-full bg-purple-100 p-2 rounded font-medium"
              name="message"
              id="message"
              rows="5"
              placeholder="Enter your message here..."
            ></textarea>

            <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-500 w-64"
            >
              Submit
            </button>
            </div>

          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
