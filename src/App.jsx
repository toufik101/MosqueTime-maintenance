import React from "react";
import MosqueFath from "./Pages/MosqueFath";
import MosqueB from "./Pages/MosqueB";
import MosqueC from "./Pages/MosqueC";
import PageNotFound from "./Pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";


function App() {
  return (
    <>
      {/* Header */}
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MosqueFath/>} />
    <Route path="/mosqueB" element={<MosqueB />} />
    <Route path="/mosqueC" element={<MosqueC />} />
    <Route path="*" element={<PageNotFound />} />
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
