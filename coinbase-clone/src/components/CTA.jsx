import React from 'react';
import { Link } from 'react-router-dom';
import moniesGraphic from '../assets/monies.avif';
import Input from './ui/Input';
import Button from './ui/Button';

const CTA = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">

            {/* 1. Content Side (Left) - Shifted left and larger text */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-xl text-left">
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="text-5xl md:text-5xl lg:text-7xl font-extrabold text-black leading-[1.1] md:leading-tight">
                        Take control of <br className="md:hidden" />
                        your money
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed font-medium">
                        Start your portfolio today and discover crypto
                    </p>
                </div>

                {/* Email Input & CTA */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-0 mt-4">
                    <Input
                        type="email"
                        placeholder="satoshi@nakamoto.com"
                        className="flex-grow w-full"
                    />
                    <Button as={Link} to="/signup" variant="primary" className="hover:bg-[#004BD6] whitespace-nowrap w-full sm:w-fit">
                        Sign up
                    </Button>
                </div>
            </div>

            {/* 2. Visual Side (Right) - Even larger and shifted up/left */}
            <div className="w-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-3xl lg:-mt-16 lg:ml-16 scale-110 lg:scale-125 origin-center lg:origin-right">
                    <img
                        src={moniesGraphic}
                        alt="Cryptocurrency Universe"
                        className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

        </section>
    );
};

export default CTA;
