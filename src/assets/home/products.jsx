import React from 'react'

const Products = () => {

    const data = [
        { image: "image 1.png", },
        { image: "image 2.png", },
        { image: "image 3.png", },
        { image: "image 4.png", },
        { image: "image 5.png", },
        { image: "image 6.png", },
        { image: "image 7.png", },

    ]

    return (
        <div className="product max-w-[1180px] mx-auto">
            <div className='inner-product'>
                <div className="top-product text-center mb-8">
                    <h4 className="text-[40px] font-bold font-poppinsbold">Our Products</h4>
                </div>
                <div className="middle-product">
                    <div className="flex flex-wrap ">
                        {
                            data.map((curr) => {
                                return (
                                    <div className="md:w-1/4 w-full mb-[32px]">
                                        <div className="mx-4 bg-[#F4F5F7] relative group/item group">
                                            <div className="">
                                                <img className="w-full" src={`/images/${curr.image}`} />
                                            </div>
                                            <div className="p-[20px]">
                                                <h5 className="font-poppinssemibold text-lg">Syltherine</h5>
                                                <p className="font-poppinsmediam text-[#B0B0B0] text-sm">Stylish cafe chair</p>
                                                <div className="flex justify-between mt-[8px]">
                                                    <p className="font-poppinssemibold">Rp 2.500.000</p>
                                                    <p className="font-poppins text-[#B0B0B0] line-through">Rp 3.500.000</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-[35px] right-[25px]">
                                               <span style={{ background: curr.image == "image 5.png" ? "#2EC1AC" :"" }} className="bg-[#E97171] text-white flex justify-center items-center h-[40px] w-[40px] rounded-full font-poppinsmediam text-sm">{curr.image !== "image 5.png" ? "-30%" : "NEW"}</span>
                                            </div>
                                            <div className="caption bg-[#1e1d1d8c] overflow-hidden absolute w-full bottom-0 left-0 right-0 h-0 group/edit transition-all duration-200  group-hover:h-full">
                                                <div className="flex flex-col justify-center items-center h-full">
                                                    <button className="bg-white py-2 px-6 text-sm text-[#B88E2F] font-semibold hover:text-white hover:bg-[#B88E2F]">Add To Cart</button>
                                                    <div className="flex justify-around w-full mt-[24px]">
                                                        <p className="text-white text-sm font-semibold flex items-center"><span className="me-2"><img src='/images/share.png' /></span><span>Share</span></p>
                                                        <p className="text-white text-sm font-semibold flex items-center"><span className="me-2"><img src='/images/compare.png' /></span><span>Compare</span></p>
                                                        <p className="text-white text-sm font-semibold flex items-center"><span className="me-2"><img src='/images/like.png' /></span><span>Like</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="product-button text-center">
                        <button className="border hover:bg-[#b88e2f] hover:text-white transition-all border-[#B88E2F] text-[#B88E2F] font-poppinssemibold text-sm px-16 py-2">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
