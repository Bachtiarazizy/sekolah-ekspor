export const Marquee: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full overflow-hidden py-8 z-10">
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:30s]">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
