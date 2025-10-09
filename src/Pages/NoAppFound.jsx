import React from 'react';
import noAppImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const NoAppFound = () => {
    return (
        <div>
            <div><img className='mx-auto md:pt-16 lg:pt-16 md:pb-10 lg:pb-8' src={noAppImg} alt="" /></div>
            <h1 className='text-center text-3xl font-bold'>Oops, page not found!</h1>
            <p className='text-center text-sm text-[#627382] p-4'>The App you are requesting is not found on our system.  please try another apps</p>
            <div className='flex justify-center mb-12'>
                <Link to='/allapps' className='btn mt-4 px-5 py-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mx-auto text-center'>Go Back</Link>
            </div>
        </div>
    );
};

export default NoAppFound;