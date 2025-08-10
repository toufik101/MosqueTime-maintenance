import { useState, useEffect } from "react";
import Leftbox from "./Components/Leftbox";
import PrayerTimes from "./Components/PrayerTimes";
import PrayerRow from "./Components/PrayerRow";

function App() {
  const [data, setData] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [mosqueName, setMosqueName] = useState("MosqueA");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const fileName = monthNames[currentMonthIndex];
    setMonthName(fileName);

    const loadData = async () => {
      try {
        const json = await import(`./JSON/${mosqueName}/${fileName}.json`);
        
        // Get location info (either 'location' or join 'locations' array)
        let loc = "";
        if (json.location) loc = json.location;
        else if (json.locations) loc = json.locations.join(", ");
        else loc = "Unknown Location";

        setLocation(loc);

        // Set prayerTimes array as data
        setData(json.prayerTimes || []);
      } catch (error) {
        console.error(`Failed to load JSON for ${mosqueName} - ${fileName}:`, error);
      }
    };

    loadData();
  }, [mosqueName]);

  return (
    <>
      {/* Mosque Selector */}
<div className="p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-lg text-center ">
  <label className="block mb-3 text-lg font-semibold text-green-900">
    🕌 Select Mosque
  </label>
  
  <select
    value={mosqueName}
    onChange={(e) => setMosqueName(e.target.value)}
    className="border border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-300 p-3 rounded-lg w-full bg-white text-green-900 font-medium shadow-sm transition duration-200 ease-in-out"
  >
    <option value="MosqueA">Mosque A</option>
    <option value="MosqueB">Mosque B</option>
    <option value="MosqueC">Mosque C</option>
  </select>

  {/* Optional location display */}
  {/* <div className="mt-4 text-green-800 bg-white/60 rounded-lg p-2 shadow-inner">
    📍 Location: {location}
  </div> */}
</div>

      {/* Main Layout */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4">
        <div className="col-span-1">
          <Leftbox currentMonth={monthName} location={location} />
        </div>
        <div className="col-span-3">
          <PrayerTimes
            currentMonth={monthName}
            mosqueName={mosqueName}
            location={location}
            Data={data}
          />
          <PrayerRow data={data} monthName={monthName} location={location} />
        </div>
      </section>
    </>
  );
}

export default App;
