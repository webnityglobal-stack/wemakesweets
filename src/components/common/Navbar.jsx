import { authStorage } from "@/utils/authStorage";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import cartService from "@/services/cartService";
import { getCartItemCount } from "@/utils/cartEvents";

const navLinks = [
  { name: "Home", path: "/", color: "#572340" }, // Date Bite
  { name: "Products", path: "/products", color: "#3e5a2c" }, // Anjeer
  { name: "Our Story", path: "/our-story", color: "#603917" }, // Date Elaichi
  { name: "Benefits", path: "/benefits", color: "#164984" }, // Multi Seed
  { name: "Contact", path: "/contact", color: "#8b183d" }, // Rice Crispy
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(
    authStorage.isAuthenticated()
  );

  const fetchCartCount = useCallback(async () => {
    if (!authStorage.isAuthenticated()) {
      setCartCount(0);
      return;
    }
    try {
      const data = await cartService.getCart();
      if (data?.success && data?.cart) {
        setCartCount(getCartItemCount(data.cart));
      } else {
        setCartCount(0);
      }
    } catch {
      setCartCount(0);
    }
  }, []);

  useEffect(() => {
    fetchCartCount();

    const syncAuth = () => {
      const authed = authStorage.isAuthenticated();
      setIsLoggedIn(authed);
      if (authed) {
        fetchCartCount();
      } else {
        setCartCount(0);
      }
    };

    const handleCartUpdated = (e) => {
      const updatedCart = e.detail?.cart;
      if (updatedCart !== undefined && updatedCart !== null) {
        setCartCount(getCartItemCount(updatedCart));
      } else if (authStorage.isAuthenticated()) {
        fetchCartCount();
      } else {
        setCartCount(0);
      }
    };

    window.addEventListener("authUpdated", syncAuth);
    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("authUpdated", syncAuth);
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, [fetchCartCount]);


  return (
    <header className="w-full font-manrope bg-[#f9e4bf] px-4 md:px-8 lg:px-10 z-50">


      <nav className="h-20 relative flex items-center justify-between">
        <div className="absolute top-6 left-25 text-[11px] text-black"  >®</div>
        {/* Logo */}
        <Link to="/">
          <img
            src="/withoutBackground111.png"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex font-manrope font-medium items-center gap-5 xl:gap-7">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="px-5 py-2 font-manrope font-medium rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm"
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to={isLoggedIn ? "/my-account" : "/login"}>
            <User
              size={23}
              className="cursor-pointer transition hover:scale-110"
              color="#603917"
            />
          </Link>

          <Link to="/cart" aria-label="Shopping Cart">
            <div className="relative cursor-pointer">
              <ShoppingCart
                size={25}
                color="#3e5a2c"
                className="transition hover:scale-110"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#8b183d] px-1 font-manrope text-[10px] font-bold leading-none text-white shadow-sm ring-2 ring-[#f9e4bf]">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>








        {/* Mobile Icons + Menu */}
        <div className="flex lg:hidden items-center gap-5">

          {/* User */}

          <Link to={isLoggedIn ? "/my-account" : "/login"}>
            <User size={23} className={`cursor-pointer text-[#603917] transition-all duration-300 hover:text-[#3e5a2c] hover:scale-110 ${open ? "hidden" : "block"}`} />
          </Link>


          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping Cart"
            className={`relative cursor-pointer group ${open ? "hidden" : "block"}`}
          >
            <ShoppingCart
              size={24}
              className="text-[#3e5a2c] transition-all duration-300 group-hover:text-[#164984] group-hover:scale-110"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#8b183d] px-1 font-manrope text-[10px] font-bold leading-none text-white shadow-sm ring-2 ring-[#f9e4bf]">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

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
      {open && (
        <div className="lg:hidden rounded-3xl bg-[#f9e4bf] shadow-xl p-6 mb-4">
          {/* Mobile Navigation */}
          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 font-manrope font-medium text-sm rounded-full text-white transition"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  );
}

export default Navbar;