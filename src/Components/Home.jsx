import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link,NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import IONA from "../assets/Mosque-Img/IONAMASJID.webp";
import BaitulMukarram from "../assets/Mosque-Img/Baitul-Mukarram.webp";
import AlFalah from "../assets/Mosque-Img/AL-FALAH.jpeg";
import AlFath from "../assets/Mosque-Img/Al-Fath.jpg";
import masjidunNur from "../assets/Mosque-Img/MASJIDUN-NUR.webp";
import darulQuran from "../assets/Mosque-Img/DarulQuranMasjid.webp";
import dawaAndResearch from "../assets/Mosque-Img/CenterForDawah.jpg";
import michigan from "../assets/Mosque-Img/DARUL ULOOM MICHIGAN.webp";
import AlIhsaan from "../assets/Mosque-Img/AL IHSAAN ISLAMIC CENTER.webp";
import DarulUloomMichigan from "../assets/Mosque-Img/DARUL ULOOM MICHIGAN.webp";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  let Info = [
    { Name: "IONA Masjid", MosqueImg: IONA, link: "/allmosque/IONAMASJID" },
    { Name: "Baitul Mukarram", MosqueImg: BaitulMukarram, link: "/allmosque" },
    { Name: "Masjid Al-falah", MosqueImg: AlFalah, link: "/allmosque/alfalah" },
    {
      Name: "Masjid Al-Fath",
      MosqueImg: AlFath,
      link: "/allmosque/mosquefath",
    },
    {
      Name: "Masjidun Nur",
      MosqueImg: masjidunNur,
      link: "/allmosque/masjidunnur",
    },
    {
      Name: "Darul Quran Masjid",
      MosqueImg: darulQuran,
      link: "/allmosque/darulquranmasjid",
    },
    {
      Name: "Center for Dawah And Research",
      MosqueImg: dawaAndResearch,
      link: "/allmosque/CenterForDawah",
    },
    {
      Name: "Michigan Islamic Institute",
      MosqueImg: michigan,
      link: "/allmosque/MischiganIslamicInstitute",
    },
    {
      Name: "Al Ihsaan Islamic Center",
      MosqueImg: AlIhsaan,
      link: "/allmosque/alihsaanislamiccenter",
    },
    {
      Name: "Darul Uloom Michigan",
      MosqueImg: DarulUloomMichigan,
      link: "/allmosque/darululoommichigan",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex md:text-xl text-2xl justify-center w-full rounded-e-none rounded-md border border-yellow-400 shadow-sm px-4 py-2 bg-black text-white font-medium hover:bg-gray-900 focus:outline-none"
        >
          🕌 Select Mosque
          <svg
            className={`ml-2 -mr-1 h-9 w-9 transition-transform duration-200 ${
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
      </div>

            {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50">
          <div className="py-1">
            {Info.map((item) => (
              <NavLink
                key={item.Name}
                to={item.link}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-800"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close on click
              >
                {item.Name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {/* Hero Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[90vh]"
      >
        {Info.map((value, ind) => (
          <SwiperSlide key={ind}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${value.MosqueImg})` }}
            >
              <Link to={value.link} className="flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-black/50 px-4 py-2 rounded-t-xl">
                  {value.Name}
                </h1>
                <strong className="px-4 backdrop-blur-3xl pb-3 md:text-2xl font-semibold bg-black/50 text-center text-xl rounded-b-xl">
                  Click to View this Mosque Prayer Time
                </strong>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Title */}
      <section className="max-w-4xl mx-auto text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our primary goal is to serve the Muslim community by providing
          accurate and reliable congregation (Jamaat) prayer times. We believe
          that offering prayers in congregation strengthens unity, brotherhood,
          and spirituality. Through this platform, our commitment is to keep
          Muslims connected with the mosque, ensuring no one is deprived of
          prayer, and to reinforce Islamic brotherhood in society.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 mt-6 bg-green-600 text-white text-xl rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default Home;
