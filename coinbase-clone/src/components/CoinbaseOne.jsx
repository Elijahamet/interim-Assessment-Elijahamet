import React from 'react';
import { Link } from 'react-router-dom';
import membershipMockup from '../assets/membership.webp';
import logo from '../assets/logo.svg';
import Button from './ui/Button';

const CoinbaseOne = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center overflow-hidden">

            {/* 1. Content Side (Left) - Shifted slightly left */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-xl text-left order-2 lg:order-1 lg:pl-10">
                <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start">
                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 w-fit">
                        <img src={logo} alt="Coinbase" className="h-4 brightness-0" />
                        <span className="text-[10px] font-bold tracking-[0.1em] text-black">COINBASE ONE</span>
                    </div>

                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-black leading-[1.1] md:leading-tight">
                        Zero trading fees, <br className="md:hidden" />
                        more rewards.
                    </h2>

                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium">
                        Get the most out of Coinbase with zero trading fees,
                        boosted staking rewards, and 24/7 priority support.
                    </p>
                </div>

                <div className="flex justify-start">
                    <Button as={Link} to="/signup" variant="black" className="hover:bg-gray-800">
                        Claim free trial
                    </Button>
                </div>
            </div>

            {/* 2. Visual Side (Right) - Shrunk container */}
            <div className="w-full lg:max-w-lg order-1 lg:order-2 mx-auto">
                <div className="bg-[#F4F7FA] rounded-[32px] md:rounded-[40px] pt-8 md:pt-14 px-8 md:px-14 pb-0 overflow-hidden flex items-end justify-center shadow-sm">
                    <img
                        src={membershipMockup}
                        alt="Coinbase One Membership Interface"
                        className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

        </section>
    );
};

export default CoinbaseOne;
