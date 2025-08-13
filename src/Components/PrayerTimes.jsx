import React, { useEffect, useState } from "react";

const PrayerTimes = ({ currentMonth, mosqueName /*Data*/ }) => {
  const [todayData, setTodayData] = useState(null);
  // const [todayDate, setTodayDate] = useState("");
  const [locations, setLocation] = useState("");

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
      } catch (error) {
        console.error("Error loading prayer times:", error);
      }
    };
    loadData();
  }, [currentMonth, mosqueName]);

  if (!todayData) return <p>Loading today's prayer times...</p>;
  const { day, date } = todayData;
  const { fajr, dhuhr, asr, maghrib, isha } = todayData.iqamah;
  const { MosqueName, Mosquelocation,iquamahBg } = locations;
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
        <section className="my-4 md:w-2/3 mx-auto p-2 backdrop-blur-xs rounded-lg shadow-lg shadow-black">
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
              <div className="flex justify-between border-b px-2">
                <span>Zuhr</span>
                <span>{dhuhr}</span>
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
      </div>
    </>);
};

export default PrayerTimes;
