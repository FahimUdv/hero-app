import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import NoSearchResults from './NoSearchResults';

const AllApps = () => {
    const {apps} = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ?
        apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term)
        )
        : apps;

    return (

        <div className='flex flex-col mx-auto'>
            <div className='flex justify-between py-6'>
                <div>
                    <h1 className='text-2xl font-semibold'><span>{`(${searchedApps.length})`}</span> Apps Found</h1>
                </div>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} type="search" required 
                            placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            

            {searchedApps.length === 0 ? (
                <NoSearchResults query={search} /> 
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchedApps.map(app => (
                    <AppCard key={app.id} app={app} />
                ))}
                </div>
            )}
        </div>
    );
};

export default AllApps;