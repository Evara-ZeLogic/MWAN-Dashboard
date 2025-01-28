import React from "react";
import sheeView from "../../src/assets/rightSideBarIcons/sheet.png";
import projectView from "../../src/assets/rightSideBarIcons/project.png";
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
  const imageData = [
    { img: sheeView, alt: "sheet view", hasDivider: false },
    { img: projectView, alt: "project view", hasDivider: true },
    { img: viewAll, alt: "view all", hasDivider: false },
    { img: idea, alt: "idea", hasDivider: false },
    { img: future, alt: "future", hasDivider: false },
    { img: activePayment, alt: "active payment", hasDivider: false },
    { img: deletedProjects, alt: "deleted projects", hasDivider: false },
    { img: paused, alt: "paused", hasDivider: false },
    { img: withdraw, alt: "withdraw", hasDivider: false },
    { img: underClosing, alt: "under closing", hasDivider: false },
    { img: closed, alt: "closed", hasDivider: false },
    { img: financialClosed, alt: "financialClosed", hasDivider: false },
    { img: payment, alt: "payment", hasDivider: false },
  ];

  return (
    <div className="h-full flex flex-col items-center pt-2">
      <button className="h-[31px] ">
        <img
          src={userProfile}
          alt="userProfile"
          className="w-[20px] h-[20px]"
        />
      </button>
      <div className="w-[45px] h-[10px] border-b-[1px] border-[#4E4E4E]"></div>

      {imageData.map((img, index) => {
        return (
          <>
            <button className="w-5 h-10" key={index}>
              <img src={img.img} alt={img.alt} className="w-[20px] h-[20px]" />
            </button>
            {img.hasDivider && (
              <div className="w-[30px] h-[10px] border-b-[1px] border-[#4E4E4E]"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default RightSideBar;
