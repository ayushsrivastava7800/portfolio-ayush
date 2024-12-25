import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-lg mb-12">
          Have any questions or want to collaborate? Feel free to drop me a
          message below!
        </p>
        <form
          action="#"
          method="POST"
          className="bg-gray-100 py-16 px-4" 
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Subject */}
          <div>
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-purple-500 focus:border-purple-500"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-purple-500 focus:border-purple-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;