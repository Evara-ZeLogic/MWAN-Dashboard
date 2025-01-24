import React from "react";
// import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { Outlet } from "react-router-dom";
import RightSideBar from "./RightSideBar";

const Layout = () => {
  return (
    <div>
      {/* <section className="border-white border-b-[1px] h-10">
        <Header />
      </section> */}
      <main className="flex flex-row h-[100vh]">
        <aside className="border-[#414141] border-l-[1px] w-12 ">
          <RightSideBar />
        </aside>
        <section className="w-[calc(100%-96px)]">
          <Outlet />
        </section>
        <aside className="border-[#414141] border-r-[1px] w-12 ">
          <LeftSideBar />
        </aside>
      </main>
    </div>
  );
};

export default Layout;
