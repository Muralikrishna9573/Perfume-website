import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner';
import Topcategories from '../Components/TopCategories';
import Brands from '../Components/Brands';
import ProductCards from '../Components/ProductCards';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div>
       <Navbar />
       <Banner />
       <Brands />
       <Topcategories />
       <ProductCards/>
         <Footer />
       

      
    </div>
  )
}

export default Home
