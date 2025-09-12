import React, { useState } from "react";
// import houseImg from '../assets/house.png'; // Replace with your actual path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15f99fb4-f8ee-4c90-b6a8-d025bc57f745");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    console.log("Form submitted:", data.data);
    setFormData({
      name: "",
      email: "",
      Number: "",
      message: "",
    });
    setResult("");
  };
  return (
    <section id="Contact" className="  bg-gray-50 flex  p-5">
      <div className="w-full grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-lg ">
        {/* Left Side - Info */}
        <div className="p-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Great properties deserve great deals. At Base, we bring yours to life — together.
          </h2>
          <hr className="w-12 border-t-2 border-gray-800 mb-6" />

          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Get in Touch
          </h3>
          <p className="font-semibold text-gray-800">
            coorporate chamber 2, 6th floor, vibhutikhand, Lucknow <br />
            +91 9919944401
          </p>

          <p className="mt-4 font-bold underline">
            <a href="mailto:mail@example.com">baseinfradev@gmail.com</a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-6 pl-5">
            Reach out today and let us offer you the best deal possible.
          </h3>
          <form onSubmit={onSubmit} className="space-y-4 p-5">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              required
            />
            <input
              type="tel"
              name="Number"
              placeholder="Phone Number"
              value={formData.Number}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              pattern="^[6-9]\d{9}$"
              maxLength={10}
              inputMode="numeric"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              Send Message
            </button>
          </form>
          <span className="ml-5">{result}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
