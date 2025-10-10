import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png';

const Navbar = () => {
    const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#2141b1] underline underline-offset-4 decoration-[#2141b1]"
      : "hover:text-[#2141b1]";

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/allapps">Apps</NavLink></li>
                    <li><NavLink to="installedapps">Installation</NavLink></li>
                </ul>
                </div>
                <NavLink to='/' className='flex items-center lg:ps-20'>
                    <img className='w-[40px] h-[40px]' src={logo} alt="" /> <span className='mx-2 font-semibold text-[#2141b1]'>HERO.IO</span>
                </NavLink>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                    <li className='font-semibold'><NavLink to="/allapps" className={navLinkClass}>Apps</NavLink></li>
                    <li className='font-semibold'><NavLink to="installedapps" className={navLinkClass}>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end md:me-6 lg:me-18">
                <NavLink to='https://github.com/FahimUdv' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" target='_blank' rel='noopener noreferrer'><FaGithub /> Contribute</NavLink>
            </div>
        </div>
    );
};

export default Navbar;