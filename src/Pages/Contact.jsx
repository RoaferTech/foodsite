import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          We consider all the drivers of change to give you the components you
          need to create a truly great experience.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 max-w-3xl w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full shadow-sm "
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full shadow-sm "
                placeholder="Enter email address"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full shadow-sm  "
              placeholder="Write a subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm "
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#AD343E] text-white font-semibold text-lg py-3 rounded-full transition duration-200"
          >
            Send
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-center md:text-left max-w-3xl w-full px-4">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">Call Us:</h3>
          <p className="text-[#AD343E] text-lg mt-2">+1-234-567-8900</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">Hours:</h3>
          <p className="text-gray-600 mt-2">
            Mon-Fri: 11am - 8pm <br />
            Sat-Sun: 9am - 10pm
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Our Location:</h3>
          <p className="text-gray-600 mt-2">
            123 Bridge Street <br />
            Nowhere Land, LA 12345 <br />
            United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
