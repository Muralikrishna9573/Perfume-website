import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Beardo Whisky Smoke", description: "Bold and intense fragrance for men.", price: "₹999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb91GPI8y6U8O_Zwwe7RM3AUgPzUiZdyUdA&s" },
  { id: 2, name: "Envy Noir", description: "A long-lasting, refreshing scent.", price: "₹799", image: "https://cdn.dmart.in/images/products/JAN140005272xx31JAN24_5_B.jpg" },
  { id: 3, name: "Bella Vita CEO Man", description: "A luxurious and sophisticated perfume.", price: "₹1,299", image: "https://images.unsplash.com/photo-1585218334450-afcf929da36e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Beardo Godfather", description: "A classic, masculine fragrance.", price: "₹1,499", image: "https://www.memoparis.com/cdn/shop/files/04.2_cuirs_nomades_ef8d3918-0284-46c9-9481-0ae979718d40.jpg?v=1741878453&width=600" },
  { id: 5, name: "Denver", description: "Fresh and floral notes for daily wear.", price: "₹699", image: "https://denverformen.com/cdn/shop/products/Group1_300x.jpg?v=1721134405" }
];

const ProductCards = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Featured Perfumes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:opacity-90"
          >
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold truncate">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-orange-600">{product.price}</span>
                <Link to={`/product/${product.id}`} className="text-orange-600 font-semibold hover:underline">
                  View → 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
