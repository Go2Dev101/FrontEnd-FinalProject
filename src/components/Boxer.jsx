export const Boxer = ({children,className}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-100 px-8 py-6">
      <section className={`px-4 py-6 bg-background-50 rounded-b-xl rounded-r-xl flex-1 ${className}`}>
        {children}
      </section>
    </div>
  );
};
