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
    image: "/icons/labTested.webp",
    title: "Lab Tested",
  },
  
  {
    image: "/icons/quality.webp",
    title: "Quality Check",
  },
 {
    image: "/icons/fssai.webp",
    title: "FSSAI Certified",
  },
  {
    image: "/icons/palmTree.webp", // agar hai
    title: "No Palm Oil",
  },
];

const IconPage = () => {
  return (
    // <section className="bg-[#fff8f3] py-20">
      <section className=" bg-[#f9e4bf] py-10 ">
        
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-3 gap-y-12 md:grid-cols-3 lg:grid-cols-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >

              {/* Image */}

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

              <h3 className="mt-5 text-[12px] md:text-lg font-bold uppercase leading-7 text-[#2d2d2d]">
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