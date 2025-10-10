import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FaDownload, FaStar } from 'react-icons/fa6';
import NoAppFound from './NoAppFound';
import { Slide, ToastContainer, toast } from 'react-toastify';
import downloadImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';

const AppDetails = () => {
    const {id} = useParams();
    const {apps, loading, error} = useApps();
    const app = apps.find(a => String(a.id) === id);
    
    if(loading) {
        return <p>Loading...</p>
    }
    if (!app) {
        return <NoAppFound />;
    }

    const {title, image, downloads, ratingAvg, ratings, description, companyName, reviews, size} = app || {};

    const handleAddToInstalled = () => {
        const existingList = JSON.parse(localStorage.getItem('installedApps'));
        let updatedList = [];
        if (existingList) {
            const isDuplicate = existingList.some(a => a.id === app.id);
            if (isDuplicate) {
                toast.error('App is already Installed.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                return;
            }
            updatedList = [...existingList, app];
        } else {
            updatedList.push(app);
        }
        localStorage.setItem('installedApps', JSON.stringify(updatedList))
        toast.success('Congrats! Your app is installed.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
    }

    return (
        <div className="border-[#cdcdcd] lg:pt-16 pb-3 shadow-sm lg:px-24">

            <div className='flex'>
                <div>
                    <img className='h-80 overflow-hidden flex justify-center items-center bg-white rounded-md' src={image} alt="" />
                </div>
                <div className='lg:ps-12'>
                    <h1 className='text-3xl font-bold mb-3'>{title}</h1>
                    <p>Developed by <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>
                    <hr className='my-6 text-[#dbdbdb] w-full' />
                    <div className='grid grid-cols-3 gap-6 lg:gap-24'>
                        <div>
                            <img src={downloadImg} alt="" />
                            <p className='my-3'>Downloads</p>
                            <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div>
                            <img src={starImg} alt="" />
                            <p className='my-3'>Average Ratings</p>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={reviewImg} alt="" />
                            <p className='my-3'>Total Reviews</p>
                            <h1 className='text-4xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <button onClick={handleAddToInstalled} className='btn bg-[#00D390] text-white py-4 px-12 mx-auto mt-6'>Install Now ({size} MB)</button>
                    <ToastContainer />
                </div>
                
            </div>
            <hr className='my-6 text-[#dbdbdb] w-full' />

            
            <div className="space-y-3 mt-6">
                <h1 className="text-xl font-semibold">Ratings</h1>
                <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={ratings}
                    layout="vertical"
                    margin={{ top: 10, right: 30, bottom: 10 }}
                    >
                    <XAxis type="number" />
                    <YAxis
                        type="category"
                        dataKey="name"
                        width={70}
                        tick={{ fontSize: 13 }}
                        reversed
                    />
                    <Tooltip cursor={{ fill: '#f5f5f5' }} />
                    <Bar dataKey="count" fill="#FF8C00" barSize={20} radius={[4, 4, 4, 4]} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
                <hr className='my-6 text-[#dbdbdb] w-full' />

                <div className='mb-12'>
                    <h1 className='text-xl font-semibold py-4'>Description</h1>
                    <p>{description}</p>
                </div>
            </div>



        </div>
    );
};

export default AppDetails;