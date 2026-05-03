import React from 'react';
import { FaArrowTrendDown } from 'react-icons/fa6';

const CryptoRow = ({ asset }) => {
    return (
        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-3 md:p-2 rounded-xl transition-colors">
            <div className="flex items-center gap-3 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 shrink-0">
                    {asset.icon}
                </div>
                <span className="text-white text-xl md:text-3xl font-bold truncate max-w-[80px] md:max-w-none">
                    <span className="md:hidden">{asset.name[0]}..</span>
                    <span className="hidden md:inline">{asset.name}</span>
                </span>
            </div>
            <div className="flex flex-col items-end shrink-0">
                <span className="text-white text-xl md:text-3xl font-bold">GHS {asset.price}</span>
                <div className="flex items-center gap-1.5 md:gap-2 text-red-500 font-bold text-sm md:text-lg">
                    <FaArrowTrendDown />
                    <span>{asset.change}%</span>
                </div>
            </div>
        </div>
    );
};

export default CryptoRow;
