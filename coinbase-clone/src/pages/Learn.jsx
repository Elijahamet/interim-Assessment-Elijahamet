import React from 'react';
import { Link } from 'react-router-dom';
import learnHero from '../assets/learn/learn-hero.png';
import cryptoBasicsIcon from '../assets/learn/crypto-basics.png';
import tipsTutorialsIcon from '../assets/learn/tips-tutorials.png';
import advancedTradingIcon from '../assets/learn/advanced-training.png';
import futuresIcon from '../assets/learn/futures.png';
import hero1 from '../assets/learn/crypto-basics-1.png';
import hero2 from '../assets/learn/crypto-basics-2.png';
import hero3 from '../assets/learn/crypto-basics-3.png';
import hero4 from '../assets/learn/crypto-basics-4.png';
import hero5 from '../assets/learn/crypto-basics-5.png';
import hero6 from '../assets/learn/crypto-basics-6.png';
import tipsTuts1 from '../assets/learn/tips-tuts-1.png';
import tipsTuts2 from '../assets/learn/tips-tuts-2.png';
import tipsTuts3 from '../assets/learn/tips-tuts-3.png';
import tipsTuts4 from '../assets/learn/tips-tuts-4.png';
import advTrading1 from '../assets/learn/advanced-trading-1.png';
import advTrading2 from '../assets/learn/advanced-trading-2.png';
import advTrading3 from '../assets/learn/advanced-trading-3.png';
import advTrading4 from '../assets/learn/advanced-trading-4.png';
import futures1 from '../assets/learn/futures-1.png';
import futures2 from '../assets/learn/futures-2.png';
import futures3 from '../assets/learn/futures-3.png';
import futures4 from '../assets/learn/futures-4.png';
import wallet1 from '../assets/learn/wallet-1.png';
import wallet2 from '../assets/learn/wallet-2.png';
import wallet3 from '../assets/learn/wallet-3.png';
import wallet4 from '../assets/learn/wallet-4.png';

const categories = [
    { icon: cryptoBasicsIcon, label: 'Crypto basics' },
    { icon: tipsTutorialsIcon, label: 'Tips and tutorials' },
    { icon: advancedTradingIcon, label: 'Advanced trading' },
    { icon: futuresIcon, label: 'Futures' },
];

