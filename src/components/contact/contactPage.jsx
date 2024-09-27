'use client'
import React from "react";
import Input from "@/components/contact/input";

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
    <section className="m-12">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-violet-300 rounded-lg max-w-2xl mx-auto px-8 py-6 space-y-5"
      >
        <h1 className="text-center text-3xl font-bold text-purple-900 ">Contact with us</h1>
        <Input label="Name" type="text" name="name" />
        <Input label="Email" type="text" name="email" />
        <div>
          <label htmlFor="message" className="block text-lg mb-2 font-bold">
            Message
          </label>
          <textarea
            className="w-full bg-purple-200 p-2 rounded font-medium"
            name="message"
            id="message"
            rows="5"
            placeholder="Enter your message here..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-purple-900 w-full text-white py-2 px-4 rounded hover:bg-purple-500"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
