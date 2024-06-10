import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Banner from './Banner';
import BestDeal from './homecomponents/BestDeal';
import Electronic from './homecomponents/Electronic';
import Features from './homecomponents/Features';
import AllProduct from './homecomponents/AllProduct';
import NewLaunching from './homecomponents/NewLaunching';
import SmallFeatures from './homecomponents/SmallFeatures';
import Grocery from './homecomponents/Grocery';
import Footer from './homecomponents/Footer';



const Home = () => {
  return (
    <div className="home">
      <Header />
      <NavBar />
      <Banner/>
      <BestDeal/>
      <Electronic/>
      <Features/>
      <AllProduct/>
      <NewLaunching/>
      <SmallFeatures/>
       <Grocery/> 
       <Footer/> 

    </div>
  );
}
export default Home;