import React from "react";

const ChartsCard = ({ width, heading, subHeading, options, children }) => {
  return (
    <section
      className={`h-[220px] bg-[#1E1E1E] flex p-3 rounded-lg flex-col`}
      style={{ width: width }}
    >
      <header className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-[16px] font-bold">{heading}</p>
          <p className="text-[14px]">{subHeading}</p>
        </div>
        {options ? options : null}
      </header>
      <main>
        {/* Chat */}
        {children}
      </main>
    </section>
  );
};

export default ChartsCard;
