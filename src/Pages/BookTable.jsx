import React, { useState } from "react";
import { bookTable } from "../services/apiServices";
const BookTable = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    person: "1 Person",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookTable(formData);
      setMessage(response.message);
      setError("");
      setFormData({
        date: "",
        time: "",
        name: "",
        phone: "",
        person: "1 Person",
      });
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Book A Table</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-lg">
          We consider all the drivers of change to give you the components you
          need to create a truly remarkable dining experience.
        </p>
      </div>
      {message && (
        <p className="text-green-600 font-semibold mb-4 capitalize">
          {message}
        </p>
      )}
      {error && (
        <p className="text-red-600 font-semibold mb-4 capitalize">{error}</p>
      )}
      <div className="bg-white shadow-lg rounded-xl px-8 py-10 md:px-12 w-full max-w-3xl relative mb-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full shadow-sm "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full shadow-sm "
                required
              />
            </div>
          </div>
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
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full shadow-sm "
                placeholder="xxx-xxx-xxxx"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Persons
            </label>
            <select
              name="person"
              value={formData.person}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full shadow-sm"
            >
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4 Persons</option>
              <option>5 Persons</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#AD343E] text-white font-semibold text-lg py-3 rounded-full hover:bg-red-700 transition duration-200"
          >
            Book A Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
