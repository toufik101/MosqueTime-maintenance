import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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

  const handleSearch = (e) => {
    e.preventDefault();
    const mosque = Info.find((m) =>
      m.Name.toLowerCase().includes(search.toLowerCase().trim())
    );
    if (mosque) {
      navigate(mosque.link);
    } else {
      alert("Mosque not found!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* 🔍 Search Bar */}
      <div className="max-w-xl mx-auto py-6 px-4">
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Mosque..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Search
          </button>
        </form>
      </div>

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
      {/* 🕌 Report Incorrect Mosque Times Section */}
      <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            🕌 Report Incorrect Mosque Times
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            If you notice that a mosque prayer or Iqama time is incorrect,
            please help us by uploading the mosque name and a clear picture of
            the time schedule. Your contribution helps keep prayer times
            accurate for everyone.
          </p>

          {/* Upload Button Container */}
          <div className="flex justify-center">
            <button className="relative group px-5 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white text-xl font-semibold rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
              {/* Button Text */}
              <Link
                to="/allmosque/addmosque"
                className="relative z-10 flex items-center gap-2"
              >
                📤 Upload Schedule
              </Link>

              {/* Ripple Glow Effect */}
              <span className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 animate-ping"></span>
              <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-20 transition duration-500"></span>
            </button>
          </div>
        </div>
      </section>

      {/* 🌙 Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: "🕌",
            title: "Daily Prayers",
            desc: "Stay updated with accurate daily prayer timings.",
          },
          {
            icon: "🤝",
            title: "Community",
            desc: "Join a strong and welcoming Muslim community.",
          },
          // {
          //   icon: "📖",
          //   title: "Quran Classes",
          //   desc: "Weekly Quran learning sessions for all ages.",
          // },
          {
            icon: "❤️",
            title: "Donations",
            desc: "Support mosque projects and future generations.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              {item.icon} {item.title}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 📖 About Section */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src={BaitulMukarram}
          alt="Mosque"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            About Our Mosque
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mosque serves as a spiritual and community hub for Muslims of
            all ages. We provide daily prayers, Quran classes, lectures, youth
            programs, and community events.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div> */}

      {/* 📅 Events Section */}
      {/* <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-10">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Jummah Khutbah",
                date: "Every Friday",
                desc: "Join us for weekly Jummah prayers & khutbah.",
              },
              {
                title: "Quran Tafseer",
                date: "Every Saturday",
                desc: "Deep dive into Quran with our scholars.",
              },
              {
                title: "Youth Gathering",
                date: "Monthly",
                desc: "Programs to empower and guide our youth.",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold text-green-700">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ❤️ Donation Section */}
      {/* <div className="bg-green-600 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Support Your Mosque</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Your generous donations help maintain the mosque, support education,
          and build future projects.
        </p>
        <Link
          to="/donate"
          className="px-8 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Donate Now
        </Link>
      </div> */}
      {/* The rest of your content (Mission, Features, About, Events, Donation)... */}
    </div>
  );
};

export default Home;
