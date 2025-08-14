export const InfoBar = ({ onClick, menuBar }) => {
  return (
    <div className="max-w-125 w-full border border-primary-900 flex justify-between text-xs font-light mx-auto mb-3">
      <div
        onClick={() => onClick("info")}
        className={`h-10 w-full flex justify-center items-center capitalize cursor-pointer ${
          menuBar === "info" && "bg-primary-900 text-white font-medium"
        }`}
      >
        <p className="font-light">information</p>
      </div>
      <div
        onClick={() => onClick("ingre")}
        className={`h-10 w-full flex justify-center items-center capitalize cursor-pointer ${
          menuBar === "ingre" && "bg-primary-900 text-white font-medium"
        }`}
      >
        <p>ingredients</p>
      </div>
      <div
        onClick={() => onClick("nutri")}
        className={`h-10 w-full flex justify-center items-center capitalize cursor-pointer ${
          menuBar === "nutri" && "bg-primary-900 text-white font-medium"
        }`}
      >
        <p>nutrition facts</p>
      </div>
    </div>
  );
};
