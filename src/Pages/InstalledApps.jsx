import React, { useEffect, useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

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
        <div>
            <div className='flex justify-between items-center'>
                <h1>Installed apps : <span>({installedApps.length})</span></h1>
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
                            <div className='flex justify-between items-center border p-3 my-2' key={app.id}>
                                <div key={app.id}>{app.title}</div>
                                <button onClick={() => handleRemove(app.id)} className='btn'>Delete</button>
                                
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