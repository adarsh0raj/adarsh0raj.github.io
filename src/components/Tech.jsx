import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-20 h-20' key={technology.name}>
          {technology.name == "Rust" || technology.name == "Three JS"  || technology.name == "AWS" ? (
            <div className='w-20 h-20 bg-white rounded-full flex justify-center items-center'>
              <img src={technology.icon} alt={technology.name} />
            </div>
          ) : (
            <img src={technology.icon} alt={technology.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");