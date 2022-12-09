import React from "react"
import SlideCard from "./SlideCard"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard />
        </div>
      </section>
      <div className="container1">
        <img src="https://th.bing.com/th/id/OIP.LpwgX6pB1rjrPAY_DlWJ8QHaDt?pid=ImgDet&rs=1" height="534px" width="574px" margin="12px 12px" alt="" srcset="" />
      </div>
    </>
  )
}

export default SliderHome
