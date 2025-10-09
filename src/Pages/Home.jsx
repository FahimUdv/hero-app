import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Loader from '../Components/Loader';


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
        <div className='flex flex-col mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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