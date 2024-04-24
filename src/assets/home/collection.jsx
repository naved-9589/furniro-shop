import React from 'react'

const Collection = () => {
  return (
    <div className="collaction max-w-[1180px] mx-auto mt-[54px]"> 
       <div className="top-collection text-center mb-16">
            <h4 className="font-semibold text-3xl">Browse The Range</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       </div>
       <div className="bottom-collection">
            <div className="flex flex-wrap">
                 <div className="sm:w-1/3 mb-[54px]">
                    <div className="text-center mx-[10px]">
                        <img className="rounded-lg" src='/images/image-collection.png'/>
                        <h6 className="font-semibold mt-7">Dining</h6>
                    </div>
                 </div>
                 <div className="sm:w-1/3 mb-[54px]">
                    <div className="text-center mx-[10px]">
                        <img src='/images/image-collection1.png'/>
                        <h6 className="font-semibold mt-7">Living</h6>
                    </div>
                 </div>
                 <div className="sm:w-1/3 mb-[54px]">
                    <div className="text-center mx-[10px]">
                        <img src='/images/image-collection2.png'/>
                        <h6 className="font-semibold mt-7">Bedroom</h6>
                    </div>
                 </div>
            </div>
       </div>
    </div>
  )
}

export default Collection