const Learn = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black">

            {/* 1. Hero Content */}
            <section className="py-8 md:py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Crypto questions, answered
                    </h1>
                    <p className="text-base md:text-xl text-gray-500 max-w-full mx-auto leading-relaxed">
                        Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
                    </p>
                </div>
            </section>

            {/* 2. Featured Grid */}
            <section className="pb-10 px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

                    {/* Left Column: Featured */}
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-bold mb-4">Featured</h2>
                        {/* Video Placeholder */}
                        <div className="relative h-80 md:h-[420px] rounded-none overflow-hidden bg-gray-100 group cursor-pointer shadow-md">
                            <img
                                src={learnHero}
                                alt="Learn hero"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Video Caption Block */}
                        <div className="mt-5">
                            <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">Video Tutorial</span>
                            <h3 className="text-2xl font-bold text-black mt-1.5 leading-tight">
                                When is the best time to invest in crypto?
                            </h3>
                            <p className="text-[17px] text-gray-500 mt-2 leading-relaxed">
                                When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Popular */}
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold mb-4">Popular</h2>
                        <div className="flex flex-col divide-y divide-gray-100">
                            <ArticleLink category="BEGINNER'S GUIDE" title="What is cryptocurrency?" />
                            <ArticleLink category="GETTING STARTED" title="How to earn crypto rewards" />
                            <ArticleLink category="GETTING STARTED" title="How to add crypto to your Coinbase Wallet" />
                            <ArticleLink category="YOUR CRYPTO" title="Tax forms, explained: A guide to U.S. tax forms and crypto reports" />
                            <ArticleLink category="GETTING STARTED" title="Beginner's guide to dapps" />
                            <ArticleLink category="MARKET UPDATE" title="Everything you need to know about the first-ever U.S. Bitcoin ETF" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Category Navigation Hub */}
            <section className="py-8 px-4 md:px-10 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap justify-start md:justify-between gap-8 md:gap-4">
                    {categories.map((cat) => (
                        <div key={cat.label} className="flex flex-col gap-3 min-w-[140px]">
                            <img src={cat.icon} alt={cat.label} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                            <h3 className="text-base md:text-lg font-bold text-black">{cat.label}</h3>
                            <Link to="#" className="text-[#0052FF] font-semibold text-sm flex items-center gap-1 hover:underline">
                                See more
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Crypto Basics Section Header */}
            <section className="py-16 md:py-20 px-6 text-center border-t-2 border-gray-200">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Crypto basics</h2>
                <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mt-4">
                    New to crypto? Not for long — start with these guides and explainers.
                </p>
            </section>

            {/* 5. Educational Content Cards */}
            <section className="pb-24 px-6 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Left Card: Bitcoin Introduction */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={hero1}
                                alt="What is Bitcoin?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            BEGINNER'S GUIDE
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What is Bitcoin?
                        </h3>
                        <p className="text-gray-500 mt-2 text-base leading-relaxed">
                            Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.
                        </p>
                    </div>

                    {/* Right Card: DeFi and Altcoins */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={hero2}
                                alt="Guide to DeFi tokens and altcoins"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            BEGINNER'S GUIDE
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            Guide to DeFi tokens and altcoins
                        </h3>
                        <p className="text-gray-500 mt-2 text-base leading-relaxed">
                            From Aave to Zcash, decide what to trade with our beginner's guide
                        </p>
                    </div>

                </div>
            </section>

            {/* 6. Topic Cards Grid */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1: Ethereum */}
                    <div className="flex flex-col group cursor-pointer">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 shadow-sm mb-4">
                            <img
                                src={hero3}
                                alt="What is Ethereum?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-2.5">
                            BEGINNER'S GUIDE
                        </span>
                        <h3 className="text-[17px] font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What is Ethereum?
                        </h3>
                    </div>

                    {/* Card 2: DeFi */}
                    <div className="flex flex-col group cursor-pointer">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 shadow-sm mb-4">
                            <img
                                src={hero4}
                                alt="What is DeFi?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-2.5">
                            KEY TERM
                        </span>
                        <h3 className="text-[17px] font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What is DeFi?
                        </h3>
                    </div>

                    {/* Card 3: Stablecoin */}
                    <div className="flex flex-col group cursor-pointer">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 shadow-sm mb-4">
                            <img
                                src={hero5}
                                alt="What is a stablecoin?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-2.5">
                            BEGINNER'S GUIDE
                        </span>
                        <h3 className="text-[17px] font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What is a stablecoin?
                        </h3>
                    </div>

                    {/* Card 4: Glossary */}
                    <div className="flex flex-col group cursor-pointer">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 shadow-sm mb-4">
                            <img
                                src={hero6}
                                alt="crypto slang, explained"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-2.5">
                            GLOSSARY
                        </span>
                        <h3 className="text-[17px] font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained
                        </h3>
                    </div>

                </div>

                {/* See More Button */}
                <div className="flex justify-center mt-20 md:mt-24">
                    <Link to="#" className="bg-[#0052FF] text-white px-6 py-3 rounded-md font-bold text-[16px] flex items-center gap-2 hover:bg-[#004bd6] transition-all duration-200">
                        See more crypto basics
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* 7. Glossary Quick-Link Hub */}
            <section className="py-24 px-6 md:px-10 bg-[#f9f9f9]">
                <div className="max-w-[1300px] mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 tracking-tight">
                        What is...
                    </h2>

                    {/* Terminology Pills Grid - Two Specific Rows */}
                    <div className="flex flex-col items-center gap-4 mb-14">
                        {/* Row 1 */}
                        <div className="flex justify-center flex-wrap gap-3">
                            {[
                                'Bitcoin', 'Blockchain', 'Cardano', 'Crypto wallet',
                                'DeFi', 'Ethereum', 'Fork', 'Inflation', 'Stablecoin'
                            ].map((term) => (
                                <Link
                                    key={term}
                                    to="#"
                                    className="bg-white px-5 py-3 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-200 text-[15px] font-semibold text-black transition-all duration-200 whitespace-nowrap"
                                >
                                    {term}
                                </Link>
                            ))}
                        </div>
                        {/* Row 2 */}
                        <div className="flex justify-center flex-wrap gap-3">
                            {[
                                'Market cap', 'NFT', 'Private key',
                                'Protocol', 'Smart contract', 'Token', 'Volatility memecoin'
                            ].map((term) => (
                                <Link
                                    key={term}
                                    to="#"
                                    className="bg-white px-5 py-3 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-200 text-[15px] font-semibold text-black transition-all duration-200 whitespace-nowrap"
                                >
                                    {term}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* See More Button */}
                    <div className="flex justify-center">
                        <Link to="#" className="bg-[#0052FF] text-white px-8 py-3 rounded-md font-bold text-[16px] hover:bg-[#004bd6] transition-colors duration-200">
                            See all definitions
                        </Link>
                    </div>
                </div>
            </section>

            {/* 8. Tips and Tutorials Section Header */}
            <section className="py-16 md:py-20 px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Tips and tutorials</h2>
                <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mt-4">
                    Get practical, step-by-step answers to all things crypto
                </p>
            </section>

            {/* 9. Tips and Tutorials Cards */}
            <section className="pb-24 px-6 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Left Card: Philanthropy */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={tipsTuts1}
                                alt="How to donate crypto"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            GETTING STARTED
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to donate crypto
                        </h3>
                    </div>

                    {/* Right Card: Security & Setup (Video) */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-[#0052FF] shadow-sm mb-6 rounded-lg">
                            <img
                                src={tipsTuts2}
                                alt="How to set up a crypto wallet"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-[#0052FF] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            VIDEO TUTORIAL
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to set up a crypto wallet
                        </h3>
                    </div>

                    {/* Row 2 - Left Card: Investment Timing (Video) */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={tipsTuts3}
                                alt="When is the best time to invest in crypto?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            VIDEO TUTORIAL
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            When is the best time to invest in crypto?
                        </h3>
                    </div>

                    {/* Row 2 - Right Card: Retirement Strategy */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-900 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={tipsTuts4}
                                alt="How to invest in crypto via your retirement account"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            YOUR CRYPTO
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to invest in crypto via your retirement account
                        </h3>
                    </div>

                </div>

                {/* See More Button */}
                <div className="flex justify-center mt-20 md:mt-24">
                    <Link to="#" className="bg-[#0052FF] text-white px-6 py-3 rounded-md font-bold text-[16px] flex items-center gap-2 hover:bg-[#004bd6] transition-all duration-200">
                        See more tips and tutorials
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* 10. Advanced Trading Section Header */}
            <section className="py-16 md:py-20 px-6 text-center border-t border-gray-100">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Advanced trading</h2>
                <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4">
                    Ready to advance? Learn the tools and terminology you need to take control of your trades
                </p>
            </section>

            {/* 11. Advanced Trading Cards */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Left Card: Technical Analysis */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={advTrading1}
                                alt="What is technical analysis?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            KEY TERM
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What is technical analysis?
                        </h3>
                    </div>

                    {/* Right Card: Futures and Spot Trading */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-900 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={advTrading2}
                                alt="How can I use crypto futures market data for spot trading?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            ADVANCED GUIDE
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How can I use crypto futures market data for spot trading?
                        </h3>
                    </div>

                    {/* Row 2 - Left Card: Charting Tools (Video) */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-[#0A1A2A] shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={advTrading3}
                                alt="How to read advanced trading charts"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            ADVANCED GUIDE
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to read advanced trading charts
                        </h3>
                    </div>

                    {/* Row 2 - Right Card: Order Books (Video) */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-[#0A1A2A] shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={advTrading4}
                                alt="What is an order book?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            KEY TERM
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What is an order book?
                        </h3>
                    </div>

                </div>

                {/* See More Button */}
                <div className="flex justify-center mt-20 md:mt-24">
                    <Link to="#" className="bg-[#0052FF] text-white px-6 py-3 rounded-md font-bold text-[16px] flex items-center gap-2 hover:bg-[#004bd6] transition-all duration-200">
                        See more advanced trading
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* 12. Futures Section Header */}
            <section className="py-16 md:py-20 px-6 text-center border-t border-gray-100">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Futures</h2>
                <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mt-4">
                    New to futures trading? Get up to speed on the basics
                </p>
            </section>

            {/* 13. Futures Cards */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Left Card: History & Origins */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={futures1}
                                alt="Futures: Introductions and origins"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            Futures: Introductions and origins
                        </h3>
                    </div>

                    {/* Right Card: Core Fundamentals */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={futures2}
                                alt="Futures fundamentals: Understanding the basics"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            Futures fundamentals: Understanding the basics
                        </h3>
                    </div>

                    {/* Row 2 - Left Card: Position Management */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={futures3}
                                alt="Opening, holding, and closing a position in the futures market"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            Opening, holding, and closing a position in the futures market
                        </h3>
                    </div>

                    {/* Row 2 - Right Card: Advanced Strategies */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={futures4}
                                alt="Trading strategies: Speculating, hedging, and spreading in the futures market"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            Trading strategies: Speculating, hedging, and spreading in the futures market
                        </h3>
                    </div>

                </div>

                {/* See More Button */}
                <div className="flex justify-center mt-20 md:mt-24">
                    <Link to="#" className="bg-[#0052FF] text-white px-6 py-3 rounded-md font-bold text-[16px] flex items-center gap-2 hover:bg-[#004bd6] transition-all duration-200">
                        See more about futures
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* 14. All Things Wallet (Consolidated Section) */}
            <section className="py-16 md:py-20 px-6 border-t border-gray-100">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">All Things Wallet</h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mt-4">
                        Earn yield, dive into crypto apps, control your holdings, and much more
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Left Card: Comparison Module */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100 shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={wallet1}
                                alt="What's the difference between Coinbase and Coinbase Wallet?"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            What's the difference between Coinbase and Coinbase Wallet?
                        </h3>
                        <p className="text-gray-500 mt-2 text-[17px]">
                            And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered
                        </p>
                    </div>

                    {/* Right Card: Setup Module (Video) */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-[#0052FF] shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={wallet2}
                                alt="How to set up a crypto wallet"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-[#0052FF] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            VIDEO TUTORIAL
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to set up a crypto wallet
                        </h3>
                        <p className="text-gray-500 mt-2 text-[17px]">
                            Learn how to setup and get started with a crypto wallet.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left mt-12">
                    {/* Row 2 - Left Card: Fund Management */}
                    <div className="flex flex-col group cursor-pointer text-left">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-[#F5F2EA] shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={wallet3}
                                alt="How to add crypto to your Coinbase Wallet"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">
                            GETTING STARTED
                        </span>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to add crypto to your Coinbase Wallet
                        </h3>
                        <p className="text-gray-500 mt-2 text-[17px]">
                            A quick-start guide focused on moving assets into a self-custody wallet.
                        </p>
                    </div>

                    {/* Row 2 - Right Card: Peer-to-Peer Transfers */}
                    <div className="flex flex-col group cursor-pointer text-left mt-4 md:mt-0">
                        <div className="relative h-64 md:h-72 overflow-hidden bg-[#0052FF] shadow-sm mb-6 rounded-lg pointer-events-none">
                            <img
                                src={wallet4}
                                alt="How to send or receive crypto using Coinbase Wallet"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
                            How to send or receive crypto using Coinbase Wallet
                        </h3>
                        <p className="text-gray-500 mt-2 text-[17px]">
                            Explains the ability to conduct peer-to-peer transfers without traditional financial intermediaries.
                        </p>
                    </div>
                </div>

                {/* Wide Pill-shaped See More Button */}
                <div className="flex justify-center mt-20">
                    <Link to="#" className="bg-[#0052FF] text-white px-12 md:px-20 py-4 rounded-md font-bold text-[16px] flex items-center gap-2 hover:bg-[#004bd6] transition-all duration-200 shadow-md">
                        See more Wallet articles
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

        </div>
    );
};

/* Sub-component for Article Links */
const ArticleLink = ({ category, title }) => (
    <Link to="#" className="py-4 group flex flex-col gap-1.5">
        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none">
            {category}
        </span>
        <h3 className="text-[19px] font-bold text-black group-hover:text-[#0052FF] transition-colors leading-snug">
            {title}
        </h3>
    </Link>
);

export default Learn;
