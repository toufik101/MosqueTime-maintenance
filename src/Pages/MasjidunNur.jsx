import React, { useState, useEffect } from "react";
import Leftbox from "../Components/Leftbox";
import PrayerTimes from "../Components/PrayerTimes";
import PrayerRow from "../Components/PrayerRow";
import Menu from "../Components/Menu";
const MasjidunNur = () => {
  const [data, setData] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [mosqueName, setMosqueName] = useState("MasjidunNur");
  const [location, setLocation] = useState("");
  const [mosqueImage, setMosqueImage] = useState("");

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

        // Loaction,Mosque Name and Image from LIN
        const LIN = await import(`../JSON/${mosqueName}/LIN.json`);
        let loc = "";
        if (json.location) loc = json.location;
        else if (json.locations) loc = json.locations.join(", ");
        else loc = "Unknown Location";

        setMosqueImage(LIN.default || `Unknown Location ${mosqueName}`);
        setLocation(loc);
        setMosqueName("MasjidunNur");
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
  const { MosqueName, Mosquelocation, mosqueImg } = mosqueImage;
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* -----------------------background img----------------------------- */}
      <section
        className="relative w-full  h-[45vh]  min-h-[200px]   bg-size-[100%_50vh]   bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('${mosqueImg}')`,
        }}
      >
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white drop-shadow-lg">
            {MosqueName}
          </h1>
          <a href="https://share.google/b88b15noa3pREjSyv" className="mt-2 text-lg md:text-2xl text-gray-200">
            {Mosquelocation}
          </a>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="w-full h-14"
          >
            <path
              d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>
      <div>
        <h2 className="text-3xl font-bold">November 2023 DEMO</h2>
      </div>
      {/* TOP BAR */}
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

export default MasjidunNur;
