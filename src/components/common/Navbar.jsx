import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  // { name: "Products", path: "/products" },
  { name: "Our Story", path: "/our-story" },
  { name: "Benefits", path: "/benefits" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-10 pt-5">
    <header className="w-full z-50 px-4 md:px-8 lg:px-10 py- bg-[#f9e4bf] ">
      <nav className=" px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/">
          <img
            src="/logo.webp"
            alt="Logo"
            className="h-12 w-auto object-contain border border-white rounded-[4px]"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-medium ">
          {navLinks.map((item) => (
            <li key={item.name}  className="text-[#f9e4bf]">
              <a
                href={item.path}
                className="hover:text-[#EFC46B] hover:bg-[#573b03]  px-5 py-2 rounded-[20px] transition bg-[#552b12]"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6 text-[#552b12]">
          <Search
            size={24}
            className="cursor-pointer hover:text-[#B8792C] "
          />

          <User
            size={24}
            className="cursor-pointer hover:text-[#B8792C]"
          />

          <div className="relative cursor-pointer">
            <ShoppingCart
              size={26}
              className="hover:text-[#B8792C]"
            />

            <span className="absolute -top-2 -right-2 bg-[#4A224F] text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-semibold">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-3 bg-[#f9e4bf] rounded-2xl shadow-md p-6">

          <ul className="space-y-5 text-center font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#B8792C]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-8 mt-6">
            <Search size={24} />
            <User size={24} />

            <div className="relative">
              <ShoppingCart size={26} />
              <span className="absolute -top-2 -right-2 bg-[#4A224F] text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;