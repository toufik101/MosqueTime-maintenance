import React, { useState, useEffect } from "react";
import Leftbox from "../Components/Leftbox";
import PrayerTimes from "../Components/PrayerTimes";
import PrayerRow from "../Components/PrayerRow";
import Menu from "../Components/Menu";

const MosqueFath = () => {
  const [data, setData] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [mosqueName, setMosqueName] = useState("MosqueFath");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth();
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
    setMonthName(fileName);

    const loadData = async () => {
      try {
        const json = await import(`../JSON/${mosqueName}/${fileName}.json`);

        let loc = "";
        if (json.location) loc = json.location;
        else if (json.locations) loc = json.locations.join(", ");
        else loc = "Unknown Location";

        setLocation(loc);
        setMosqueName("MosqueFath");
        setData(json.prayerTimes || []);
      } catch (error) {
        console.error(
          `Failed to load JSON for ${mosqueName} - ${fileName}:`,
          error
        );
      }
    };

    loadData();
  }, [mosqueName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Main Layout */}
      <main className="containr mx-auto  py-2 grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Sidebar */}
        <aside className="order-2 md:order-none bg-white rounded-xl shadow-lg p-4 border border-green-200 transition duration-300 hover:shadow-xl">
          <Leftbox
            currentMonth={monthName}
            location={location}
            mosqueName={mosqueName}
          />
        </aside>

        {/* Main Content */}
        <section className="order-1 md:order-none  md:col-span-3 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-2 border border-green-200 hover:shadow-xl transition duration-300">
            <PrayerTimes
              currentMonth={monthName}
              mosqueName={mosqueName}
              location={location}
              Data={data}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-2 border border-green-200 hover:shadow-xl transition duration-300">
            <PrayerRow data={data} monthName={monthName} location={location} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MosqueFath;
