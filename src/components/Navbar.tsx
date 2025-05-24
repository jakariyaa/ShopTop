import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useEffect, useState } from "react";

export function Navbar() {
  const { isOpen, openCart, cartQuantity } = useShoppingCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/store", label: "Store" },
  ];

  return (
    <nav
      className={`backdrop-blur shadow-md w-full fixed top-0 left-0 z-50 transition-colors ${
        scrolled || isOpen ? "bg-white/85" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 relative">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-2xl font-extrabold text-blue-700 tracking-tight hover:text-blue-900 transition"
          >
            ShopTop
          </Link>
        </div>
        <ul className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-lg font-medium px-2 py-1 transition ${
                  location.pathname === link.to
                    ? "text-blue-600 border-2 rounded-2xl border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          <button
            className="relative flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingCart size={22} />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-0.5 font-bold shadow">
                {cartQuantity <= 99 ? cartQuantity : "99+"}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
