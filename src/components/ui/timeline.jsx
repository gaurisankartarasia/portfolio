import React from "react";

export const Timeline = ({ data }) => {
  return (
    <div className="w-full font-sans">
      <div className="relative max-w-6xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-[#0a1526] flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="h-3.5 w-3.5 rounded-full bg-blue-600 dark:bg-sky-400 border border-blue-200 dark:border-blue-800" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 font-mono">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4 text-left">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 font-mono">
                  {item.title}
                </h3>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          className="absolute md:left-8 left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-600 via-sky-400/60 to-transparent rounded-full"
        />
      </div>
    </div>
  );
};
