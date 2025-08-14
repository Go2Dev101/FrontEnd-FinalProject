export const Boxer = ({children,className}) => {
  return (
    <div className="min-h-[calc(100vh-224px)] flex flex-col bg-background-100 px-4 sm:px-8 py-6">
      <section className={`px-4 py-6 bg-background-50 rounded-xl flex-1 ${className}`}>
        {children}
      </section>
    </div>
  );
};
