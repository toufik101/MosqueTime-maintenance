import { useState, useEffect } from "react";
import Leftbox from "./Components/Leftbox";
import PrayerTimes from "./Components/PrayerTimes";
import PrayerRow from "./Components/PrayerRow";
function App() {
  const [data, setData] = useState([]);
  const [monthName, setMonthName] = useState("");

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth(); // 0 for Jan, 7 for Aug
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const fileName = monthNames[currentMonthIndex];
    setMonthName(fileName); // Optional: to display which month is loaded
    const loadData = async () => {
      try {
        const json = await import(`./JSON/${fileName}.json`);
        setData(json.default);
      } catch (error) {
        console.error(`Failed to load JSON for ${fileName}:`, error);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4">
        <div className="col-span-1">
          <Leftbox currentMonth={monthName} />
        </div>
        <div className="col-span-3">
          {/* JSX PRAYER TIME */}
          <PrayerTimes currentMonth={monthName} Data={data} />
          <PrayerRow data={data} monthName={monthName} />
        </div>
      </section>
    </>
  );
}

export default App;
