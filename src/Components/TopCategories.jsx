import React from 'react';

const categories = [
  {
    name: "PERFUMES",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlngSgwJqrs7vbCEbFTKQaKv99ng83r2Gxw&s    ",
  },
  {
    name: "GIFT SETS",
    image: "https://envyfragrances.com/cdn/shop/files/2.jpg?v=1701411578",
  },
  {
    name: "PREMIUM DEODORANTS",
    image: "https://aromeworld.com/cdn/shop/products/TajEditionPremiumDeos_1080x.jpg?v=1678450239 ",
  },
  {
    name: "BODY LOTIONS",
    image: "https://st2.depositphotos.com/1745098/9937/i/450/depositphotos_99374314-stock-photo-skincare-and-cosmetic-products-on.jpg",
  },
  {
    name: "FRAGRANCE MISTS",
    image: "https://assets.teenvogue.com/photos/665a021a83f5ccefca889dc7/1:1/w_2700,h_2700,c_limit/TEVOG_5.30_Best-Body-Mists.jpg",
  },{
    name: "AFTER SHAVES",
    image: "https://www.themancompany.com/cdn/shop/products/5_25c483bb-1523-4306-9896-a780c19ef000.jpg?v=1683793746",
  }
];

const TopCategories = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold mb-10">TOP CATEGORIES</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center m-5">
            <div className="w-40 h-40 flex  items-center justify-center border-2 border-dotted border-orange-500 rounded-full p-4">
              <img src={category.image} alt={category.name} className="w-28 h-28 object-fill rounded-full" />
            </div>
            <p className="mt-4 text-lg font-serif">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
