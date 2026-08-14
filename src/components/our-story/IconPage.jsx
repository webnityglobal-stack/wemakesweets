// import {
//   MapPinned,
//   Users,
//   ShieldCheck,
//   BadgeCheck,
//   FlaskConical,
//   Leaf,
// } from "lucide-react";

import { SpinningText } from "../ui/spinning-text";

// const features = [
//   {
//     icon: MapPinned,
//     title: "Made in India",
//     color: "#8b183d",
//   },
//   {
//     icon: Users,
//     title: "10L+ Happy Customers",
//     color: "#164984",
//   },
//   {
//     icon: ShieldCheck,
//     title: "FSSAI Certified",
//     color: "#3e5a2c",
//   },
//   {
//     icon: BadgeCheck,
//     title: "6 Step Quality Check",
//     color: "#603917",
//   },
//   {
//     icon: FlaskConical,
//     title: "Lab Tested",
//     color: "#572340",
//   },
//   {
//     icon: Leaf,
//     title: "No Palm Oil",
//     color: "#8b183d",
//   },
// ];
// const IconPage = () => {
//   return (
// <section className="py-20 bg-[#fff8f3]">

// <div className="mx-auto max-w-7xl px-6">

// <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6">

// {features.map((item,index)=>{

// const Icon=item.icon;

// return(

// <div
// key={index}
// className="group flex flex-col items-center text-center"
// >

// <div
// className="flex h-24 w-24 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110"
// style={{
// borderColor:item.color,
// background:`${item.color}10`,
// }}
// >

// <Icon
// size={42}
// style={{
// color:item.color,
// }}
// />

// </div>

// <div
// className="mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-16"
// style={{
// background:item.color,
// }}
// ></div>

// <h3 className="mt-5 text-lg font-bold uppercase leading-7 text-[#2d2d2d]">

// {item.title}

// </h3>

// </div>

// )

// })}

// </div>

// </div>

// </section>
//   )
// }

// export default IconPage

const features = [
  {
    image: "/icons/MadeInIndia.webp",
    title: "Made in India",
  },
  {
    image: "/icons/customers.webp",
    title: "Happy Customers",
  },
  {
    image: "/icons/fssai.webp",
    title: "FSSAI Certified",
  },
  {
    image: "/icons/quality.webp",
    title: "Quality Check",
  },
  {
    image: "/icons/labTested.webp",
    title: "Lab Tested",
  },
  {
    image: "/icons/palmTree.webp", // agar hai
    title: "No Palm Oil",
  },
];

const IconPage = () => {
  return (
    // <section className="bg-[#fff8f3] py-20">
      <section className=" bg-gradient-to-b from-[#f9e4bf] via-[#f2ede1] to-[#f9e4bf] py-20 ">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-3 gap-y-12 md:grid-cols-3 lg:grid-cols-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >

              {/* Image */}
{/* 
              <div className="flex h-30 w-30 items-center justify-center transition duration-300 group-hover:scale-110">

  <SpinningText reverse className="text-2xl" duration={4} radius={5}>
   {item.title}
    </SpinningText>
       <img
                  src={item.image}
                  alt={item.title}
                  className="h-30 w-30  object-contain transition duration-300 group-hover:scale-110"
                />

              </div> */}


              <div className="relative flex h-32 w-32 items-center justify-center">

  
<img
  src={item.image}
  alt={item.title}
  className="
    absolute h-24 w-24 object-contain
    transition-all duration-500 ease-out
    animate-[floatPulse_3s_ease-in-out_infinite]
    group-hover:scale-125
    group-hover:-translate-y-4
    group-hover:rotate-6
    group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)]
    rounded-full
  "
/>

</div>

              {/* underline */}

              <div className="mt-4 h-1 w-10 rounded-full bg-[#8b183d] transition-all duration-300 group-hover:w-16"></div>

              {/* Title */}

              <h3 className="mt-5 text-lg font-bold uppercase leading-7 text-[#2d2d2d]">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IconPage;