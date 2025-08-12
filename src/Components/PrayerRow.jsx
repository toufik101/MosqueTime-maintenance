import React from "react";

const PrayerRow = ({ data, monthName }) => {
  const today = new Date();
  const year = today.getFullYear();
  const todayDate = String(today.getDate()).padStart(2, "0");

  return (
    <section>
      <h2 className="text-center text-lg font-bold mb-4">
        Prayer Times for {monthName} - {year}
      </h2>
      <table className="w-full table-auto border-collapse text-center">
        <thead>
          <tr className="bg-blue-100 text-gray-800">
            <th>Date</th>
            <th>Islamic Date</th>
            <th>Day</th>
            <th>Fajr</th>
            <th>Sunrise</th>
            <th>Dhuhr</th>
            <th>Asr</th>
            <th>Maghrib</th>
            <th>Isha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prayer, index) => (
            <tr
              key={index}
              className={`text-sm border-b  hover:bg-blue-50 
                ${prayer.date === "10" || prayer.date === "21" ? "border-t-7 border-black-300" : ""}
                ${prayer.day === "Fri" ? "bg-red-200" : ""}
                ${prayer.date === todayDate ? "bg-emerald-300 font-bold" : ""}`}
            >
              <td className="py-1">{prayer.date}</td>
              <td >{prayer.islamicDate}</td>
              <td>{prayer.day}</td>
              <td>{prayer.adhan.fajr}</td>
              <td>{prayer.adhan.sunrise}</td>
              <td>{prayer.adhan.dhuhr}</td>
              <td>{prayer.adhan.asr}</td>
              <td>{prayer.adhan.maghrib}</td>
              <td>{prayer.adhan.isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PrayerRow;
