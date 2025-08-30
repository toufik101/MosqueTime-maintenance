import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  "../assets/Mosque-Img/IQUAMAH-BG.jpg"
const PrayerTimes = ({ currentMonth, mosqueName /*Data*/ }) => {
  const [todayData, setTodayData] = useState(null);
  // const [todayDate, setTodayDate] = useState("");
  const [locations, setLocation] = useState("");
  let [jummahData, setJummahData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (!currentMonth || !mosqueName) return;
      try {
        const json = await import(`../JSON/${mosqueName}/${currentMonth}.json`);

        // Loaction,Mosque Name and Image from LIN
        const LIN = await import(`../JSON/${mosqueName}/LIN.json`);

        //! json.default is an object with keys location and prayerTimes
        const prayerTimes = json.default.prayerTimes || [];
        const today = new Date();
        const todayDateStr = String(today.getDate()).padStart(2, "0");

        const match = prayerTimes.find((item) => item.date === todayDateStr);
        setTodayData(match);

        //! setTodayDate(todayDateStr);
        //// setLocation(json.default.location || "Unknown Location");
        setLocation(LIN.default || `Unknown Location ${mosqueName}`);

        // JUMMAH SETTING
        const jummahTime = await import(`../JSON/${mosqueName}/Jummah.json`);
        setJummahData(jummahTime.default[currentMonth] || []);
      } catch (error) {
        console.error("Error loading prayer times:", error);
      }
    };
    loadData();
  }, [currentMonth, mosqueName]);

  if (!todayData) return <p>Loading today's prayer times...</p>;
  const { day, date } = todayData;
  const { fajr, dhuhr, asr, maghrib, isha } = todayData.iqamah;
  const { MosqueName, Mosquelocation, iquamahBg } = locations;
  //// const { fajr, sunrise, dhuhr, asr, maghrib, isha} = todayData.iqamah;

  return (
    <>
      <div
        className=" rounded-2xl bg-fixed bg-cover bg-no-repeat  bg-center  py-2"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('${iquamahBg}')`,
        }}
      >
        {/* <section className=" backdrop-blur-xs  text-center bg-gradient-to-r from-blue-0 to-indigo-0 text-yellow-400 rounded-2xl shadow-lg max-w-md mx-auto">
          <h1 className="text-3xl  font-extrabold tracking-wide mb-2">
            {MosqueName}
          </h1>
          <div className="flex items-center justify-center  text-lg opacity-90">
            <span className="text-yellow-300">📍</span>
            <span className="text-xl font-semibold text-white">{Mosquelocation}</span>
          </div>
        </section> */}

        {/* SECTION-02 */}
        <section className="my-4 md:w-2/3 mx-auto  p-2  backdrop-blur-xs rounded-lg shadow-lg shadow-black">
          <h2 className="text-xl text-center font-bold">IQAMAH TIME</h2>
          <div className="border border-gray-400 rounded shadow-md text-sm">
            <div className="bg-gray-700 text-white text-center text-xl py-2 font-bold">
              {currentMonth} {date}-{day}
            </div>
            <div className="backdrop-blur-lg py-3 shadow-2xl shadow-black space-y-1 font-medium text-gray-100">
              <div className="flex justify-between border-b px-2">
                <span>Fajr</span>
                <span>{fajr}</span>
              </div>
              <div
                className={`flex justify-between items-center border-b px-2 ${
                  day === "Friday" ? "bg-red-800 p-2 font-bold" : ""
                }`}
              >
                <span>{day == "Friday" ? "Jummah" : "Dhuhr"}</span>
                <span>
                  {day == "Friday" ? (
                    <ul className="flex gap-0.5 md:gap-2 mx-auto list-none divide-y  divide-yellow-300 rounded-xl overflow-hidden shadow-md">
                      {jummahData.map((value, index) => (
                        <li
                          className={`${
                            value.title.slice(0, 3) === "1st"
                              ? "bg-yellow-200"
                              : value.title.slice(0, 3) === "2nd"
                              ? "bg-green-200"
                              : value.title.slice(0, 3) === "3rd"
                              ? "bg-yellow-300"
                              : "bg-red-400"
                          } md:text-lg text- font-semibold flex justify-between items-center   py-2 px-1 hover:bg-yellow-300 transition duration-200 ease-in-out md:px-2 md:py-0`}
                          key={index.toLocaleString()}
                        >
                          <strong className="text-black">{value.title+" -"}</strong>
                          <span className="text-black"> {value.time} </span>
                        </li>
                      ))}
                    </ul>
                  ) : dhuhr}
                </span>
              </div>
              <div className="flex justify-between border-b px-2">
                <span>Asr</span>
                <span>{asr}</span>
              </div>
              <div className="flex justify-between border-b px-1">
                <span>Maghrib</span>
                <span className="text-xs">{maghrib}</span>
              </div>
              <div className="flex justify-between px-2">
                <span>Isha</span>
                <span>{isha}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🕌 Report Incorrect Mosque Times Section */}
        <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-2">
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
      </div>
    </>
  );
};

export default PrayerTimes;
