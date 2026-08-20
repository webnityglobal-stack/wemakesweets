import React from "react";
import { sliderImages } from "./sliderData";

const HeroContent = () => {
  return (
    <>

 {/* Desktop */}
 
{/* <div className="hidden lg:flex w-full  bg-[#f5ebda] ">
  {sliderImages.map((item, index) => (
    <div
      key={item.id}
      className={`flex-1 min-w-0 overflow-hidden reveal reveal-${index + 1}`}
    >
      <img
        src={item.image}
        alt={item.title}
        draggable={false}
        className="w-full h-[220px] object-cover object-center transition-transform duration-500 hover:scale-105"
      />
    </div>
  ))}
</div> */}

{/* Desktop */}

<div className="hidden lg:flex w-full bg-[#f5ebda] ">
  {sliderImages.map((item, index) => (
    <div
      key={item.id}
      className={`flex-1 min-w-0 overflow-hidden reveal reveal-${index + 1}`}
       style={{
        backgroundColor: item.color,
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        draggable={false}
        className="
          w-full
          h-[220px]
          object-contain
          object-center
          transition-transform
          duration-500
          scale-105
        "
      />
    </div>
  ))}
</div>



      {/* Mobile */}
      <div className="lg:hidden overflow-hidden w-full pt-4 bg-[#f5ebda]">
        <div className="flex animate-slider w-max">
          {[...sliderImages, ...sliderImages].map((item, index) => (
            <div
              key={index}
              className="w-[160px] flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[140px] object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroContent;