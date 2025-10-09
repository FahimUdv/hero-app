import React from 'react';
import errorImg from '../assets/error-404.png';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 max-w-screen-xl mx-auto w-full p-4 md:p-8 lg:px-12 '>
                <div><img className='mx-auto md:pt-16 lg:pt-16 md:pb-10 lg:pb-8' src={errorImg} alt="" /></div>
                <h1 className='text-center text-3xl font-bold'>Oops, page not found!</h1>
                <p className='text-center text-sm text-[#627382] p-4'>The page you are looking for is not available.</p>
                <div className='flex justify-center mb-12'>
                    <Link to='/' className='btn mt-4 px-5 py-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mx-auto text-center'>Go Back</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;