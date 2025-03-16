import React from 'react';
import logo from '../../assets/logo.png';
import logoimg from '../../assets/logoimg.png';
import cart from '../../assets/cart.png';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed w-full top-0 left-0 shadow z-50 bg-white">
            <nav>
                <div className='flex justify-between items-center'>
                    <Link to="/" className='flex items-center'>
                        <img src={logo} alt="" className='h-5 w-24' />
                        <img src={logoimg} alt="" className='h-12 -ml-6' />
                    </Link>

                    <div>
                        <ul className='flex'>
                            {[
                                { to: "/", label: "Home" },
                                { to: "/shoes", label: "Shoes" },
                                { to: "/aboutus", label: "About Us" },
                                { to: "/contactus", label: "Customer Service" }
                            ].map(({ to, label }) => (
                                <li key={to} className='text-[13px] py-[6px] 2xl:text-[16px] mx-[15px] leading-[17px] 
                                    2xl:leading-[22px] tracking-[2px] whitespace-nowrap uppercase 
                                    flex items-center'>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            `border-b-[3px] ${isActive ? "border-black" : "border-transparent"} 
                                            hover:border-black`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex justify-between items-center'>
                        <img src={cart} alt="" className='h-5 mr-4 cursor-pointer' />
                        <button className='mr-3 border px-2.5 py-1 rounded border-[#242424] 
                            hover:bg-[#242424] hover:text-white focus:bg-[#242424] focus:text-white 
                            transition-all duration-300'>
                            Login
                        </button>
                        <button className='mr-3 bg-[#242424] text-white px-2 py-1 rounded border border-transparent 
                            hover:bg-white hover:text-[#242424] hover:border-[#242424] 
                            focus:bg-white focus:text-[#242424] focus:border-[#242424] 
                            transition-all duration-300'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
