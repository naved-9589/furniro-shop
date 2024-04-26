import React, { useState } from 'react'

const Header = () => {

    const [toggle, settoggle] = useState(false);

    const handleclick = ()=>{
         settoggle(!toggle);
    }

  return (
    <div className="max-w-[1300px] md:mx-auto py-[29px]  relative">
        <div className="header flex justify-between items-center mx-[10px] md:mx-0">
            <div>
                <img className="w-[80%] md:w-full" src='/images/logo.png'/>
            </div>
            <div className="md:block hidden">
                <ul>
                    <li className="inline-block text-base me-[37px] hover:text-[#B88E2F] cursor-pointer">Home</li>
                    <li className="inline-block text-base me-[37px] hover:text-[#B88E2F] cursor-pointer">Shop</li>
                    <li className="inline-block text-base me-[37px] hover:text-[#B88E2F] cursor-pointer">About</li>
                    <li className="inline-block text-base hover:text-[#B88E2F] cursor-pointer">Contact</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="inline-block me-2 md:me-[46px] cursor-pointer"><img className="md:w-auto w-[60%]" src='/images/Vector1.png'/></li>
                    <li className="inline-block me-2 md:me-[46px] cursor-pointer"><img className="md:w-auto  w-[60%]" src='/images/Vector2.png'/></li>
                    <li className="inline-block me-2 md:me-[46px] cursor-pointer"><img className="md:w-auto  w-[60%]" src='/images/Vector3.png'/></li>
                    <li className="inline-block cursor-pointer"><img className="md:w-auto w-[60%]" src='/images/Vector4.png'/></li>
                </ul>
            </div>
            <div className="md:hidden visible">
                <span onClick={handleclick} className="text-lg cursor-pointer"> &#9776;</span>
            </div>
        </div>
        <div style={{height: toggle ? "140px" : "" }} className="mobile-menu transition-all mt-4 text-center  bg-white absolute z-10 w-full h-0 block overflow-hidden">
            
            <div className="md:hidden visible">
                <ul>
                    <li className=" text-base my-2 hover:text-[#B88E2F] cursor-pointer">Home</li>
                    <li className=" text-base my-2 hover:text-[#B88E2F] cursor-pointer">Shop</li>
                    <li className=" text-base my-2 hover:text-[#B88E2F] cursor-pointer">About</li>
                    <li className=" text-base my-2 hover:text-[#B88E2F] cursor-pointer">Contact</li>
                </ul>
            </div>
    
        </div>
    </div>
  )
}

export default Header
