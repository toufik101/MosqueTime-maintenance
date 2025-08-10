import React from "react";

const Leftbox = ({ currentMonth }) => {
  return (
    <div className="sticky top-0">
      {/* SECTION-01 */}
<section className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-2xl shadow-xl max-w-md mx-auto border border-yellow-200">
  <h2 className="text-3xl text-center font-extrabold text-yellow-700 mb-4 tracking-wide">
    🕌 JUMMAH
  </h2>

  <ul className="mx-auto list-none divide-y divide-yellow-300 rounded-xl overflow-hidden shadow-md">
    <li className="bg-yellow-200 text-lg font-semibold flex justify-between items-center px-4 py-3 hover:bg-yellow-300 transition duration-200 ease-in-out">
      <strong className="text-yellow-800">1st</strong>
      <span className="text-yellow-900">12:30 - 1:00</span>
    </li>

    <li className="bg-green-200 text-lg font-semibold flex justify-between items-center px-4 py-3 hover:bg-green-300 transition duration-200 ease-in-out">
      <strong className="text-green-800">2nd</strong>
      <span className="text-green-900">1:30 - 2:00</span>
    </li>

    <li className="bg-yellow-300 text-lg font-semibold flex justify-between items-center px-4 py-3 hover:bg-yellow-400 transition duration-200 ease-in-out">
      <strong className="text-yellow-900">3rd</strong>
      <span className="text-yellow-900">2:30 - 3:00</span>
    </li>
  </ul>
</section>


      {/* SECTION-02 */}
      <section className="mt-4 space-y-3">
        <h2 className="text-xl text-center font-bold">IQAMAH TIME</h2>
        <div className="border border-gray-400 rounded shadow-md text-sm">
          <div className="bg-gray-700 text-white text-center py-2 font-bold">
            {currentMonth} 01 - 10
          </div>
          <div className="bg-gray-100 py-3 space-y-1 font-medium text-gray-800">
            <div className="flex justify-between border-b px-2">
              <span>Fajr</span>
              <span>5:45</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Zuhr</span>
              <span>2:00</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Asr</span>
              <span>7:00</span>
            </div>
            <div className="flex justify-between border-b px-1">
              <span>Maghrib</span>
              <span className="text-xs">5 Min After Azan</span>
            </div>
            <div className="flex justify-between px-2">
              <span>Isha</span>
              <span>10:45</span>
            </div>
          </div>
        </div>

        {/* 2nd Date Iquma */}

        <div className="border border-gray-400 rounded shadow-md text-sm">
          <div className="bg-gray-700 text-white text-center py-2 font-bold">
            {currentMonth} 11 - 20
          </div>
          <div className="bg-gray-100 py-3 space-y-1 font-medium text-gray-800">
            <div className="flex justify-between border-b px-2">
              <span>Fajr</span>
              <span>5:45</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Zuhr</span>
              <span>2:00</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Asr</span>
              <span>7:00</span>
            </div>
            <div className="flex justify-between border-b px-1">
              <span>Maghrib</span>
              <span className="text-xs">5 Min After Azan</span>
            </div>
            <div className="flex justify-between px-2">
              <span>Isha</span>
              <span>10:45</span>
            </div>
          </div>
        </div>

        {/* 3rd Date Iquma */}

        <div className="border border-gray-400 rounded shadow-md text-sm">
          <div className="bg-gray-700 text-white text-center py-2 font-bold">
            {currentMonth} 21 - 31
          </div>
          <div className="bg-gray-100 py-3 space-y-1 font-medium text-gray-800">
            <div className="flex justify-between border-b px-2">
              <span>Fajr</span>
              <span>5:45</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Zuhr</span>
              <span>2:00</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Asr</span>
              <span>7:00</span>
            </div>
            <div className="flex justify-between border-b px-1">
              <span>Maghrib</span>
              <span className="text-xs">5 Min After Azan</span>
            </div>
            <div className="flex justify-between px-2">
              <span>Isha</span>
              <span>10:45</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leftbox;
