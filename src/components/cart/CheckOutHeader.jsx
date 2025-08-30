import React from "react";

export const CheckOutHeader = ({header,title}) => {
  return (
    <div className="flex flex-col text-primary-800">
      <h1 className="font-bold text-5xl mb-4">{header}</h1>
      <p className="text-3xl mb-6 ">{title}</p>
    </div>
  );
};
