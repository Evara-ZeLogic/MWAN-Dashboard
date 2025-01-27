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
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const imageData = [
    // { img: edge, alt: "Edge", hasDivider: true, to: "" },
    { img: home, alt: "Home", hasDivider: false, to: "" },
    { img: dashboard, alt: "Dashboard", hasDivider: false, to: "" },
    { img: report, alt: "Report", hasDivider: false, to: "" },
    { img: powerpoint, alt: "Powerpoint", hasDivider: true, to: "" },
    { img: links, alt: "Links", hasDivider: false, to: "" },
    { img: cloud, alt: "Cloud", hasDivider: true, to: "" },
    {
      img: documents,
      alt: "Documents",
      hasDivider: false,
      to: "http://pmo-mwan.vara360.com.s3-website-us-east-1.amazonaws.com",
    },
    { img: chat, alt: "Chat", hasDivider: false, to: "" },
  ];
  return (
    <div className="h-full flex flex-col items-center pt-2">
      <Link className="h-[31px] flex items-center" to="">
        <img src={edge} alt="edge" className="w-[20px] h-[20px]" />
      </Link>

      <div className="w-[46px] h-[10px] border-b-[1px] border-[#4E4E4E] mb-2"></div>

      {imageData.map((img, index) => {
        return (
          <>
            <Link className="h-8" to={img.to} key={index}>
              <img src={img.img} alt={img.alt} className="w-[20px] h-[20px]" />
            </Link>
            {img.hasDivider && (
              <div className="w-[30px] h-[10px] border-b-[1px] border-[#4E4E4E] mb-2"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
