import React from 'react'

const Hero = () => {
  return (
    <div className="hero relative md:mx-auto max-w-fit">
        <div className="herobg">
            <img src="/images/scandinavian-interior-mockup-wall-decal-background 1.png"/>
        </div>
        <div className="hero-box bg-[#FFF3E3] max-w-[640px] relative md:absolute md:right-[59px] md:top-[157px] ">
            <div className="pt-[60px] pb-[37px] ps-[40px] pe-[40px]">
                <h6 className="text-[16px]">New Arrival</h6>
                <h4 className="md:text-[52px] text-[31px] text-[#B88E2F] ">Discover Our New Collection</h4>
                <p className="md:text-[18px] text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim velit deserunt, ex nam quod</p>
                <button className="text-[16px] text-white bg-[#B88E2F] md:px-[72px] px-10 md:py-[25px] py-4 mt-[46px] transition-all hover:bg-white hover:text-[#B88E2F]">BUY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
