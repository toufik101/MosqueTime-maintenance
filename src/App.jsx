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
import MischiganIslamicInstitute from "./Pages/MischiganIslamicInstitute";
import AlIhsaanIslamicCenter from "./Pages/AlIhsaanIslamicCenter";
import DarulUloomMichigan from "./Pages/DarulUloomMichigan";
import AddNewMosque from "./Components/AddNewMosque";
import AllMosque from "./Layouts/AllMosque";
import HomePagLayout from "./Layouts/HomePagLayout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          {/* All Mosque List */}
          <Route element={<HomePagLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/allmosque" element={<AllMosque />}>
            <Route index  element={<BaitulMukarram />} />
            <Route path="alfalah" element={<AlFalah />} />
            <Route path="mosquefath" element={<MosqueFath />} />
            <Route path="ionamasjid" element={<IONAMasjid />} />
            <Route path="masjidunnur" element={<MasjidunNur />} />
            <Route path="darulquranmasjid" element={<DarulQuranMasjid />} />
            <Route path="centerfordawah" element={<CenterForDawah />} />
            <Route
              path="mischiganislamicinstitute"
              element={<MischiganIslamicInstitute />}
            />
            <Route
              path="alihsaanislamiccenter"
              element={<AlIhsaanIslamicCenter />}
            />
            <Route path="darululoommichigan" element={<DarulUloomMichigan />} />
            <Route path="addmosque" element={<AddNewMosque />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
