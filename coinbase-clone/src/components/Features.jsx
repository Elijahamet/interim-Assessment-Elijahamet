import React from 'react';
import { Link } from 'react-router-dom';
import featuresMockup from '../assets/hero_2.webp';
import Button from './ui/Button';

const Features = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">

            {/* 1. Visual side (Left) */}
            <div className="bg-[#0A0B0D] rounded-[32px] md:rounded-[40px] p-6 md:p-8 lg:p-12 overflow-hidden flex items-center justify-center border border-gray-800 shadow-2xl order-2 lg:order-1">
                <img
                    src={featuresMockup}
                    alt="Advanced Trading Interface"
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* 2. Content side (Right) */}
            <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl text-left order-1 lg:order-2">
                <div className="flex flex-col gap-4 lg:gap-6 items-start">
                    <h2 className="text-4xl md:text-4xl font-extrabold text-black leading-[1.1] md:leading-tight lg:whitespace-nowrap">
                        Powerful tools, <br className="md:hidden" />
                        designed for the <br className="md:hidden" />
                        advanced trader.
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium">
                        Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
                    </p>
                </div>

                <div className="flex justify-start">
                    <Button as={Link} to="/signup" variant="black" className="hover:bg-gray-800">
                        Start trading
                    </Button>
                </div>
            </div>

        </section>
    );
};

export default Features;
