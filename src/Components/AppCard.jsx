import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import downloadIcon from '../assets/icon-downloads.png';
import starIcon from '../assets/icon-ratings.png';

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id} = app;
    return (
        <Link to={`/app/${id}`}>
        <div className="card border-1 bg-[#f8f8f8] border-[#cdcdcd] pb-3 shadow-sm">
            <figure className='m-3 h-80 overflow-hidden flex justify-center items-center bg-white rounded-md'>
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
                        <div className="flex items-center bg-[#F1F5E8] rounded p-1"><img className='w-4 h-4' src={downloadIcon} alt="" /><span className='px-1 text-[#00D390] font-semibold'> {downloads}</span></div>
                    </div>
                    <div>
                        <div className="flex items-center bg-[#FFF0E1] rounded p-1"><img className='w-4 h-4' src={starIcon} alt="" /><span className='px-1 text-[#FF8811]'> {ratingAvg}</span></div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default AppCard;