import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MosqueFath from "./Pages/MosqueFath";
import AlFalah from "./Pages/AlFalah";
import BaitulMukarram from "./Pages/BaitulMukarram";
import PageNotFound from "./Pages/PageNotFound";
import IONAMasjid from "./Pages/IONAMasjid";
import MasjidunNur from "./Pages/MasjidunNur";
import DarulQuranMasjid from "./Pages/DarulQuranMasjid";
import CenterForDawah from "./Pages/CenterForDawah";

function App() {
  return (
    <>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaitulMukarram />} />
          <Route path="/alfalah" element={<AlFalah />} />
          <Route path="/mosquefath" element={<MosqueFath />} />
          <Route path="/IONAMASJID" element={<IONAMasjid />} />
          <Route path="/masjidunnur" element={<MasjidunNur />} />
          <Route path="/darulquranmasjid" element={<DarulQuranMasjid />} />
          <Route path="/CenterForDawah" element={<CenterForDawah />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
