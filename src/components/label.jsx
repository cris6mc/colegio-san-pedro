import React from "react";

const GradientLabel = ({
  title,
  width,
  textAlign,
  justifyContent,
  color = "white",
  borderRadius = "0",
}) => {
  const gradientStyle = {
    background: "linear-gradient(to right, #E9E576, #A8DFA3, #0C95DE)", // Updated to use a valid CSS gradient
    display: "flex",
    justifyContent: justifyContent,
    borderRadius: borderRadius,
    textAlign: textAlign,
    color: color,
    width: width,
  };

  return (
    <div
      className="py-2 md:py-8 justify-center md:justify-start"
      style={gradientStyle}
    >
      <h2 className="text-center md:text-left text-3xl md:text-[4rem] font-semibold pl-[0rem] md:pl-[5rem]">
        {title}
      </h2>
    </div>
  );
};

export default GradientLabel;
