import React from 'react'

const Footer = () => {
    return (
        <div className="footer max-w-[1180px] mx-auto">
            <div className="inner-footer md:mt-[50px] mt-8">
                <div className="flex flex-wrap border-b-2 pb-[49px] md:text-start text-center">
                    <div className="md:w-[20%] w-full mb-8 md:mb-0">
                        <div className="pe-0 md:pe-5">
                            <h2 className="font-bold text-lg">Funiro.</h2>
                            <p className="text-sm text-[#9F9F9F] mt-8">400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
                        </div>
                    </div>
                    <div className="md:w-[80%] w-full">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/3 w-1/2">
                                <ul>
                                    <li className="text-[#9F9F9F]">Links</li>
                                    <li className="mt-8">Home</li>
                                    <li className="mt-8">Shop</li>
                                    <li className="mt-8">About</li>
                                    <li className="mt-8">Contact</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-1/2">
                                <ul>
                                    <li className="text-[#9F9F9F]">Help</li>
                                    <li className="mt-8">Payment Options</li>
                                    <li className="mt-8">Returns</li>
                                    <li className="mt-8">Privacy Policies</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full md:mt-0 mt-5">
                                <ul>
                                    <li className="text-[#9F9F9F]">Newsletter</li>
                                    <li className="mt-8 flex justify-center md:justify-normal" >
                                        <input className="outline-0 border-b-2 border-black" placeholder='Enter Your Email Address' type="text"/>
                                        <button className="border-b-2 ms-2 border-black hover:text-[#b88e2f]">SUBSCRIBE</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright py-[35px] ms-10 md:ms-0">
                    <h5>2023 furino. All rights reverved</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
