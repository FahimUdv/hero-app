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

    const {title, image, downloads, ratingAvg, ratings, description} = app || {};

    const handleAddToInstalled = () => {
        const existingList = JSON.parse(localStorage.getItem('installedApps'));
        let updatedList = [];
        if (existingList) {
            const isDuplicate = existingList.some(a => a.id === app.id);
            if (isDuplicate) {
                alert('App is already installed.');
                return;
            }
            updatedList = [...existingList, app];
        } else {
            updatedList.push(app);
        }
        localStorage.setItem('installedApps', JSON.stringify(updatedList))
    }

    return (
        <div className="card bg-base-100 border-1 border-[#cdcdcd] pb-3 shadow-sm">
            <figure className='m-3'>
                <img
                src={image}
                alt="Shoes" />
            </figure>
            <div className="py-1 px-3">
                <h2 className="text-base font-semibold pb-3">
                {title}
                </h2>
                <div className="flex justify-between pt-1">
                    <div>
                        <div className="flex items-center"><FaDownload /><span className='px-1'> {downloads}</span></div>
                    </div>
                    <div>
                        <div className="flex items-center"><FaStar /><span className='px-1'> {ratingAvg}</span></div>
                    </div>
                </div>
            </div>
            <button onClick={handleAddToInstalled} className='btn btn-primary mx-auto'>Install App</button>

            
            <div className="space-y-3 mt-6 px-4">
                <h1 className="text-xl font-semibold">Ratings</h1>
                <div className="bg-base-100 border rounded-xl p-4 h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={ratings}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
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

                <div>
                    <h1 className='text-xl font-semibold py-4'>Description</h1>
                    <p>{description}</p>
                </div>
            </div>



        </div>
    );
};

export default AppDetails;