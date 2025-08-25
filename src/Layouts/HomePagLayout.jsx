import {Outlet } from "react-router-dom";
import MainMenu from "../Components/MainMenu";
const HomePagLayout = () => {


  return (
    <>
    <div className="sticky top-0 z-50">
        <MainMenu/>
    </div>

      {/* Main Content */}
      <main className="h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default HomePagLayout;
