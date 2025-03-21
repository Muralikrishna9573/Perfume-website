import { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); 

    const handleLogout = () => {
  
      navigate('login'); 
    };

  const messages = [
    "ADDITIONAL POINTS ON PREPAID ORDERS",
    "7 DAYS RETURN ON SEALED PRODUCTS",
    "FREE SHIPPING ON ORDERS OVER ₹1000"
  ];

  // Rotate messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Men", href: "#", hasDropdown: true },
    { label: "Women", href: "#", hasDropdown: true },
    { label: "Brands", href: "#", hasDropdown: true },
    { label: "Sale", href: "#", hasDropdown: true },
    { label: "New", href: "#" },
  ];

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg bg-black rounded-md" : "bg-transparent"}`}>
      {/* Announcement Bar */}
      <div className="bg-orange-800 text-white text-sm px-4 py-2 md:px-6 md:py-3 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center justify-center gap-4">
        <button 
            className="bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-700 transition text-white"
            onClick={handleLogout}
          >
            Login
          </button>
          <span className="text-sm hidden md:inline">Rewards Program</span>
        </div>
        <div className="text-center font-medium">{messages[messageIndex]}</div>
        <div className="flex items-center gap-3 text-2xl">
          <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaPinterest /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaLinkedin /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`px-4 py-3 md:px-6 md:py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? "py-2" : ""}`}>
        <div className="flex items-center gap-4">
          <FiSearch className="text-2xl cursor-pointer hover:text-white transition" />
          <a href="/" className="text-2xl md:text-3xl font-bold text-white">Perfume 24x7</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.href} className="flex items-center gap-1 hover:text-gray-300 transition">
                {item.label}
                {item.hasDropdown && <FiChevronDown className="text-sm" />}
              </a>
              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md w-40">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <FiUser className="text-2xl cursor-pointer hover:text-gray-300 transition" />
          <FiShoppingCart className="text-2xl cursor-pointer hover:text-gray-300 transition" />
          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-3 px-6 text-gray-700 hover:bg-gray-100 transition" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
