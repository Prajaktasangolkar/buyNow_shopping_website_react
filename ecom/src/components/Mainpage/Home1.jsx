import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {/* fashion type whle box and slider */}
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
