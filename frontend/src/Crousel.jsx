import React from "react";
import Marquee from "react-fast-marquee";
import one from '../src/assets/1.png'
import oro from '../src/assets/4.png'
import dps from '../src/assets/5.png'
import Ternity from '../src/assets/ter.png'
import emaar from  '../src/assets/7.png'
import Jashn from  '../src/assets/jshnelevate.png'
import eldeco from '../src/assets/logo.png'
import pur from  '../src/assets/purvanchal.png'
import shal from  '../src/assets/shalimar.png'
import ris from  '../src/assets/rishita.png'
import pres from  '../src/assets/pres.png'
import om from  '../src/assets/om.webp'


// import { right } from "inquirer/lib/utils/readline";
const Crousel = () => {
  const logoList = [
    { name: "One World", image: one },
    { name: "oro", image: oro },
    { name: "dps ", image: dps },
    { name: "Ternity", image: Ternity },
    { name: "emaar", image: emaar },  
    { name: "Jashn", image: Jashn },  
    {image:eldeco},
    {image:pur},
    // {image:shal},
    {image:ris},
    {image:pres},
    {image:om},



  ];
  return (
    <div className=" overflow-hidden rounded-full">
      <div className="">
        {/* <h2 className="md:text-2xl text-lg font-semibold text-center text-green-900 ">
         Developers
        </h2> */}
        <p className="text-gray-500 text-md sm:text-lg text-center">
          {/* Search for one of the most prominent Developers */}
        </p>
      </div>
      <div className=" relative">
        <Marquee
          pauseOnHover={true}
          direction="right"
          gradient={false}
          speed={50}
          className="py-4"
        >
          {[...logoList, ].map((item, index) => (
            <div
              key={index}
              className="relative group  flex-shrink-0 h-20 w-30 sm:h-24 sm:w-34 md:h-28 md:w-38"
            >
              {/* <Link to={`/search/${item.name}`}> */}
                <div className="h-full w-full  relative px-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 ease-in-out "
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-[#0000002a] opacity-0 group-hover:opacity-100 transition duration-300 rounded-full">
                    <span className="text-white text-sm sm:text-base font-semibold">
                      {item.name}
                    </span>
                  </div> */}
                </div>
              {/* </Link> */}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Crousel;
