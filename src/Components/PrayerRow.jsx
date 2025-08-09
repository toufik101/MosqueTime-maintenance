import PrayerTimes from "./PrayerTimes";
const PrayerRow = ({data,monthName}) => {
   const today = new Date();
  const todayDate = String(today.getDate()).padStart(2, "0");

  return (
    <>
      <section>
        {/* JSX PRAYER TIME */}
        {/* <PrayerTimes currentMonth={monthName} Data={data}/> */}

        <h2 className="text-center text-lg font-semibold mb-4">
          Prayer Times for {monthName}
        </h2>
        <table className="w-full table-auto border-collapse text-center">
          <thead>
            <tr className="bg-blue-100 text-gray-800">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Day</th>
              <th className="px-4 py-2">Fajr</th>
              <th className="px-4 py-2">Sunrise</th>
              <th className="px-4 py-2">Dhuhr</th>
              <th className="px-4 py-2">Asr</th>
              <th className="px-4 py-2">Maghrib</th>
              <th className="px-4 py-2">Isha</th>
            </tr>
          </thead>
          <tbody>
          {data.map((prayer, index) => (
            <tr
              key={index}
              className={`text-sm text-gray-700 border-b hover:bg-blue-50 ${
                prayer.date === "10" || prayer.date === "20"
                  ? "border-t-4 border-blue-300"
                  : prayer.day === "Fri"
                  ? "bg-red-200"
                  : ""
              }   ${prayer.date === todayDate ? "bg-emerald-300 font-bold" : ""} `}
            >
              <td className="px-4 py-2 font-medium">{prayer.date}</td>
              <td className="px-4 py-2">{prayer.day}</td>
              <td className="px-4 py-2">{prayer.fajr}</td>
              <td className="px-4 py-2">{prayer.sunrise}</td>
              <td className="px-4 py-2">{prayer.dhuhr}</td>
              <td className="px-4 py-2">{prayer.asr}</td>
              <td className="px-4 py-2">{prayer.maghrib}</td>
              <td className="px-4 py-2">{prayer.isha}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </section>
    </>
  );
};

export default PrayerRow;
