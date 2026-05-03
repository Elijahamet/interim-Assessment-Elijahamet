import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_1.webp';
import Input from './ui/Input';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 pt-6 pb-14 md:pt-14 md:pb-26 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* 1. Visual Side (Left) - Subtle shift left */}
            <div className="flex flex-col gap-4 lg:-ml-4 order-2 lg:order-1">
                <div className="rounded-[24px] md:rounded-[32px] overflow-hidden drop-shadow-xl border border-gray-100">
                    <img
                        src={heroImage}
                        alt="Finance App Mockup"
                        className="w-full h-auto block"
                    />
                </div>
                <p className="text-gray-400 text-[10px] md:text-xs text-center lg:text-left">
                    Stocks and prediction markets not available in your jurisdiction.
                </p>
            </div>

            {/* 2. Content Side (Right) */}
            <div className="flex flex-col gap-8 max-w-xl mx-0 text-left order-1 lg:order-2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl md:text-5xl lg:text-7xl font-extrabold text-black leading-[1.1] md:leading-tight">
                        The future <br className="md:hidden" />
                        of finance <br className="md:hidden" />
                        is here.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Trade crypto and more on a platform you can trust.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <Input
                        type="email"
                        placeholder="satoshi@nakamoto.com"
                        className="flex-1 w-full"
                    />
                    <Button as={Link} to="/signup" variant="primary" className="w-full sm:w-fit">
                        Sign up
                    </Button>
                </div>
            </div>

        </section>
    );
};

export default Hero;
