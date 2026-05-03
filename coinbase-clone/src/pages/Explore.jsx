import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../assets/explore/expkore.svg';
import PromotionalCTA from '../components/PromotionalCTA';
import { useNavigate } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL;

const Explore = () => {
    const [sortBy, setSortBy] = useState('mktCap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [assets, setAssets] = useState([]);
    const [topMovers, setTopMovers] = useState([]);
    const [newListings, setNewListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resAll, resGainers, resNew] = await Promise.all([
                    fetch(`${API_BASE}/crypto`),
                    fetch(`${API_BASE}/crypto/gainers`),
                    fetch(`${API_BASE}/crypto/new`)
                ]);

                const dataAll = await resAll.json();
                const dataGainers = await resGainers.json();
                const dataNew = await resNew.json();

                setAssets(dataAll.cryptos || []);
                setTopMovers(dataGainers.gainers || []);
                setNewListings(dataNew.newListings || []);
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('desc');
        }
    };

    const sortedAssets = [...assets].sort((a, b) => {
        const valA = a[sortBy] || 0;
        const valB = b[sortBy] || 0;
        if (sortOrder === 'asc') return valA > valB ? 1 : -1;
        return valA < valB ? 1 : -1;
    });

    const formatGHS = (val) => {
        if (typeof val === 'string') {
            const numeric = parseFloat(val);
            if (!isNaN(numeric)) return `$${numeric.toLocaleString()}`;
            return val;
        }
        return `$${val.toLocaleString()}`;
    };
    const formatCompact = (val) => {
        if (typeof val === 'string') return `$${val}`;
        if (val >= 1e12) return `$${(val / 1e12).toFixed(1)}T`;
        if (val >= 1e9) return `$${(val / 1e9).toFixed(1)}B`;
        return `$${val.toLocaleString()}`;
    }

    return (
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-12">
            {/* 1. Main Content Area */}
            <div className="flex-grow lg:w-[65%]">
                {/* Previous Sections (Hero & Market Stats) */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-black mb-2 tracking-tight">Explore crypto</h1>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500 font-medium">Coinbase 50 Index is up </span>
                            <span className="text-[#098551] font-bold">0.41%</span>
                            <span className="text-gray-500 font-medium">(24hrs)</span>
                        </div>
                    </div>

                    <div className="relative group w-full max-w-md">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search assets"
                            className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-14 pr-6 text-base focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all bg-gray-50/50"
                        />
                    </div>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-gray-100 mb-10"></div>

                {/* Market Stats Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-black">Market stats</h2>
                        <div className="flex gap-2">
                            <button className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-400 cursor-not-allowed">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-800">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="mb-8 font-medium">
                        <p className="text-[#5B616E] text-[17px] leading-relaxed max-w-3xl">
                            The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.25 trillion, representing a 1.71% increase from last week.
                        </p>
                        <a href="#" className="text-[#0052FF] hover:underline inline-block mt-2">Read more</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard label="Total market cap" value="GHS 24.25T" change="+1.71%" color="#098551" />
                        <StatCard label="24h trading volume" value="GHS 842.1B" change="-0.84%" color="#CF202F" isNegative />
                        <StatCard label="BTC dominance" value="54.21%" change="+0.12%" color="#098551" />
                    </div>
                </div>

                {/* --- NEW SECTION: Asset Table & Filtering --- */}
                <div className="mt-16">
                    <div className="flex items-baseline gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-black">Crypto market prices</h2>
                        <span className="text-gray-500 text-sm">18,532 assets</span>
                    </div>
                    <p className="text-[#5B616E] mb-8">
                        The global crypto market cap is GHS 24.25T, a <span className="text-[#098551] font-bold">1.71% increase</span> over the last day. <a href="#" className="text-[#0052FF] font-medium hover:underline">Read more</a>
                    </p>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <FilterPill label="All assets" />
                        <FilterPill label="1D" />
                        <FilterPill label="GHS" />
                        <FilterPill label="10 rows" />
                    </div>

                    {/* Table Container */}
                    <div className="pb-4 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-xs font-bold uppercase tracking-wider border-b border-gray-100">
                                    <th className="pb-4 w-10 text-left pl-1"></th>
                                    <th className="pb-4 text-left px-2 text-gray-400">Asset</th>
                                    <th
                                        className={`pb-4 text-right px-2 cursor-pointer transition-colors ${sortBy === 'price' ? 'text-[#0052FF]' : 'text-gray-400 hover:text-black'}`}
                                        onClick={() => handleSort('price')}
                                    >
                                        Market price {sortBy === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th className="pb-4 text-center px-2 text-gray-400">Chart</th>
                                    <th
                                        className={`pb-4 text-right px-2 cursor-pointer transition-colors ${sortBy === 'change' ? 'text-[#0052FF]' : 'text-gray-400 hover:text-black'}`}
                                        onClick={() => handleSort('change')}
                                    >
                                        Change {sortBy === 'change' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        className={`pb-4 text-right px-2 cursor-pointer transition-colors ${sortBy === 'mktCap' ? 'text-[#0052FF]' : 'text-gray-400 hover:text-black'}`}
                                        onClick={() => handleSort('mktCap')}
                                    >
                                        Mkt cap {sortBy === 'mktCap' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        className={`pb-4 text-right px-2 cursor-pointer transition-colors ${sortBy === 'volume' ? 'text-[#0052FF]' : 'text-gray-400 hover:text-black'}`}
                                        onClick={() => handleSort('volume')}
                                    >
                                        24h volume {sortBy === 'volume' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th className="pb-4 text-right pr-2 text-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {loading ? (
                                    <tr>
                                        <td colSpan="8" className="py-20 text-center text-gray-500 font-medium">Loading market data...</td>
                                    </tr>
                                ) : sortedAssets.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="py-20 text-center text-gray-500 font-medium">No assets found. Add some in the profile!</td>
                                    </tr>
                                ) : (
                                    sortedAssets.map(asset => (
                                        <AssetRow
                                            key={asset._id}
                                            id={asset._id}
                                            name={asset.name}
                                            symbol={asset.symbol}
                                            icon={asset.image}
                                            price={formatGHS(asset.price)}
                                            change={`${asset.change24h > 0 ? '+' : ''}${asset.change24h}%`}
                                            mktCap={formatCompact(asset.price * 1000000)} // Mocked mktCap based on price
                                            volume={formatCompact(asset.price * 50000)} // Mocked volume based on price
                                            isNegative={asset.change24h < 0}
                                            activeSort={sortBy}
                                        />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex justify-center items-center gap-1">
                        <PaginationButton label="1" active />
                        <PaginationButton label="2" />
                        <PaginationButton label="3" />
                        <span className="px-2 text-gray-400">...</span>
                        <PaginationButton label="1,854" />
                        <button className="ml-2 p-2 text-gray-400 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    <PromotionalCTA />
                </div>
            </div>

            {/* 2. Sidebar */}
            <div className="lg:w-[35%] flex flex-col gap-12 lg:border-l lg:border-gray-100 lg:pl-10">
                {/* Get Started Card */}
                <div className="bg-[#0052FF] rounded-[24px] p-8 text-white relative overflow-hidden flex items-center justify-between w-full shadow-lg shadow-blue-500/10">
                    <div className="relative z-10 pr-4">
                        <h3 className="text-xl font-bold mb-1">Get started</h3>
                        <p className="text-white/80 text-sm mb-5">Create your account today</p>
                        <Link to="/signup" className="bg-white text-black font-bold py-3 px-8 rounded-full text-center hover:bg-gray-100 transition-all inline-block w-fit text-sm">
                            Sign up
                        </Link>
                    </div>
                    <img src={exploreIcon} alt="Explore" className="w-24 h-24 object-contain relative z-10" />
                </div>

                {/* Top Movers Section */}
                <div>
                    <SectionHeader title="Top movers" />
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
                        {loading ? (
                            <div className="flex gap-4">
                                {[1, 2, 3].map(i => <div key={i} className="w-[170px] h-[170px] bg-gray-50 rounded-[24px] animate-pulse"></div>)}
                            </div>
                        ) : topMovers.length > 0 ? (
                            topMovers.map(mover => (
                                <SquareTokenCard 
                                    key={mover._id}
                                    name={mover.name} 
                                    symbol={mover.symbol} 
                                    change={`${mover.change24h > 0 ? '+' : ''}${mover.change24h}%`} 
                                    icon={mover.image} 
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm">No movers yet.</p>
                        )}
                    </div>
                </div>

                {/* --- NEW SECTION: New on Coinbase --- */}
                <div className="lg:mt-0 pt-10 border-t border-gray-100">
                    <SectionHeader title="New on Coinbase" />
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
                        {loading ? (
                            <div className="flex gap-4">
                                {[1, 2, 3].map(i => <div key={i} className="w-[170px] h-[170px] bg-gray-50 rounded-[24px] animate-pulse"></div>)}
                            </div>
                        ) : newListings.length > 0 ? (
                            newListings.map(asset => (
                                <NewAssetCard 
                                    key={asset._id}
                                    name={asset.name} 
                                    symbol={asset.symbol} 
                                    date={`Added ${new Date(asset.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`} 
                                    icon={asset.image} 
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm">No new listings.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- Simple Sub-components for Cleanliness --- */

const StatCard = ({ label, value, change, color, isNegative }) => (
    <div className="border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-sm transition-shadow flex flex-col">
        <div className="text-sm text-gray-500 font-medium mb-1">{label}</div>
        <div className="flex items-center gap-2 mb-8">
            <span className="text-[20px] font-bold">{value}</span>
            <span className={`text-sm font-bold ${isNegative ? 'text-[#CF202F]' : 'text-[#098551]'}`}>{change}</span>
        </div>
        <div className="h-10 w-full mt-auto">
            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 35 Q 25 20, 50 25 T 100 10" fill="none" stroke={color} strokeWidth="2" />
                <path d="M0 35 Q 25 20, 50 25 T 100 10 V 40 H 0 Z" fill={color} fillOpacity="0.1" />
            </svg>
        </div>
    </div>
);

const PaginationButton = ({ label, active }) => (
    <button className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${active ? 'bg-[#0052FF] text-white shadow-md shadow-blue-500/20' : 'text-gray-600 hover:bg-gray-100'}`}>
        {label}
    </button>
);

const FilterPill = ({ label }) => (
    <button className="bg-gray-50 border border-transparent hover:border-gray-200 px-4 py-2 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2 transition-all">
        {label}
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
    </button>
);

const AssetRow = ({ id, name, symbol, icon, price, change, mktCap, volume, isNegative, activeSort }) => {
    const navigate = useNavigate();
    return (
        <tr
            className="group hover:bg-gray-50/50 transition-colors border-b border-gray-50 cursor-pointer"
            onClick={() => navigate(`/price/${id}`)}
        >
            <td className="py-5 text-left pl-1">
                <svg className="w-5 h-5 text-gray-300 hover:text-yellow-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            </td>
            <td className="py-5 text-left px-2">
                <div className="flex items-center gap-3">
                    <img src={icon} alt={name} className="w-8 h-8 rounded-full shadow-sm" onError={(e) => { e.target.src = "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png"; }} />
                    <div className="flex flex-col">
                        <span className="font-bold text-black">{name}</span>
                        <span className="text-sm text-gray-500 font-normal">{symbol}</span>
                    </div>
                </div>
            </td>
            <td className={`py-5 text-right font-normal px-2 ${activeSort === 'price' ? 'text-[#0052FF]' : 'text-black'}`}>{price}</td>
            <td className="py-5 text-center px-2">
                <div className="w-24 h-8 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                        <path d="M0 30 Q 25 10, 50 25 T 100 5" fill="none" stroke={isNegative ? '#CF202F' : '#098551'} strokeWidth="2" />
                    </svg>
                </div>
            </td>
            <td className={`py-5 text-right font-medium px-2 ${activeSort === 'change' ? 'text-[#0052FF]' : isNegative ? 'text-[#CF202F]' : 'text-[#098551]'}`}>
                <span className="flex items-center justify-end gap-1">
                    {isNegative ? '↓' : '↑'} {change}
                </span>
            </td>
            <td className={`py-5 text-right font-medium px-2 ${activeSort === 'mktCap' ? 'text-[#0052FF]' : 'text-black'}`}>{mktCap}</td>
            <td className={`py-5 text-right font-normal px-2 ${activeSort === 'volume' ? 'text-[#0052FF]' : 'text-gray-500'}`}>{volume}</td>
            <td className="py-5 text-right pr-2">
                <button className="bg-[#0052FF] text-white px-5 py-2 rounded-full text-sm font-bold transition-all active:scale-95 shadow-md shadow-blue-500/10">Trade</button>
            </td>
        </tr>
    );
};

const SectionHeader = ({ title }) => (
    <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <div className="flex gap-3 text-gray-400">
            <button className="opacity-30 hover:text-black"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg></button>
            <button className="hover:text-black"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 5l7 7-7 7" /></svg></button>
        </div>
    </div>
);

const SquareTokenCard = ({ name, symbol, change, icon }) => (
    <div className="border border-gray-100 rounded-[24px] p-5 flex flex-col justify-between w-[170px] h-[170px] flex-shrink-0 hover:bg-gray-50/80 transition-all cursor-pointer group bg-white shadow-sm">
        <img src={icon} alt={name} className="w-11 h-11 rounded-full shadow-sm transition-transform group-hover:scale-110" onError={(e) => { e.target.src = "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png"; }} />
        <div>
            <div className="font-bold text-black group-hover:text-[#0052FF] leading-tight text-sm">{name}</div>
            <div className="text-sm text-[#098551] font-bold mt-1">{change}</div>
        </div>
    </div>
);

const NewAssetCard = ({ name, symbol, date, icon }) => (
    <div className="border border-gray-100 rounded-[24px] p-5 flex flex-col justify-between w-[170px] h-[170px] flex-shrink-0 hover:bg-gray-50/80 transition-all cursor-pointer group bg-white shadow-sm">
        <div className="flex justify-between items-start">
            <img src={icon} alt={name} className="w-11 h-11 rounded-full shadow-sm transition-transform group-hover:scale-110" onError={(e) => { e.target.src = "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png"; }} />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{symbol}</span>
        </div>
        <div>
            <div className="font-bold text-black group-hover:text-[#0052FF] leading-tight mb-1 text-sm">{name}</div>
            <div className="text-[11px] text-gray-500 font-medium">{date}</div>
        </div>
    </div>
);

export default Explore;
