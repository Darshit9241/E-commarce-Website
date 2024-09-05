import React from "react";

export default function Section2() {
  return (
    <div className="flex justify-center cursor-pointer">
      <div className="flex flex-wrap justify-center gap-8 md:gap-14 py-14 md:py-28">
        {["Bedroom", "Living", "Dining", "Lounge", "Office Chair"].map((label, index) => (
          <div
            key={index}
            style={{ border: "2px solid black" }}
            className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <img
                src={`../../images/section2/img${index + 1}.jpg`}
                alt={label}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 md:mb-4"
              />
              <h1 className="text-lg md:text-xl text-center">{label}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
