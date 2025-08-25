import React from "react";
import Menu from "../Components/Menu";
import { Outlet } from "react-router-dom";

const AllMosque = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow bg-green-800">
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AllMosque;
