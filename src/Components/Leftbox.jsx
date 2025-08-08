import React from "react";

const Leftbox = ({currentMonth}) => {
  return (
    <div className="sticky top-0">
      {/* SECTION-01 */}
      <section className=" bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-bold">JUMMAH</h2>
        <ul className="mx-auto   text-center list-none border-2 border-t-0 rounded-b-xl  gap-2">
          <li className=" bg-yellow-300 text-xl font-bold border-b-2  flex justify-between px-2 text-center">
            <strong className=" bg-transparent text-center">1st.</strong>
            <span>12:30-1.00</span>
          </li>
          <li className="bg-green-300 text-xl font-bold flex justify-between px-2 border-b-2">
            <strong className="bg-transparent text-center">2nd.</strong>{" "}
            <span>1:30-2.00</span>
          </li>
          <li className="bg-yellow-400 text-xl font-bold flex justify-between px-2 rounded-b-xl">
            <strong className="bg-transparent text-center">3rd.</strong>{" "}
            <span>2:30-3.00</span>
          </li>
        </ul>
      </section>

      {/* SECTION-02 */}
      <section className="mt-4 ">
        <h2 className="text-xl text-center font-bold">IQAMAH TIME</h2>

        <div className="border border-gray-400 rounded shadow-md text-sm">
          {/* Header */}
          <div className="bg-gray-700 text-white text-center py-2 font-bold">
            {currentMonth} 01 - 10
          </div>

          {/* Prayer Times */}
          <div className="bg-gray-100  py-3 space-y-1 font-medium text-gray-800">
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
            <div className="flex justify-between items-center border-b px-1">
              <span>Maghrib</span>
              <span className="text-xs font-semibold text-gray-600 ">
                5 Min After Azan
              </span>
            </div>
            <div className="flex justify-between px-2">
              <span>Isha</span>
              <span>10:45</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-03 */}
      <section className="mt-2">
        <div className="border border-gray-400 rounded shadow-md text-sm">
          {/* Header */}
          <div className="bg-gray-700 text-white text-center py-2 font-bold">
            {currentMonth} 11 - 20
          </div>

          {/* Prayer Times */}
          <div className="bg-gray-100  py-3 space-y-1 font-medium text-gray-800">
            <div className="flex justify-between border-b px-2">
              <span>Fajr</span>
              <span>6:00</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Zuhr</span>
              <span>2:00</span>
            </div>
            <div className="flex justify-between border-b px-2">
              <span>Asr</span>
              <span>7:00</span>
            </div>
            <div className="flex justify-between items-center border-b px-1">
              <span>Maghrib</span>
              <span className="text-xs font-semibold text-gray-600 ">
                5 Min After Azan
              </span>
            </div>
            <div className="flex justify-between px-2">
              <span>Isha</span>
              <span>10:30</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-04 */}
      <section className="mt-2">
        <div className="border border-gray-400 rounded shadow-md text-sm">
          {/* Header */}
          <div className="bg-gray-700 text-white text-center py-2 font-bold">
            {currentMonth} 21 - 31
          </div>

          {/* Prayer Times */}
          <div className="bg-gray-100  py-3 space-y-1 font-medium text-gray-800">
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
            <div className="flex justify-between items-center border-b px-1">
              <span>Maghrib</span>
              <span className="text-xs font-semibold text-gray-600 ">
                5 Min After Azan
              </span>
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
