import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "service", label: "Service", path: "/services" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/95 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <img
            src="/images/newlogo.png"
            alt="Tech New Softwares Logo"
            className="h-16 w-auto inline-block"
          />
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium focus:outline-none focus:ring-0 border-b-2 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className={`${
            isScrolled ? "text-gray-700" : "text-black"
          } md:hidden p-2 rounded-md focus:outline-none focus:ring-0`}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 right-4 bg-white/95 rounded-lg p-2 shadow-md"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium focus:outline-none focus:ring-0 border-b-2 ${
                    isActive
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
