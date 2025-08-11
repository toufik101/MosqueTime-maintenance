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
  const { MosqueName, location, mosqueImg } = locations;
  //// const { fajr, sunrise, dhuhr, asr, maghrib, isha} = todayData.iqamah;

  return (
    <>
      <div className=" bg-fixed bg-cover bg-no-repeat  bg-center  px-4"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${mosqueImg}')`
  }} >
        <section className=" text-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
          <h1 className="text-3xl  font-extrabold tracking-wide mb-2">
            {MosqueName}
          </h1>
          <div className="flex items-center justify-center  text-lg opacity-90">
            <span className="text-yellow-300">📍</span>
            <span className="text-xl font-semibold text-black">{location}</span>
          </div>
        </section>

        {/* SECTION-02 */}
        <section className="my-4 md:w-2/3 mx-auto p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl text-center font-bold">IQAMAH TIME</h2>
          <div className="border border-gray-400 rounded shadow-md text-sm">
            <div className="bg-gray-700 text-white text-center text-xl py-2 font-bold">
              {currentMonth} {date}-{day}
            </div>
            <div className="bg-gray-100 py-3 shadow-2xl shadow-purple-300 space-y-1 font-medium text-gray-800">
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
    </>
    // <section className="flex gap-2 justify-center sticky top-0">
    // <div className="max-w-md mt-10 p-4 shadow-xl rounded-xl bg-white">
    //   <h1 className="text-2xl font-bold text-center mb-4">
    //     Prayer Times for {day}, {currentMonth} {date} ,{mosqueName} , {location}
    //   </h1>
    //   <ul className="space-y-2 text-lg">
    //     <li><strong>Fajr:</strong> {fajr}   <strong>{todayData.iqamah.fajr}</strong></li>
    //     <li><strong>Sunrise:</strong> {sunrise}</li>
    //     <li><strong>Dhuhr:</strong> {dhuhr}</li>
    //     <li><strong>Asr:</strong> {asr}</li>
    //     <li><strong>Maghrib:</strong> {maghrib}</li>
    //     <li><strong>Isha:</strong> {isha}</li>
    //   </ul>
    // </div>

    //   {/* JUMMAH DATE */}
    //   <div className="max-w-md mt-10 p-4 shadow-md rounded-xl shadow-amber-300">
    //     <h1 className="text-3xl font-extrabold text-center">JUMMAH DATE</h1>
    //     <table className="w-full table-auto border-collapse text-center mt-4">
    //       <thead>
    //         <tr className="bg-blue-100 text-gray-800">
    //           <th>Date</th>
    //           <th>Time</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {Data.map((prayer, index) => {
    //           const isTomorrowJummah =
    //             prayer.day === "Fri" && Number(prayer.date) === Number(todayDate) + 1;
    //           const isTodayJumma =
    //             prayer.day === "Fri" && Number(prayer.date) === Number(todayDate);

    //           if (prayer.day === "Fri") {
    //             return (
    //               <tr
    //                 key={index}
    //                 className={`hover:bg-gray-50 ${
    //                   isTomorrowJummah ? "bg-emerald-300" : ""
    //                 } ${isTodayJumma ? "bg-amber-600" : ""}`}
    //               >
    //                 <td>{prayer.date}</td>
    //                 <td>{prayer.adhan.dhuhr}</td>
    //               </tr>
    //             );
    //           }
    //           return null;
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    // </section>
  );
};

export default PrayerTimes;
