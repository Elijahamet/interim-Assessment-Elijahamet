import React from 'react';
import { Link } from 'react-router-dom';
import usdcImage from '../assets/usdc.avif';
import bankImage from '../assets/bank.png';
import investImage from '../assets/invest.png';
import Card from './ui/Card';

const articles = [
    {
        image: usdcImage,
        alt: 'USDC - The digital dollar',
        headline: 'USDC: The digital dollar for the global crypto economy',
        body: 'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...',
        bg: '#0D1B2D',
    },
    {
        image: bankImage,
        alt: 'Bank bridged to smartphone',
        headline: 'Can crypto really replace your bank account?',
        body: "If you're a big enough fan of crypto, you've probably heard the phrase \"be your own bank\" or the term \"bankless\" — the idea being that...",
        bg: '#2563EB',
    },
    {
        image: investImage,
        alt: 'Best time to invest',
        headline: 'When is the best time to invest in crypto?',
        body: 'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...',
        bg: '#F0F2F5',
    },
];

const CryptoBasics = () => {
    return (
        <section className="bg-gray-200 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                {/* Top: Hook */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">

                    {/* Left: Three-line stacked headline */}
                    <h2 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] md:leading-tight text-left">
                        New to crypto? <br className="md:hidden" />
                        Learn some <br className="md:hidden" />
                        crypto basics
                    </h2>

                    {/* Right: Description + Button */}
                    <div className="flex flex-col gap-6 justify-start text-left">
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-0">
                            Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
                        </p>
                        <div className="flex justify-start">
                            <Link to="/learn" className="bg-black text-white px-8 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-all duration-200 active:scale-95 inline-block">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Card key={index} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CryptoBasics;
