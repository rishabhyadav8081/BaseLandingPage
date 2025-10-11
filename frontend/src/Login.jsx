import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import img from "./assets/home.png";
import banner from "./assets/banner.png";
import Crousel from "./Crousel";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    lookingFor: [], // ✅ new field for checkbox selections
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        // add to array
        return { ...prev, lookingFor: [...prev.lookingFor, value] };
      } else {
        // remove from array
        return {
          ...prev,
          lookingFor: prev.lookingFor.filter((item) => item !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submission ", formData);

    const nameValid = formData.name.trim().length >= 2;
    const phoneValid = /^[6-9]\d{9}$/.test(formData.phone);
    const messageValid = formData.message.trim().length >= 2;
    if (!nameValid) return alert("Please enter a valid name (min 2 chars).");
    if (!phoneValid)
      return alert("Please enter a valid 10-digit Indian phone number.");
    if (!messageValid) return alert("Please enter a valid message.");

    setLoading(true);

    const payload = {
      name: formData.name,
      number: formData.phone,
      message: formData.message,
      lookingFor: formData.lookingFor.join(", "), // ✅ send as comma-separated string
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbzuOiH4Gi_b6A2zaEU2FGROPHGJQQQBFQbyy1qsrjpQj2JGJTKj0-TiYXF-sttxoxKsTQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    alert("✅ Thank you for your response!");
    setFormData({ name: "", message: "", phone: "", lookingFor: [] });
    setLoading(false);
    window.location.href = "https://base-infra.com/";
  };

  return (
    <div className="h-screen flex gap-0 md:gap-0 flex-col lg:flex-row">
      {/* <div className="h-2/5 lg:h-full lg:w-3/5 ">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div> */}
      <div className="h-2/5 lg:h-full lg:w-3/5">
      <iframe
  src="https://www.youtube.com/embed/s18PgcJoAoE?autoplay=1&mute=1"
  title="Promotional Video"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="w-full h-full object-cover"
></iframe>

</div>

      <div className="h-full lg:h-full lg:w-2/5 flex justify-center flex-wrap">
        <div className="lg:w-2/2 flex flex-col items-center justify-center w-full px-3">
          <div className="ml-6">
            <img src={banner} alt="" />
          </div>

          <div className="mb-10 w-full h-0 flex items-center justify-center">
            <Crousel />
          </div>

          <h2 className="text-sm sm:text-2xl font-semibold text-center mb-2">
            Your Property Journey Starts Here
          </h2>
          <p className="text-center text-gray-600 mb-6 flex justify-center items-center gap-2">
            <IoMdCall />
            <a
              href="tel:9919944401"
              className="text-green-900 font-semibold hover:underline"
            >
              99199 44401
            </a>
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                maxLength={10}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Where Are You From 
              </label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your home town"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>

            {/* ✅ Looking For Checkboxes */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Looking For (Select one or more)
              </label>
              <div className="flex flex-wrap gap-3">
                {[ "Flats", "Plots", "Villas", "Commercials"].map(
                  (option) => (
                    <label key={option} className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        value={option}
                        checked={formData.lookingFor.includes(option)}
                        onChange={handleCheckboxChange}
                      />
                      <span>{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition mt-3 mb-10"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
