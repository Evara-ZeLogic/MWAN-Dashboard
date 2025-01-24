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
import activePayment from "../../src/assets/statues/activeProjects.png";
import closed from "../../src/assets/statues/closed.webp";
import deletedProjects from "../../src/assets/statues/deletedProjects.webp";
import financialClosed from "../../src/assets/statues/financialClosed.png";
import future from "../../src/assets/statues/future.png";
import idea from "../../src/assets/statues/idea.webp";
import paused from "../../src/assets/statues/paused.webp";
import payment from "../../src/assets/statues/payment.webp";
import underClosing from "../../src/assets/statues/underClosing.png";
import viewAll from "../../src/assets/statues/viewall.png";
import withdraw from "../../src/assets/statues/withdraw.png";

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
      <div className="w-[30px] h-[10px] border-b-[2px] border-[#4E4E4E]"></div>
      <button className="w-5 h-10">
        <img src={viewAll} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={idea} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={future} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={activePayment} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={deletedProjects} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={paused} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={withdraw} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={underClosing} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
      <button className="w-5 h-10">
        <img src={closed} alt="sheet" className="w-[20px] h-[20px]" />
      </button>{" "}
    </div>
  );
};

export default RightSideBar;
