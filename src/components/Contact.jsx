import React from "react";

const Contact = () => {
  return (
    <>
      <h2 id="contact" className="text-4xl text-center font-bold py-9">CONTACT <span className="text-[#ffc400]">US</span></h2>
      <div  className="mb-9 max-w-md mx-auto  mt-10 p-6 bg-white rounded-md shadow-md">
        
        <form>
          <div className="mb-4  border-none">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="outline-none border-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className=" block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="outline-none border-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="outline-none border-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Subject of your message"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="outline-none border-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-2 py-2  bg-[#ffc400] text-white font-semibold text-xl rounded-full  focus:outline-none focus:bg-[#ffc400]"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
