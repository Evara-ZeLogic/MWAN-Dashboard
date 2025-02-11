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
    {
      img: home,
      alt: "Home",
      hasDivider: false,
      path: "http://mwan-apps.vara360.com.s3-website-us-east-1.amazonaws.com",
      target: "_blank",
    },
    {
      img: dashboard,
      alt: "Dashboard",
      hasDivider: false,
      path: "/",
      target: "",
    },
    {
      img: report,
      alt: "Report",
      hasDivider: false,
      path: "",
    },
    {
      img: powerpoint,
      alt: "Powerpoint",
      hasDivider: true,
      path: "",
    },
    { img: links, alt: "Links", hasDivider: false, path: "" },
    { img: cloud, alt: "Cloud", hasDivider: true, path: "" },
    {
      img: documents,
      alt: "Documents",
      hasDivider: false,
      path: "http://pmo-mwan.vara360.com.s3-website-us-east-1.amazonaws.com",
      target: "_blank",
    },
    { img: chat, alt: "Chat", hasDivider: false, path: "" },
  ];
  return (
    <div className="h-full flex flex-col items-center pt-2">
      <Link className="h-[31px] flex items-center">
        <img src={edge} alt="edge" className="w-[20px] h-[20px]" />
      </Link>

      <div className="w-[46px] h-[10px] border-b-[1px] border-[#4E4E4E] mb-2"></div>

      {imageData.map((img, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <Link
            className={`h-9 pt-1 ${
              img.hasDivider && `pb-4 border-b-[1px] border-[#4E4E4E]`
            }`}
            to={img.path}
            target={img.target}
          >
            <img src={img.img} alt={img.alt} className="w-[20px] h-[20px]" />
          </Link>

          {/* {img.hasDivider && (
      <div className="w-[30px] h-[10px] border-b-[1px] border-[#4E4E4E] mb-2"></div>
    )} */}
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
