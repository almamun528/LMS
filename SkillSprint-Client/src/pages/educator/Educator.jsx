import React from "react";
import { Outlet } from "react-router-dom";
import MenuNav from "./MenuNav";
import SideBar from "../../component/educator/SideBar";

const Educator = () => {
  return (
    <section className="min-h-screen bg-white">
      <MenuNav />
      <div className="flex ">
        <SideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Educator;
