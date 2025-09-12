import React from "react";

export const CheckOutHeader = ({ header, title }) => {
  return (
    <div className="flex flex-col text-primary-800">
      <h1 className="font-bold text-4xl mb-4 lg:text-5xl">{header}</h1>
      <p className="text-2xl mb-6 lg:text-3xl ">{title}</p>
    </div>
  );
};
