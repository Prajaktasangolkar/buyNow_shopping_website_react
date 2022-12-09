import React, { useContext } from 'react'
import { AppContext } from './context/productcontext';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const About = () => {
  const {myName}=useContext(AppContext)
  const data = {
    name: "thapa store",
  };

  return (
    <>
    {myName}
    <HeroSection myData={data} />
    
      <Services />
      <Trusted />
    </>
  )    
    
}

export default About