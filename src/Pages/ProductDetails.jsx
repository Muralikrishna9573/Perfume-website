import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Beardo Whisky Smoke", description: "Bold and intense fragrance for men.", price: "₹999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb91GPI8y6U8O_Zwwe7RM3AUgPzUiZdyUdA&s" },
  { id: 2, name: "Envy Noir", description: "A long-lasting, refreshing scent.", price: "₹799", image: "https://cdn.dmart.in/images/products/JAN140005272xx31JAN24_5_B.jpg" },
  { id: 3, name: "Bella Vita CEO Man", description: "A luxurious and sophisticated perfume.", price: "₹1,299", image: "https://images.unsplash.com/photo-1585218334450-afcf929da36e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Beardo Godfather", description: "A classic, masculine fragrance.", price: "₹1,499", image: "https://www.memoparis.com/cdn/shop/files/04.2_cuirs_nomades_ef8d3918-0284-46c9-9481-0ae979718d40.jpg?v=1741878453&width=600" },
  { id: 5, name: "Denver", description: "Fresh and floral notes for daily wear.", price: "₹699", image: "https://denverformen.com/cdn/shop/products/Group1_300x.jpg?v=1721134405" }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-red-500">Product Not Found</h2>
        <Link to="/" className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 text-center">
      <h2 className="text-4xl font-semibold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-96 mx-auto mb-6 shadow-lg rounded-lg" />
      <p className="text-lg text-gray-700">{product.description}</p>
      <p className="text-2xl font-bold text-orange-600 mt-4">{product.price}</p>
      <Link to="/" className="mt-6 inline-block bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetails;
