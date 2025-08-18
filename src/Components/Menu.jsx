import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Baitul Mukarram", path: "/" },
    { name: "MASJID AL-FALAH", path: "/alfalah" },
    { name: "MASJID AL-FATH", path: "/mosquefath" },
    { name: "IONA MASJID", path: "/IONAMASJID" },
    { name: "MASJIDUN-NUR", path: "/masjidunnur" },
    { name: "DARUL QURAN MASJID", path: "/darulquranmasjid" },
    {
      name: "Center for Dawah and Research Masjid (CDR) ",
      path: "/CenterForDawah",
    },
    { name: "Michigan Islamic Institute", path: "/MischiganIslamicInstitute" },
    { name: "Al Ihsaan Islamic Center", path: "/alihsaanislamiccenter" },
    { name: "DARUL ULOOM MICHIGAN", path: "/darululoommichigan" },
  ];

  return (
    <div className="relative text-left">
      {/* Dropdown Button */}
      <div className="flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-e-none rounded-md border border-green-400 shadow-sm px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none"
        >
          🕌 Select Mosque
          <svg
            className={`ml-2 -mr-1 h-5 w-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate("/addmosque")}
          className="w-50 px-4 py-2 bg-green-600 border border-s-0 border-green-400  text-white font-medium rounded-md rounded-s-none hover:bg-green-700 shadow-md"
        >
          ➕ Add Mosque
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50">
          <div className="py-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-800"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close on click
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {/* Add Mosque Button */}
    </div>
  );
};

export default Menu;
