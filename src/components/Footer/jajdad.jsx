import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='mt-auto w-full'>
            <div className=''>
                <div className='flex justify-center h-16 items-center bg-yellow-300 w-full'>
                    <h1 className='font-bold mr-10'>JOIN STEPSHARK AND GET 15% OFF</h1>
                    <button className="relative font-sans text-sm tracking-widest uppercase 
                        text-white bg-black cursor-pointer border-2 px-2 py-1 md:px-3 
                        shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] 
                        select-none active:shadow-none active:translate-x-1 active:translate-y-1">
                        Sign up for free
                    </button>
                </div>
                
                <div className='bg-white flex font-light text-left mb-5 justify-between w-full px-10'>
                    <div>
                        <ul className='text-sm'>
                            <li className='font-bold uppercase mb-2'>Products</li>
                            <li>Footwear</li>
                            <li>Clothing</li>
                            <li>Accessories</li>
                            <li className='mb-4'></li>
                            <li>Outlet-Sale</li>
                            <li>New Arrivals</li>
                            <li>Flat 50% Off!</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-sm'>
                            <li className='font-bold uppercase mb-2'>Sports</li>
                            <li>CRICKET</li>
                            <li>Running</li>
                            <li>Football</li>
                            <li>Gym/Training</li>
                            <li>Tennis</li>
                            <li>Outdoor</li>
                            <li>Basketball</li>
                            <li>Swimming</li>
                            <li>Skateboard</li>
                            <li>Motorsport</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-sm'>
                            <li className='font-bold uppercase mb-2'>collections</li>
                            <li>Ultraboost</li>
                            <li>Superstar</li>
                            <li>NMD</li>
                            <li>Stan Smith</li>
                            <li>Sustainability</li>
                            <li>Predator</li>
                            <li>Parley</li>
                            <li>stepcolor</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-sm'>
                            <li className='font-bold uppercase mb-2'>support</li>
                            <li>Help</li>
                            <li>Customer Services</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping</li>
                            <li>Order Tracker</li>
                            <li>Store Finder</li>
                            <li>stepClub</li>
                            <li>stepClub Terms <br/>and conditions</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-sm'>
                            <li className='font-bold uppercase mb-2'>company info</li>
                            <li>About Us</li>
                            <li>stepshark stories</li>
                            <li>stepshark Apps</li>
                            <li>Entity Details</li>
                            <li>Press</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-sm'>
                            <li className='font-bold uppercase mb-2'>follow us</li>
                            <li>Footwear</li>
                        </ul>
                    </div>
                </div>
                
                <div className='text-gray-400 bg-[#242424] h-16 flex flex-col justify-center items-center text-xs w-full'>
                    <h3 className='flex mb-2'>
                        Privacy Policy &nbsp;&nbsp; <span>|</span> &nbsp;&nbsp; Terms and Conditions &nbsp;&nbsp; <span>|</span>  &nbsp;&nbsp; Cookies Policy
                    </h3>
                    <h3>©️2025 stepshark India Marketing Pvt. Ltd</h3>
                </div>
            </div>
        </footer>
    );
}
