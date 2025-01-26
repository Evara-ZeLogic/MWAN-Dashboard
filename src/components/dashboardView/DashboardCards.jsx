import React from "react";
import flag from "../../assets/png/flag.png";
import finance from "../../assets/png/finance.png";
import invoice from "../../assets/png/Invoice.png";
import percent from "../../assets/png/Percent.png";
import clockWise from "../../assets/png/Clockwise.png";

const Card = ({ title, value, img, bgColor }) => {
  const formNumbers = (number) => {
    const suffixes = ["H", "K", "M"];
    const numberToString = number.toString();
    if (numberToString.length < 6) {
      return `${number.toLocaleString("en", { useGrouping: true })}`;
    } else {
      let newTotal = number;
      const orderOfMagnitude = Math.min(
        Math.floor(Math.log10(newTotal) / 3),
        suffixes.length - 1
      );
      let newNumberFormatted =
        (newTotal / Math.pow(1000, orderOfMagnitude)).toFixed(1) +
        suffixes[orderOfMagnitude];
      return `${newNumberFormatted}`;
    }
  };
  return (
    <div className="bg-[#1E1E1E] w-[19%] h-[75px] rounded-lg p-4 flex gap-4">
      <div className={`flex gap-4 items-center`}>
        <img
          src={img}
          alt="icon"
          className={`w-10 h-10  p-2 rounded-lg`}
          style={{ backgroundColor: bgColor }}
        />
        <div className="flex flex-col">
          <p className="text-[14px] text-[#c7c6c6]">{title}</p>
          <p className="text-[16px] font-bold">{formNumbers(value)}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  const cardData = [
    {
      title: "إجمالي عدد المشاريع",
      id: 1,
      value: 181,
      img: flag,
      bgColor: "#253C25",
    },
    {
      title: "قيمة العقود الحالية",
      id: 2,
      value: 886217091,
      img: finance,
      bgColor: "#3A302A",
    },
    {
      title: "المفوتر",
      id: 3,
      value: 801369772,
      img: invoice,
      bgColor: "#242A3A",
    },
    {
      title: "المتبقي للفوترة",
      id: 4,
      value: 113970957,
      img: clockWise,
      bgColor: "#1D323C",
    },
    {
      title: "نسبة الصرف",
      id: 5,
      value: 0.05,
      img: percent,
      bgColor: "#341833",
    },
  ];
  return (
    <section className="w-full flex justify-between">
      {cardData.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            img={card.img}
            bgColor={card.bgColor}
          />
        );
      })}
    </section>
  );
};

export default DashboardCards;
