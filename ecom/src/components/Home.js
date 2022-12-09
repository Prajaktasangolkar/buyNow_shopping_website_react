import React from 'react'
import styled from "styled-components"
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import Home1 from '../components/Mainpage/Home1';
import Discount from './discount/Discount';
import NewArrivals from './newarrivals/NewArrivals';
import Footer from './Footer';
import FeatureProduct from './FeatureProduct';
const Home = () => {
 

  return (
    <>
    {/* <HeroSection myData={data} /> */}
    <Home1/>
    <FeatureProduct/>
    <Discount/>
    <NewArrivals/>
      <Services />
      <Trusted />
      <Footer/>
    </>
      
    
  )
}


export default Home