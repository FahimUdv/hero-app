import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Loader from '../Components/Loader';
import heroImg from '../assets/hero.png';
import PlayStoreBtn from '../assets/Play-Store-btn.png';
import AppStoreBtn from '../assets/App-Store-btn.png';


const Home = () => {
    // const apps = useLoaderData();
    const {apps, loading, error} = useApps();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
            if (!loading) {
            const timer = setTimeout(() => setShowLoader(false), 600);
            return () => clearTimeout(timer);
            }
        }, [loading]);

        if (loading || showLoader) {
            return <Loader />;
        }

    if (error) {
        return (
        <div className="text-center text-red-500 mt-10">
            Failed to load apps. Please try again.
        </div>
        );
    }

    const trendingApps = apps.slice(0,8);
    return (
        <div className='flex flex-col mx-auto my-12'>
            <div className='mx-auto'>
                <h1 className='text-center text-[60px] font-bold'>We Build</h1>
                <h1 className='text-center text-[60px] font-bold mt-[-10px] mb-3'><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive </span><span>Apps</span></h1>
                <p className='text-center text-[#627382] mb-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center mb-8'>
                    <Link to='https://play.google.com/store/games?hl=en' target='_blank' rel='noopener noreferrer'><img className='me-2' src={PlayStoreBtn} alt="" /></Link>
                    <Link to='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer'><img className='ms-2' src={AppStoreBtn} alt="" /></Link>
                </div>
                <div className='flex justify-center'>
                    <img src={heroImg} alt="" />
                </div>
                <div className="w-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-80 flex flex-col justify-center">
                    <h1 className="text-white text-[40px] lg:mb-10 font-bold text-center">Trusted by Millions, Built for You</h1>
                    <div className='grid lg:grid-cols-3 gap-4 text-white justify-center lg:px-32'>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-sm'>Total Downloads</p>
                            <h1 className='text-4xl font-bold py-2'>29.6M</h1>
                            <p className='text-sm'>21% more than last month</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-sm'>Total Reviews</p>
                            <h1 className='text-4xl font-bold py-2'>906K</h1>
                            <p className='text-sm'>46% more than last month</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-sm'>Active Apps</p>
                            <h1 className='text-4xl font-bold py-2'>132+</h1>
                            <p className='text-sm'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-[32px] font-bold mt-12'>Trending Apps</h1>
                <p className='text-center text-[#627382] mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mx-24 lg:mt-8'>
                {
                    trendingApps.map(app => (
                        <AppCard key={app.id} app={app}></AppCard>
                    ))
                }
            </div>
            <Link to='/allapps' className='btn mt-10 px-5 py-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mx-auto'>Show All</Link>
        </div>
        
    );
};

export default Home;