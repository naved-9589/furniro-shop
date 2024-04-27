import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Maasonry = () => {
    return (
        <div className="mosonry mt-[69px] pb-[50px] border-b max-w-[1349px] mx-auto container">
            <div className="inner-masonry">
                <div className="top-mesonry text-center mb-4">
                    <h5 className="text-lg font-poppinssemibold">Share your setup with</h5>
                    <h2 className="text-4xl font-poppinsbold">#FuniroFurniture</h2>
                </div>
                <div className="bottom-masonry">
                    <ResponsiveMasonry

                        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 5 }}
                    >
                        <Masonry>
                            <div className="px-1 py-1">
                                <img src='/images/Rectangle2.png' />
                            </div>
                            <div className="px-1 py-1">
                                <img src='/images/Rectangle3.png' />
                            </div>
                            <div className="px-1 py-1">
                                <img src='/images/Rectangle4.png' />
                            </div>
                            <div className=" px-1 py-1 ">
                                <img src='/images/Rectangle2.png' />
                            </div>
                            <div className=" px-1 py-1 ">
                                <img src='/images/Rectangle3.png' />
                            </div>
                            <div className=" px-1 py-1  ">
                                <img src='/images/Rectangle4.png' />
                            </div>
                            <div className=" px-1 py-1 ">
                                <img src='/images/Rectangle2.png' />
                            </div>
                            <div className=" px-1 py-1">
                                <img src='/images/Rectangle4.png' />
                            </div>
                            <div className=" px-1 py-1">
                                <img src='/images/Rectangle5.png' />
                            </div>
                            <div className=" px-1 py-1">
                                <img src='/images/Rectangle2.png' />
                            </div>
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    )
}

export default Maasonry
