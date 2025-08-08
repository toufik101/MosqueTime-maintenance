
import React, { useEffect, useState } from "react";

const PrayerTimes = ({ currentMonth, Data }) => {
  const [todayData, setTodayData] = useState(null);
  const [todayDate, setTodayDate] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        if (!currentMonth) return; // guard clause

        const json = await import(`../JSON/${currentMonth}.json`);
        const today = new Date();
        const todayDate = String(today.getDate()).padStart(2, "0");
        const match = json.default.find((item) => item.date === todayDate); // ✅ fixed
        setTodayData(match);
        setTodayDate(todayDate); // Store today's date for Jummah calculation
      } catch (error) {
        console.error("Error loading prayer times data:", error);
      }
    };
    loadData();
  }, [currentMonth]);

  if (!todayData) return <p>Loading today's prayer times...</p>;
  const { fajr, sunrise, dhuhr, asr, maghrib, isha } = todayData;

  return (
    <>
      <section className="flex gap-2 justify-center sticky  top-0 ">
        <div className="max-w-md  mt-10 p-4 shadow-xl rounded-xl bg-white text-gray-800">
          <h1 className="text-2xl font-bold text-center mb-4">
            Prayer Times for {todayData.day}, {currentMonth} {todayData.date}
          </h1>
          <ul className="space-y-2 text-lg">
            <li>
              <strong>Fajr:</strong> {fajr}
            </li>
            <li>
              <strong>Sunrise:</strong> {sunrise}
            </li>
            <li>
              <strong>Dhuhr:</strong> {dhuhr}
            </li>
            <li>
              <strong>Asr:</strong> {asr}
            </li>
            <li>
              <strong>Maghrib:</strong> {maghrib}
            </li>
            <li>
              <strong>Isha:</strong> {isha}
            </li>
          </ul>
        </div>

        {/* JUMMA DATE */}
        <div className="max-w-md  mt-10 p-4 shadow-amber-300 shadow-md rounded-xl">
          <h1 className="text-3xl font-extrabold text-center">JUMMAH DATE</h1>

          <table className="w-full table-auto border-collapse text-center mt-4">
            <thead>
              <tr className="bg-blue-100 border-1  text-gray-800">
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((prayer, index) => {
                const isTomorrowJummah =
                  prayer.day === "Fri" &&
                  Number(prayer.date) === Number(todayDate) + 1;
                const isTodayJumma =
                  prayer.day === "Fri" &&
                  Number(prayer.date) === Number(todayDate);
                prayer.day === "Fri" &&
                  Number(prayer.date) === Number(todayDate) + 1;
                if (prayer.day === "Fri") {
                  return (
                    <tr
                      key={index}
                      className={`border-1 hover:bg-gray-50 ${
                        isTomorrowJummah
                          ? "bg-emerald-300"
                          : isTodayJumma
                          ? "bg-amber-600"
                          : ""
                      }`}
                    >
                      <td className={`border-e px-4 py-2 `}>{prayer.date}</td>
                      <td className=" border-e px-4 py-2">{prayer.dhuhr}</td>
                    </tr>
                  );
                }
                return null; // Skip non-Friday prayers
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PrayerTimes;
