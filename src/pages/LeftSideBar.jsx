import React from "react";
import home from "../../src/assets/leftSideBarIcons/home.png";
import dashboard from "../../src/assets/leftSideBarIcons/dashboard.png";
import report from "../../src/assets/leftSideBarIcons/report.png";
import powerpoint from "../../src/assets/leftSideBarIcons/powerpoint.png";
import links from "../../src/assets/leftSideBarIcons/links.png";
import cloud from "../../src/assets/leftSideBarIcons/cloud.png";
import documents from "../../src/assets/leftSideBarIcons/documents.png";
import chat from "../../src/assets/leftSideBarIcons/chat.png";
import edge from "../../src/assets/headerIcons/microsoftEdge.png";

const LeftSideBar = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <button className="w-5 h-10">
        <img src={edge} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <div className="w-full border-b-[1px] border-[#4E4E4E] mt-2"></div>
      <button className="w-5 h-10">
        <img src={home} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10 ">
        <img src={dashboard} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={report} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={powerpoint} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <div className="w-[30px] h-[10px] border-b-[2px] border-[#4E4E4E]"></div>
      <button className="w-5 h-10">
        <img src={links} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={cloud} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <div className="w-[30px] h-[10px] border-b-[2px] border-[#4E4E4E]"></div>
      <button className="w-5 h-10">
        <img src={documents} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={chat} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default LeftSideBar;
