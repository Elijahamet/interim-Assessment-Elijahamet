import React from 'react';
import { Link } from 'react-router-dom';
import ctaGraphic from '../assets/explore/cta.svg';

const PromotionalCTA = () => {
    return (
        <div className="w-[calc(100%+120px)] -ml-16 bg-[#0052FF] py-12 px-16 mt-16 mb-[-48px] flex flex-col md:flex-row items-center justify-between relative overflow-hidden transition-all">
            {/* Content Side */}
            <div className="flex flex-col items-start gap-8 z-10 w-full">
                <h2 className="text-xl md:text-2xl font-medium text-white max-w-[420px] leading-relaxed">
                    Create a Coinbase account to trade crypto. It’s quick, easy, and secure.
                </h2>
                <Link
                    to="/signup"
                    className="bg-white text-black font-bold py-4 px-20 md:px-24 rounded-full flex items-center justify-center gap-3 whitespace-nowrap hover:bg-gray-100 transition-all active:scale-95 shadow-xl shadow-black/10 min-w-[300px]"
                >
                    Start trading
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            {/* Illustration side - Restored Visibility */}
            <div className="hidden lg:flex flex-shrink-0 items-center z-10">
                <img
                    src={ctaGraphic}
                    alt="Growth Graphic"
                    className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        </div>
    );
};

export default PromotionalCTA;
