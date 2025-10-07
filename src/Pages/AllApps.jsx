import React from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';

const AllApps = () => {
    const {apps} = useApps();
    return (

        <div className='flex flex-col mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    apps.map(app => (
                        <AppCard key={app.id} app={app}></AppCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AllApps;