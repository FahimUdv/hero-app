import React, { useEffect, useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import downloadImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';


const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installedApps'));
        if (savedList) {
            setInstalledApps(savedList);
        }
    }, []);
    const sortedItem = (
        () => {
        if (sortOrder === 'size-asc') {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads);
        }else if(sortOrder === 'size-dsc') {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads);
        }else {
            return installedApps;
        }
    } 
    ) ();


    const handleRemove = id => {
        const existingList = JSON.parse(localStorage.getItem('installedApps'));
        let updatedList = existingList.filter(a => a.id !== id);
        setInstalledApps(updatedList);
        localStorage.setItem('installedApps', JSON.stringify(updatedList))
        toast.warn('App is Uninstalled!', {
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
        <div className='lg:mx-24 lg:my-16'>
            <h1 className='text-center text-[42px] font-bold'>Your Installed Apps</h1>
            <p className='text-center text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center mt-12'>
                <h1 className='text-2xl font-semibold mb-12'>Installed apps : <span>({installedApps.length})</span></h1>
                {/* <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Hover</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div> */}
                <label className='form-control w-full max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort By Size</option>
                        <option value="size-asc">Low-High</option>
                        <option value="size-dsc">High-Low</option>
                    </select>
                </label>
                
            </div>
            

            <div>
                {
                    sortedItem.map(app => {
                        return (
                            <div className='flex justify-between items-center rounded p-3 my-4 bg-white' key={app.id}>
                                <div className='flex items-center gap-6'>
                                    <img className='w-20 h-20 rounded' src={app.image} alt="" />
                                    <div>
                                        <div key={app.id} className='text-xl font-semibold'>{app.title}</div>
                                        <div className='flex gap-2 mt-2 items-center'>
                                            <img className='w-4 h-4' src={downloadImg} alt="" />
                                            <p className='text-[#00D390] pe-4'>{app.downloads}</p>

                                            <img className='w-4 h-4' src={starImg} alt="" />
                                            <p className='text-[#FF8811] pe-4'>{app.ratingAvg}</p>

                                            <p>{app.size} MB</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <button onClick={() => handleRemove(app.id)} className='btn bg-[#00D390] text-white'>Uninstall</button>
                                
                            </div>
                        )
                    }
                    
                    )
                }<ToastContainer />
            </div>
        </div>
    );
};

export default InstalledApps;