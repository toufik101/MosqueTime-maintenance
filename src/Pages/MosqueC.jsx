import React from "react";
import { useState, useEffect } from "react";
import Leftbox from "../Components/Leftbox";
import PrayerTimes from "../Components/PrayerTimes";
import PrayerRow from "../Components/PrayerRow";
import Menu from "../Components/Menu";
const MosqueC = () => {
  const [data, setData] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [mosqueName, setMosqueName] = useState("MosqueC");
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

        // Get location info (either 'location' or join 'locations' array)
        let loc = "";
        if (json.location) loc = json.location;
        else if (json.locations) loc = json.locations.join(", ");
        else loc = "Unknown Location";

        setLocation(loc);

        // Set prayerTimes array as data
        setData(json.prayerTimes || []);
        setMosqueName("MosqueC")
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
    <>
    <Menu/>
      {/* Main Layout */}
     <section className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4">
  <div className="order-2 md:order-none col-span-1 md:col-start-1 md:row-start-1">
    <Leftbox currentMonth={monthName} location={location} />
  </div>

  <div className="order-1 md:order-none col-span-1 md:col-span-3 md:col-start-2 md:row-start-1">
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
};

export default MosqueC;
