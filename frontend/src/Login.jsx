// gogogle sheet
import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import img from "./assets/home.png";
const Login = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValid = formData.name.trim().length >= 2;
    const phoneValid = /^[6-9]\d{9}$/.test(formData.phone);
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
      number: formData.phone,
    };

    // 🚀 Fire and forget
    fetch(
      "https://script.google.com/macros/s/AKfycbwV4e7lcgw0HQGGuLMcTk86uT0t4_aOoi7UchODBWZAkGlWlPwzvANj4Wuhdh6jV5dR-A/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // ✅ Instant feedback to user
    alert("✅ Thank you for your response!");
    setFormData({ name: "", email: "", phone: "" });
    setLoading(false);
    window.location.href = "https://base-infra.com/";
  };

  return (
 <div className="h-screen flex gap-20 md:gap-0 flex-col lg:flex-row">
  <div className="h-3/5 lg:h-full lg:w-3/5">
    <img src={img} alt="" className="w-full h-full object-cover"  />
  </div>
  <div className="h-2/5 lg:h-full lg:w-2/5 flex justify-center">
  <div className="lg:w-2/2 flex flex-col items-center justify-center  shadow-lg pb-9 w-full p-3">
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

      <form
        onSubmit={handleSubmit}
        className=" max-w-md mx-auto w-full"
      >
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

        <div>
          <label className="block text-sm font-medium mb-1">Email-ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
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
