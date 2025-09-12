import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Dummy project data
const projects = [
  {
    id: 1,
    image: "https://res.cloudinary.com/do3l4cb8e/image/upload/v1756462812/project_gallery/oybdnkfxfjnjv4dhm4xb.jpg", // replace with your image path
    title: "ELDECO HANGING GARDEN",
    description:
      "3 BR Apartments Off Shaheed Path, Lucknow UP RERA Registration No.: UPRERAPRJ330066/04/2025",
    rating: 4,
    reviews: 4.83,
    link:"https://base-infra.com/listing/68b17ede2a22c8e92dad62b3"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/do3l4cb8e/image/upload/v1756805412/project_gallery/jhf2eovqyzt2weucjwha.jpg",
    title: "SHALIMAR MARBELLA",
    description:
      "Gomti Nagar Extension, Lucknow. Shalimar marbella RERA No. - UPRERAPRJ460592/05/2024",
    rating: 4,
    reviews: 4.83,
    link:"https://base-infra.com/listing/68b6b9253469f1dd008b84e1"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/do3l4cb8e/image/upload/v1756451697/project_gallery/hsdaikooap7im6zufnaf.webp",
    title: "RISHITA MANHATTAN",
    description:
      "Gomti Nagar Extension , Lucknow.  UP RERA Registration No.:UPRERAPRJ6682",
    rating: 4,
    reviews: 4.83,
    link:"https://base-infra.com/listing/68b153732a22c8e92dad0332"
  },
];

const Projects = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div id="Projects"  className="max-w-7xl mx-auto">
        {/* Section header */}
        {/* <p className="text-gray-500">Best Project of the Years</p> */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
             Projects
          </h2>
         <a href="https://base-infra.com/" className="text-sm font-extralight  hover:text-blue-500">view all ...</a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
            href={`${project.link}`}
              key={project.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) =>
                    i < project.rating ? (
                      <FaStar key={i} className="text-yellow-500" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                  <span className="text-gray-700 text-sm font-medium">
                    {project.reviews}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
