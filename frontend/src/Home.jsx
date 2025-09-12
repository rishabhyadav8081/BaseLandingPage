import React, { useState } from "react";
// import alk from "../assets/alk.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About " },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact Us" },
  ];

  return (
    <>
    <div className=" rounded-4xl  h-[70px] sm:h-[100px] w-full ">
      {/* Background */}
      {/* <img className="h-full w-full object-cover" src='' alt="Background" /> */}
      <div className="inset-0 bg-black/40 ">
        {/* Navbar */}
        <nav className="flex items-center p-4 md:p-10 text-white bg-[rgba(40,101,49,0.89)]">
          {/* <img src="" className="font-bold text-lg"/> */}
          <div className="flex justify-center divide-x-2  divide-green-900 gap-2 items-center">
              <div>
                <h1 className="font-norwester text-2xl sm:text-5xl px-3 text-white">BASE</h1>
              </div>
              <div className="sm:text-sm md:text-md text-[10px] text-white">
                  Building Assets <br /> Simplifying Experiences
              </div>
            </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto text-3xl"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 ml-auto text-lg items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`hover:text-gray-300 ${
                  item.label === "Get In Touch"
                    ? "border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-[68px] left-0 w-full bg-white text-black flex flex-col items-start p-6 space-y-4 z-20 shadow-md md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium w-full border-b pb-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
     
    </div>
    <div className="">
    <section className="w-full bg-gradient-to-r from-blue-100 via-gray-100 to-orange-100 rounded-2xl p-6 md:p-12 lg:p-16">
  <div className="  flex items-center justify-center  flex-col lg:flex-row  lg:items-start  gap-10">
    
    {/* Left content */}
    <div id="Home" className="flex-1 sm:mt-20 text-centerlg:text-left">
      <p className="text-sm sm:text-base mb-2 text-green-900">
        Welcome to BASE Infra
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-green-900">
        Searching Property Search BASE
      </h1>
      <br />
      <span className="text-3xl font-light pb-50">Property Sahi Dilayenge Yehi</span>
      <div className="mt-5"> call us now: &nbsp;&nbsp; <a href="tel:+919919944401" className="hover:underline">
            +91 9919944401
          </a></div>
    

      {/* Image in between - visible only on mobile/tablet */}
      <div className="my-6 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern House"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <p className="text-gray-600 max-w-md mx-auto lg:mx-0 m-8">
        {/* Base is your trusted partner in real estate, specializing in properties,
        flats, and villas. We focus on understanding your unique needs and
        delivering the best options that match your lifestyle and budget. With
        a commitment to quality, transparency, and customer satisfaction, Base
        ensures every client finds not just a property, but a place to call
        home. Whether you’re buying, selling, or investing, we make the journey
        seamless and rewarding. */}
      </p>
    </div>

    {/* Right image - visible only on laptop/desktop */}
    <div className="flex-1 hidden lg:block">
      <img
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Modern House"
        className="w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

      </div>
</>
  );
};

export default Home;
