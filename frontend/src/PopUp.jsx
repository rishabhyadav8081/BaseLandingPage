import React, { useEffect, useState } from "react";
import { FaCar, FaMoneyBill, FaPhone } from "react-icons/fa";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true); // controls popup visibility
  const [loading, setLoading] = useState(false); // loading state for submit button

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Handles input changes
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  // Handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // logs form data

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowPopup(false); // closes popup after submit
    }, 1500);
  };

  if (!showPopup) return null; // hide popup if closed

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white backdrop-blur-2xl w-[90%] max-w-md rounded-md shadow-lg relative">
        {/* Close Button */}
        {/* <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          &times;
        </button> */}

        {/* Header */}
        <div className="flex items-center divide-x-2 divide-green-800 p-4 border-b">
          <h1 className="font-norwester text-[#094723] text-4xl uppercase p-2">
            Base
          </h1>
          <div className="sm:text-sm md:text-md text-xs pl-2">
            Building Assets <br /> Simplifying Experiences
          </div>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col sm:flex-row">
          {/* Left Info */}
          <div className="w-full sm:w-1/3 hidden sm:flex flex-col justify-around border-r pr-4 text-green-700 text-xs">
            <div className="text-center text-lg font-semibold">We Promise</div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg" /> Instant Call Back
            </div>
            <div className="flex items-center gap-2">
              <FaCar className="text-lg" /> Free Site Visit
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBill className="text-lg" /> Unmatched Price
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-2/3 pl-0 sm:pl-4 space-y-3 text-sm mt-4 sm:mt-0"
          >
            <h3 className="font-semibold text-green-800">
              Register Here And Avail The{" "}
              <span className="text-green-600">Best Offers!!</span>
            </h3>

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              required
              className="w-full border border-green-900 p-2 rounded focus:border-green-900 focus:outline-none focus:ring-0"
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
              className="w-full border p-2 rounded focus:border-green-900 focus:outline-none focus:ring-0"
            />
            <div className="flex">
              <select className="border rounded-l p-2 bg-gray-100 focus:border-green-900 focus:outline-none focus:ring-0">
                <option>India (+91)</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={changeHandler}
                required
                maxLength={10}
                className="border p-2 w-full rounded-r focus:border-green-900 focus:outline-none focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "LogIn"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-green-800 text-white flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-b-md mt-4">
          <FaPhone />
          <a href="tel:+919919944401" className="hover:underline">
            +91 9919944401
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
