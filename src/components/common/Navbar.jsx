import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/", color: "#572340" }, // Date Bite
  { name: "Products", path: "/products",  color: "#3e5a2c" }, // Anjeer
  { name: "Our Story", path: "/our-story", color: "#603917" }, // Date Elaichi
  { name: "Benefits", path: "/benefits", color: "#164984" }, // Multi Seed
  { name: "Contact", path: "/contact", color: "#8b183d" }, // Rice Crispy
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full font-manrope bg-[#f9e4bf] px-4 md:px-8 lg:px-10 z-50">
      
      
      <nav className="h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/">
          <img
            src="/withoutBackground111.png"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex font-cormorant font-semibold  items-center gap-5 xl:gap-7">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="px-5 py-2  font-cormorant  rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">

          {/* <Search
            size={23}
            className="cursor-pointer transition hover:scale-110"
            color="#572340"
          /> */}

          <User
            size={23}
            className="cursor-pointer transition hover:scale-110"
            color="#603917"
          />

          <div className="relative cursor-pointer">
            <ShoppingCart
              size={25}
              color="#3e5a2c"
              className="transition hover:scale-110"
            />

            <span
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-[10px] text-white flex items-center justify-center font-semibold"
              style={{ backgroundColor: "#8b183d" }}
            >
              0
            </span>
          </div>
        </div>







 {/* Mobile Icons + Menu */}
<div className="flex lg:hidden items-center gap-5">

  {/* User */}
<User
  size={23}
  className={`cursor-pointer text-[#603917] transition-all duration-300 hover:text-[#3e5a2c] hover:scale-110 ${
    open ? "hidden" : "block"
  }`}
/>

  {/* Cart */}
  <div className={`relative cursor-pointer group ${open ? "hidden" : "block"}`}>
    <ShoppingCart
      size={24}
      className="text-[#3e5a2c] transition-all duration-300 group-hover:text-[#164984] group-hover:scale-110"
    />

    <span
      className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-[10px] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#572340]"
      style={{ backgroundColor: "#8b183d" }}
    >
      0
    </span>
  </div>

  {/* Hamburger */}
  <button
    onClick={() => setOpen(!open)}
    className="text-[#572340]"
  >
    {open ? <X size={30} /> : <Menu size={30} />}
  </button>

</div>






      </nav>











      {/* Mobile Menu */}
    {/* Mobile Menu */}
{open && (
  <div className="lg:hidden rounded-3xl bg-[#f9e4bf] shadow-xl p-6 mb-4">

  

    {/* Mobile Navigation */}
    <ul className="space-y-4">
      {navLinks.map((item) => (
        <li key={item.name}>
          <a
            href={item.path}
            onClick={() => setOpen(false)}
            className="block text-center py-3 font-cormorant font-bold rounded-full text-white transition"
            style={{
              backgroundColor: item.color,
            }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>

  </div>
)}
    </header>
  );
}

export default Navbar;