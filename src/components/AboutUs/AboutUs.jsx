import React from 'react'

function AboutUs() {
  return (
    <div className='mb-20'>
      
        <div className='bg-black flex text-white items-center justify-center font-bold h-7'>
            <p className='mr-3'>XETRA 223.00</p> <p className='text-green-500 ml-3'>↑ +3.20</p>
        </div>
        <div className='flex justify-between'>
            <div className='uppercase text-left mt-72 ml-5'>
                <p className='ml-1'>Results</p>
                <h1 className='text-5xl font-bold mb-10'>stepshark reports strong <br /> results for 2024 
                    and <br /> expects top- and bottom- <br /> line 
                    momentum to <br /> continue in 2025</h1>
                    <button
                      className="relative font-sans text-sm tracking-widest uppercase 
                        text-white bg-black cursor-pointer border-2 px-4 py-3 md:px-5 
                        shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] 
                        select-none active:shadow-none active:translate-x-1 active:translate-y-1"
                        >Read More</button>
            </div>
            <div>
                <img className='w-[750px] h-[750px]'
                 src="https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_1200/v1741153824/adidas-group/press-releases/2025/2024FYResults_PressRelease_800x900px_Website_Caroussel_k65ywx.png" alt="" />
            </div>
        </div>

        <div>
                <div className="flex justify-between items-start p-10 ml-5 mr-44 text-left text-black">
                {/* Share Price Section */}
                <div>
                    <h2 className="font-bold text-2xl">SHARE PRICE <span className="text-blue-600 text-sm">MORE</span></h2>
                    <p className="text-5xl font-bold mt-2">€ 223.00</p>
                    <p className="text-green-600 mt-1">↑ € +3.20 (+1.46%)</p>
                </div>
                
                {/* Key Facts Section */}
                <div>
                    <h2 className="font-bold text-2xl">KEY FACTS 2024</h2>
                    <p className="text-5xl font-bold mt-2">€ 23,683 MILLION</p>
                    <p className="text-gray-700">Net sales</p>
                </div>
                
                {/* Employees Section */}
                <div>
                    <p className="text-5xl font-bold">62,035</p>
                    <p className="text-gray-700">Employees worldwide</p>
                </div>
                
                {/* Links Section */}
                
                </div>

                <div className='flex ml-32 font-bold'>
                <div className="flex flex-col gap-4 mt-4 text-left mr-96">
                    <h2 className="font-bold text-2xl">POPULAR</h2>
                    <a href="#" className="underline">PROFILE</a>
                    <a href="#" className="underline">FINANCIAL CALENDAR</a>
                    <a href="#" className="underline uppercase">CAREERS.stepshark-GROUP.COM ↗</a>
                </div>
                
                <div className="flex flex-col gap-4 mt-14 text-left">
                    <a href="#" className="underline">FINANCIAL PUBLICATIONS</a>
                    <a href="#" className="underline">PRESS RELEASES</a>
                    <a href="#" className="underline uppercase">REPORT.stepshark-GROUP.COM ↗</a>
                </div>
                </div>
        </div>
    </div>
  )
}

export default AboutUs