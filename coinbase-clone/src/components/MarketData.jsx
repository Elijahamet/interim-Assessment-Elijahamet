import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiBitcoin, SiEthereum, SiTether, SiBinance, SiXrp } from 'react-icons/si';
import CryptoRow from './CryptoRow';
import Button from './ui/Button';

const MarketData = () => {
    const [activeFilter, setActiveFilter] = useState('tradable');
    const [assets, setAssets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getCoinIcon = (symbol) => {
        const s = symbol.toLowerCase();
        if (s === 'btc') return <SiBitcoin className="text-[#F7931A] text-2xl" />;
        if (s === 'eth') return <SiEthereum className="text-[#627EEA] text-2xl" />;
        if (s === 'usdt') return <SiTether className="text-[#26A17B] text-2xl" />;
        if (s === 'bnb') return <SiBinance className="text-[#F3BA2F] text-2xl" />;
        if (s === 'xrp') return <SiXrp className="text-white text-2xl" />;
        return <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px] uppercase font-bold text-white">{symbol.substring(0, 2)}</div>;
    };

    useEffect(() => {
        const fetchMarketData = async () => {
            setError(null);
            setIsLoading(true);
            try {
                let url = `${import.meta.env.VITE_API_URL}/crypto`;
                if (activeFilter === 'gainers') url = `${import.meta.env.VITE_API_URL}/crypto/gainers`;
                if (activeFilter === 'new') url = `${import.meta.env.VITE_API_URL}/crypto/new`;

                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                // backend returns { cryptos } or { gainers } or { newListings }
                const list = data.cryptos || data.gainers || data.newListings || [];

                const mappedData = list.map(coin => ({
                    name: coin.name,
                    symbol: coin.symbol,
                    icon: getCoinIcon(coin.symbol),
                    price: Number(coin.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                    change: Number(coin.change24h).toFixed(2),
                }));

                setAssets(mappedData);
            } catch (err) {
                console.error(err);
                setError('Failed to load data. Please try again later.');
            }
            setIsLoading(false);
        };

        fetchMarketData();
    }, [activeFilter]);

    return (
        <section className="bg-gray-200 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Text */}
                <div className="flex flex-col gap-6 lg:gap-8 text-left lg:-ml-10">
                    <h2 className="text-4xl md:text-4xl font-extrabold text-black leading-[1.1] md:leading-tight">
                        Explore crypto like <br className="md:hidden" />
                        Bitcoin, Ethereum, <br className="md:hidden" />
                        and Dogecoin.
                    </h2>
                    <p className="text-base text-gray-500 font-medium">
                        Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                    </p>
                    <div className="flex justify-start text-left">
                        <Button as={Link} to="/signup" variant="black">
                            See more assets
                        </Button>
                    </div>
                </div>

                {/* Right Dashboard */}
                <div className="bg-black rounded-none md:rounded-[32px] p-6 md:p-8 border-y md:border border-white/10 shadow-2xl w-full mx-0">
                    <div className="flex flex-row items-center gap-2 md:gap-4 mb-8 px-2 md:px-0 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <button
                            onClick={() => setActiveFilter('tradable')}
                            className={`px-4 py-2 text-xs md:text-sm font-bold transition-all rounded-full ${activeFilter === 'tradable' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-200'}`}
                        >
                            Tradable
                        </button>
                        <button
                            onClick={() => setActiveFilter('gainers')}
                            className={`px-4 py-2 text-xs md:text-sm font-bold transition-all rounded-full ${activeFilter === 'gainers' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-200'}`}
                        >
                            Top gainers
                        </button>
                        <button
                            onClick={() => setActiveFilter('new')}
                            className={`px-4 py-2 text-xs md:text-sm font-bold transition-all rounded-full ${activeFilter === 'new' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-200'}`}
                        >
                            New on Coinbase
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6 min-h-[300px]">
                        {isLoading ? (
                            <div className="flex flex-col gap-6">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="flex items-center justify-between animate-pulse">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-gray-800 rounded-full" />
                                            <div className="flex flex-col gap-2">
                                                <div className="w-24 h-4 bg-gray-800 rounded" />
                                                <div className="w-12 h-3 bg-gray-800 rounded" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <div className="w-20 h-4 bg-gray-800 rounded" />
                                            <div className="w-12 h-3 bg-gray-800 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : error ? (
                            <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                <p className="text-gray-400 mb-4">{error}</p>
                                <button
                                    onClick={() => setActiveFilter(activeFilter)}
                                    className="text-[#0052ff] font-bold hover:underline"
                                >
                                    Retry
                                </button>
                            </div>
                        ) : (
                            assets.map((asset) => (
                                <CryptoRow key={asset.name} asset={asset} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketData;
