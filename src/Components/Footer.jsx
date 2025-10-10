import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-6 lg:px-24">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Brand Section */}
                <div className='lg:col-span-2'>
                <div className="flex items-center mb-4">
                    <img className="w-14 h-14 rounded-lg" src={logo} alt="Logo" />
                    <h1 className="text-3xl font-bold text-white ms-3">HERO.IO</h1>
                </div>
                <p className="text-sm leading-relaxed lg:me-32">
                    Providing reliable tech solutions since 1992.  With decades of expertise, a passion for excellence, and a commitment to innovation, HERO.IO continues to shape the future of technology — one idea at a time.
                </p>
                </div>

                {/* Company Links */}
                <div>
                <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
                <ul className="space-y-2">
                    <li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
                </ul>
                </div>

                {/* Support Links */}
                <div>
                <h6 className="text-lg font-semibold text-white mb-4">Support</h6>
                <ul className="space-y-2">
                    <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                </ul>
                </div>

                {/* Social & Newsletter */}
                <div>
                <h6 className="text-lg font-semibold text-white mb-4">Connect With Us</h6>
                <div className="flex gap-5 mb-6">
                    <a href="#" ><FaFacebookF /></a>
                    <a href="#" ><FaInstagram /></a>
                    <a href="#" ><FaLinkedinIn /></a>
                    <a href="#" ><IoLogoWhatsapp /></a>
                    <a href="#" ><IoMdMail /></a>
                    {/* <a href="#" className="hover:text-white">
                    <svg xmlns="" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246..." />
                    </svg>
                    </a>
                    <a href="#" className="hover:text-white">
                    <svg xmlns="" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8H6v4h3v12h5V12h3.642l..." />
                    </svg>
                    </a>
                    <a href="#" className="hover:text-white">
                    <svg xmlns="" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477..." />
                    </svg>
                    </a> */}
                </div>

                <form className="flex items-center gap-2">
                    <input
                    type="email"
                    placeholder="Subscribe to newsletter"
                    className="input input-bordered w-full max-w-xs bg-gray-800 text-sm text-gray-200 placeholder-gray-500"
                    />
                    <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Go</button>
                </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} HERO.IO. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;