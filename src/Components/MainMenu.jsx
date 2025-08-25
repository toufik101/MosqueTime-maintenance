import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile menu

const MainMenu = () => {
      const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/allmosque", label: "All Mosque" },
  ];
    return (
        <>
                  {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">
            🕌 Mosque Times
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition ${
                    isActive ? "border-b-2 border-yellow-300 pb-1" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-green-700 px-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)} // close after click
                className={({ isActive }) =>
                  `block py-2 rounded hover:bg-green-800 transition ${
                    isActive ? "bg-green-900" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>
        </>
    );
};

export default MainMenu;