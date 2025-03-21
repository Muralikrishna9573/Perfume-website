import React, { useState, useEffect } from 'react';

const images = [
"https://beardo.in/cdn/shop/files/Beardo_WS_EDP_A__Banner_2160x2160_05_8af08840-b055-43c7-8e02-5af85fc34bd8.jpg?v=1742191482&width=1946",
"https://beardo.in/cdn/shop/files/8_e3275d88-6edd-4498-8fed-5bf202ca205c.jpg?v=1742191299&width=1946",
"https://bellavitaluxury.co.in/cdn/shop/files/Offer-Mobile.jpg?v=1709106970&width=800",
"https://www.maharlikaperfumes.com/wp-content/uploads/2023/10/10-Colognes-Women-Absolutely-LOVE-On-Men.webp"
];

const Banner = () => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
}, []);

return (
    <div className="relative w-screen h-[400px] md:h-[700px] flex items-center justify-center overflow-hidden">
    
    {/* Image Slider */}
    {images.map((img, index) => (
        <img 
        key={index}
        src={img} 
        alt="Perfume Banner"
        className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
    ))}

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Banner Content */}
    <div className="relative text-center text-white px-6 md:px-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Discover Your Signature Scent
        </h2>
        <p className="text-lg md:text-2xl mb-6">
        Explore the latest collections & exclusive offers.
        </p>
        <a 
        href="#shop-now" 
        className="bg-orange-700 hover:bg-orange-700 transition px-6 py-3 text-lg font-semibold rounded-full shadow-lg"
        >
        Shop Now
        </a>
    </div>
    </div>
);
};

export default Banner;
