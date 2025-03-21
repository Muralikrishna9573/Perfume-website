import React from "react";

const brands = [
  "Denver",
  "Fog",
  "Calvin Klein",
  "Chloé",
  "Giorgio Armani",
  "Mugler",
  "Prada",
  "Paco Rabanne",
];

const Brands = () => {
  return (
    <div className=" overflow-hidden py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">TOP BRANDS</h2>
      <div className="whitespace-nowrap overflow-hidden ml-9 mr-9">
        <div className="mt-6 flex gap-16 animate-scroll text-xl font-medium">
          {brands.concat(brands).map((brand, index) => (
            <span key={index} className="px-4">
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Brands;
