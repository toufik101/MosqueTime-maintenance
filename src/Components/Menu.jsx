import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Mosque Fath", path: "/" },
    { name: "Mosque B", path: "/mosqueB" },
    { name: "Mosque C", path: "/mosqueC" },
  ];
  return (
    <div className="relative  text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-green-400 shadow-sm px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none"
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
    </div>
  );
};

export default Menu;






// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Mosque Fath", path: "/mosque-fath" },
//     { name: "Mosque B", path: "/mosque-b" },
//     { name: "Mosque C", path: "/mosque-c" },
//   ];

//   return (
//     <nav className="bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="text-2xl font-bold">🕌 Mosque Menu</div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `px-3 py-2 rounded-lg font-medium transition duration-200 ${
//                     isActive
//                       ? "bg-white text-green-800 shadow"
//                       : "hover:bg-green-700"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-green-700 px-4 pb-4 space-y-2">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-lg font-medium transition duration-200 ${
//                   isActive
//                     ? "bg-white text-green-800 shadow"
//                     : "hover:bg-green-600"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Menu;
