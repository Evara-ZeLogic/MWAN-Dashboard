import React from "react";
import sheeView from "../../src/assets/rightSideBarIcons/sheet.png";
import projectView from "../../src/assets/rightSideBarIcons/project.png";
import select from "../../src/assets/rightSideBarIcons/select.png";
import open from "../../src/assets/rightSideBarIcons/open.png";
import insert from "../../src/assets/rightSideBarIcons/Insert.png";
import addNew from "../../src/assets/rightSideBarIcons/addNew.png";
import edit from "../../src/assets/rightSideBarIcons/edit.png";
import remove from "../../src/assets/rightSideBarIcons/delete.png";
import cut from "../../src/assets/rightSideBarIcons/cut.png";
import group from "../../src/assets/rightSideBarIcons/group.png";
import paste from "../../src/assets/rightSideBarIcons/paste.png";
import userProfile from "../../src/assets/headerIcons/userProfile.png";

const RightSideBar = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <button className="w-5 h-10">
        <img src={userProfile} alt="sheet" className="w-[20px] h-[20px] mt-1" />
      </button>
      <div className="w-full border-b-[1px] border-[#4E4E4E] mt-2"></div>
      <button className="w-5 h-10">
        <img src={sheeView} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10 ">
        <img src={projectView} alt="sheet" className="w-[25px] h-[25px]" />
      </button>
      <div className="w-[30px] h-[10px] border-b-[2px] border-[#4E4E4E]"></div>
      <button className="w-5 h-10">
        <img src={select} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={open} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={insert} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <div className="w-[30px] h-[10px] border-b-[2px] border-[#4E4E4E]"></div>
      <button className="w-5 h-10">
        <img src={addNew} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={edit} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={remove} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <div className="w-[30px] h-[10px] border-b-[2px] border-[#4E4E4E]"></div>
      <button className="w-5 h-10">
        <img src={cut} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={group} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
      <button className="w-5 h-10">
        <img src={paste} alt="sheet" className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default RightSideBar;
