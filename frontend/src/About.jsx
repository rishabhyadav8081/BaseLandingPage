import React from "react";

const About = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <i  id="About" className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12">
        helping our <span className="text-green-900">customers</span> find the best possible deals on properties
        </i>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              The transfer of real estate
            </h3>
            <p className="text-gray-600 mb-6">
            Base is your trusted partner in real estate, specializing in properties, flats, and villas. We focus on understanding your unique needs and delivering the best options that match your lifestyle and budget. With a commitment to quality, transparency, and customer satisfaction, Base ensures every client finds not just a property, but a place to call home. Whether you’re buying, selling, or investing, we make the journey seamless and rewarding.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-10">
              <a href="https://base-infra.com/contact" className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
              Contact Us
              </a>
             
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-2xl font-bold">10000+</p>
                <p className="text-gray-500">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-gray-500">Offices</p>
              </div>
              <div>
                <p className="text-2xl font-bold">850 Cr+</p>
                <p className="text-gray-500">Property Sold</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            <img
              src="https://etimg.etb2bimg.com/photo/123021415.cms" // replace with your image
              alt="About"
              className="rounded-2xl shadow-md w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
