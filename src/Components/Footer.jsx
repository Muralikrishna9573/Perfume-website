import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          {/* Quick Menu */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">QUICK MENU</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Blogs</p>
            <p>Rewards Program</p>
            <p>Track Your Order</p>
            <p>Order Cancellations</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Return Policy</p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
          </div>
  
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">CATEGORIES</h3>
            <p>Perfumes</p>
            <p>Gift Sets</p>
            <p>Fragrance Mists</p>
            <p>Miniatures</p>
            <p>Deodorants</p>
            <p>Deodorant Stick</p>
            <p>After Shaves</p>
            <p>Shower Gel</p>
            <p>Body Lotion</p>
          </div>
  
          {/* Top Brands */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">TOP BRANDS</h3>
            <p>Azzaro</p>
            <p>Burberry</p>
            <p>Bvlgari</p>
            <p>Calvin Klein</p>
            <p>Davidoff</p>
            <p>Hugo Boss</p>
            <p>Paco Rabanne</p>
            <p>Versace</p>
            <p>Victoria's Secret</p>
          </div>
  
          {/* Sign Up Section */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">SIGN UP AND SAVE</h3>
            <p className="mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="border-b border-gray-500 pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white outline-none w-full placeholder-gray-400"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF/>
              <FaInstagram/>
              <FaLinkedin/>
              <FaPinterest/>
              <FaYoutube/>
            </div>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="text-center text-gray-400 text-xs mt-8">
          © 2025 Perfume.com All transactions on Perfume.com are secured by SSL and protected via multiple payment gateways.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  