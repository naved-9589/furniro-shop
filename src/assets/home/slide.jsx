import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";





const Slide = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li
        className={active ? "active mx-1 p-2  rounded-full border mb-2 border-[#B88E2F]" : "inactiv mb-2 mx-1 p-2"}
        onClick={() => onClick()}
      >
        <div className={active ? "active  rounded-full bg-[#B88E2F] h-[10px] w-[10px]" : "inactive rounded-full bg-[#D8D8D8] h-[10px] w-[10px]"}></div>
      </li>
    );
  };

  return (
    <div className="slide mt-16 bg-[#FCF8F3]">
      <div className="inner-slide max-w-[1349px] m-auto">
        <div className="flex flex-wrap ">
          <div className="md:w-[40%] max-w-[455px] ml-auto w-full md:my-0 my-10 flex flex-col justify-center">
            <div className="md:pl-0 pl-10 pr-10">
              <h4 className="md:text-[40px] text-[31px] font-poppinsbold mb-2 leading-tight">50+ Beautiful rooms inspiration</h4>
              <p className="font-poppinsmediam">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button className="mt-[25px] font-poppinssemibold hover:bg-white hover:text-[#B88E2F] transition-all bg-[#b88e2f] text-white text-sm px-9 py-2">Explore More</button>
            </div>
          </div>
          <div className="md:w-[60%] w-full">
            <Carousel
              customDot={<CustomDot />}
              centerMode={true}

              customLeftArrow={<button></button>}
              customRightArrow={<button
                className="absolute top-1/2 right-4 max-w-8 cursor-pointer text-[#B88E2F] bg-white rounded-full w-8 h-8 flex items-center justify-center"
              ><IoIosArrowForward />
              </button>}
              responsive={responsive}
              showDots={true}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="relative">
                <img src='images/slide2.png' />
                <div className="absolute bottom-2 left-4 text-sm absolute-box transition duration-1000 opacity-0">
                  <div className="bg-[#ffffffc2]  md:p-5 p-2">
                    <p>01<span className="align-middle me-1 w-4 h-[1px] bg-[#616161] inline-block"></span>Bed Room</p>
                    <h5 className="md:text-lg font-semibold">Inner Peace</h5>
                  </div>
                  <div className="absolute bottom-0 right-[-29px]">
                    <button className="hover:bg-white hover:text-[#B88E2F] text-white p-2 bg-[#B88E2F]"><GoArrowRight /></button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src='images/slide2.png' />
                <div className="absolute bottom-2 left-4 text-sm absolute-box transition duration-1000 opacity-0">
                  <div className="bg-[#ffffffc2]  md:p-5 p-2">
                    <p>01<span className="align-middle me-1 w-4 h-[1px] bg-[#616161] inline-block font-poppinsmediam"></span>Bed Room</p>
                    <h5 className="md:text-lg font-semibold  font-poppinsmediam">Inner Peace</h5>
                  </div>
                  <div className="absolute bottom-0 right-[-29px]">
                    <button className="hover:bg-white hover:text-[#B88E2F] text-white p-2 bg-[#B88E2F]"><GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
