import React, { useEffect, useState } from "react";
import { FaCar, FaMoneyBill, FaPhone } from "react-icons/fa";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const closePopup = () => {
    setShowPopup(false);
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const nameValid = formData.name.trim().length >= 2;
    const phoneValid = /^[6-9]\d{9}$/.test(formData.number);
    const emailValid =
      formData.email === "" ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

    if (!nameValid) return alert("Please enter a valid name (min 2 chars).");
    if (!phoneValid)
      return alert("Please enter a valid 10-digit Indian phone number.");
    if (!emailValid) return alert("Please enter a valid email address.");

    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx4ZO6TBQ8xTQmuh-Rx6nNSn2tuoXkQ-RDWQXwUSf68tB9wayRJZQY2eNTqQDo4l3WEGw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      alert("Thank you for your response!");
      setFormData({ name: "", email: "", number: "" }); 
      setShowPopup(false)
      // reset state
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white backdrop-blur-2xl w-[90%] max-w-md rounded-md shadow-lg relative">
        {/* <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600"
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
                placeholder="number"
                name="number"
                value={formData.number}
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
