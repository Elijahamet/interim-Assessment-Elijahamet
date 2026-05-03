import React from 'react';
import baseAppMockup from '../assets/base_app.avif';
import logo from '../assets/logo.svg';

const BaseApp = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center overflow-hidden">

            {/* 1. Visual Side (Left) - Image fills container */}
            <div className="w-full lg:max-w-lg order-2 lg:order-1 mx-auto">
                <div className="bg-[#F4F7FA] rounded-[32px] md:rounded-[40px] overflow-hidden flex items-end justify-center shadow-sm">
                    <img
                        src={baseAppMockup}
                        alt="Base App Interface"
                        className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* 2. Content Side (Right) */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-xl text-left order-1 lg:order-2 lg:-ml-8">
                <div className="flex flex-col gap-4 md:gap-6 items-start">
                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 w-fit">
                        <img src={logo} alt="Coinbase" className="h-4 brightness-0" />
                        <span className="text-[10px] font-bold tracking-[0.1em] text-black">BASE APP</span>
                    </div>

                    <h2 className="text-4xl md:text-4xl font-extrabold text-black leading-[1.1] md:leading-tight">
                        Countless ways <br className="md:hidden" />
                        to earn crypto with <br className="md:hidden" />
                        the Base App.
                    </h2>

                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium">
                        An everything app to trade, create, discover, and chat, all in one place.
                        Join millions of users exploring the future of the onchain economy.
                    </p>
                </div>

                <div className="flex justify-start">
                    <button className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-800 transition-all active:scale-95 w-fit">
                        Learn more
                    </button>
                </div>
            </div>

        </section>
    );
};

export default BaseApp;
