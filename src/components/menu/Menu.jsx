export const Menu = ({children,className}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-100 px-4 sm:px-8 py-6">
      <ul className="flex gap-2 sm:gap-4">
        <li className={`px-3 sm:px-4 py-2 cursor-pointer bg-background-50 rounded-t-xl `}>Menu set</li>
        {/* <li className={`px-3 sm:px-4 py-2 cursor-pointer`}>Menu plan</li> */}
        {/* <li className={`px-3 sm:px-4 py-2 cursor-pointer`}>All menu</li> */}
      </ul>
      <section className={`px-4 py-6 bg-background-50 rounded-b-xl rounded-r-xl flex-1 ${className}`}>
        {children}
      </section>
    </div>
  );
};
