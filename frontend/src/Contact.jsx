import React, { useState } from 'react';
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
      
          formData.append("access_key", "b7df9567-da80-4ab5-bbfa-5f3405edd3f0");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
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
            message: "" 
          });
          setResult("")
    
        };
  return (
    // <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      
    //   {/* Left Section */}
    //   <div className="flex-1">
    //     <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe Our Newsletter</h2>
    //     <p className="text-gray-600 mb-6">
    //       Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque 
    //       sollicitudin. Egestas faucibus lacus diam in senectus consectetur. 
    //       Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
    //     </p>

    //     <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
    //       <input
    //         type="email"
    //         placeholder="Enter your email"
    //         className="flex-1 p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    //       />
    //       <button
    //         type="submit"
    //         className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition"
    //       >
    //         Get a Quote
    //       </button>
    //     </form>
    //   </div>

    //   {/* Right Section */}
    //   <div className="flex-1 max-w-md">
    //     <img src='https://www.bhg.com/thmb/cFScTHszlpo9Yr2FJ7vdcouo3Hs=/1244x0/filters:no_upscale():strip_icc()/white-wooden-house-garage-yellow-door-bf4f6e3a-8cdb8289cd7f49ef88879b8d550e1e60.jpg' alt="Modern House" className="w-full h-auto rounded-lg" />
    //   </div>
    // </div>
    <section id="Contact" className="  bg-gray-50 flex  p-5">
      <div className="w-full grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-lg ">
        
        {/* Left Side - Info */}
        <div className="p-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Great stories deserve great edits. Let’s bring
          yours to life — together.
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
            <a href="mailto:mail@example.com">aloky3143@example.com</a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-6 pl-5">
            Send Me a Message
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
              type="text"
              name="Number"
              placeholder="Number"
              value={formData.Number}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
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
