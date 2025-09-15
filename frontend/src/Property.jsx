import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
const Property = () => {
  const steps = [
    {
      icon: <FaRegBuilding className="w-12 h-12 text-orange-500" />,
      src:"https://www.jkcement.com/wp-content/uploads/2023/12/residential-building-with-windows-balconies-1024x683-jpg.webp",
      title: "Flats",
      description:
        "Base offers premium flats tailored to your lifestyle, providing the best options and personalized service to ensure comfort, convenience, and a home you’ll love.",
    },
    {
      icon: <FaHouseChimney className="w-12 h-12 text-green-500" />,
      title: "Villas",
      description:
        "At Base, we specialize in exquisite villas, offering personalized solutions and the best options to meet our customers’ needs, ensuring comfort, luxury, and a place to call home.",
    },
    {
      icon: <FaRegSquareFull className="w-12 h-12 text-indigo-500" />,
      title: "Plots",
      description:
        "Base specializes in prime plots, offering the best opportunities to build your dream home. We provide personalized guidance to help our customers invest wisely and confidently.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* <p className="text-gray-500 mb-2">Three steps. Three minutes.</p> */}
        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-12">
          What We Bring to You
        </h2>
        <div className="flex justify-around text-center">

          {steps.map((step, index) => (
            <a
              href={`https://base-infra.com/search/${step.title}`}
              key={index}
              className="flex items-center gap-4"
            >
              {/* Mobile View (icon + title in one line, no description) */}
              <div className="sm:hidden items-center gap-2">
                <span>{step.icon}</span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>

              {/* Tablet & Larger (column layout with description) */}
              <div className="hidden sm:flex flex-col items-center gap-4">
                <span>{step.icon}</span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;
