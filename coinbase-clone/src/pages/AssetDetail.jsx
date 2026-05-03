import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cryptos } from "../data/cryptoData";

function MiniChart({ positive, coinId }) {
    const color = positive ? "#05B169" : "#F45532";
    const gradId = `chart-grad-${coinId}`;
    const path = positive
        ? "M0 60 C20 55, 40 45, 60 40 C80 35, 100 25, 120 20 C140 15, 160 18, 180 15 C200 12, 220 10, 240 8"
        : "M0 10 C20 15, 40 25, 60 30 C80 35, 100 42, 120 45 C140 48, 160 50, 180 55 C200 58, 220 60, 240 62";
    return (
        <svg
            viewBox="0 0 240 70"
            className="w-full h-full"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`${path} L240 70 L0 70 Z`} fill={`url(#${gradId})`} />
            <path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function StatItem({ label, value, change }) {
    return (
        <div className="py-3 border-b border-[rgba(91,97,110,0.15)] last:border-b-0">
            <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide mb-0.5">
                {label}
            </p>
            <p className="text-[15px] font-medium text-[#0A0B0D]">{value}</p>
            {change != null && (
                <p
                    className={`text-[13px] font-medium ${change >= 0 ? "text-[#05B169]" : "text-[#F45532]"}`}
                >
                    {change >= 0 ? "↗️" : "↘️"}
                    {Math.abs(change).toFixed(2)}%
                </p>
            )}
        </div>
    );
}

const TIME_PERIODS = ["1H", "1D", "1W", "1M", "1Y", "ALL"];
const TABS = ["About", "Info", "Insights", "FAQ", "News", "Social"];

export default function AssetDetail() {
    const { asset } = useParams();
    const [activePeriod, setActivePeriod] = useState("1D");
    const [activeTab, setActiveTab] = useState("About");

    const coin = cryptos.find((c) => c.id === asset) || cryptos[0];
    const isPositive = coin.change >= 0;
    const priceChange24h = ((coin.price * coin.change) / 100).toFixed(2);
    const formattedPrice =
        coin.price >= 1000
            ? coin.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
            : coin.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
            });

    return (
        <div className="bg-white min-h-screen">
            <div className="sticky top-[72px] z-30 bg-white border-b border-[rgba(91,97,110,0.15)] overflow-x-auto no-scrollbar">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between md:justify-start gap-4 h-[56px] min-w-max md:min-w-0">
                    <div className="flex items-center gap-2 mr-2">
                        <img
                            src={coin.icon}
                            alt={coin.name}
                            className="w-6 h-6 md:w-7 md:h-7 rounded-full"
                            onError={(e) => {
                                e.target.style.display = "none";
                            }}
                        />
                        <span className="text-[14px] md:text-[15px] font-semibold text-[#0A0B0D] whitespace-nowrap">
                            {coin.name} Price
                        </span>
                        <span className="text-[14px] md:text-[15px] text-[#5B616E]">({coin.ticker})</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[14px] md:text-[15px] font-semibold text-[#0A0B0D]">
                            ${formattedPrice}
                        </span>
                        <span
                            className={`text-[12px] md:text-[13px] font-medium ${isPositive ? "text-[#05B169]" : "text-[#F45532]"}`}
                        >
                            {isPositive ? "↗️" : "↘️"}
                            {Math.abs(coin.change).toFixed(2)}%
                        </span>
                    </div>

                    <div className="hidden md:flex flex-1" />

                    <div className="flex items-center gap-2">
                        <button className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#E9ECF2] flex items-center justify-center text-[#5B616E] hover:bg-[#F5F7FA] transition-colors">
                            ☆
                        </button>
                        <button className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#E9ECF2] flex items-center justify-center text-[#5B616E] hover:bg-[#F5F7FA] transition-colors">
                            ↑
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 ml-4 overflow-x-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap ${activeTab === tab
                                    ? "bg-[#0A0B0D] text-white"
                                    : "bg-transparent text-[#0A0B0D] hover:bg-[#EEF0F3]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-[295px] shrink-0">
                        <h2 className="text-[20px] font-semibold text-[#0A0B0D] mb-3">
                            About {coin.name}
                        </h2>
                        <p className="text-[14px] text-[#5B616E] leading-relaxed mb-5">
                            {coin.description ||
                                `${coin.name} is a leading cryptocurrency available for trading on Coinbase.`}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <a
                                href="#"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E9ECF2] text-[13px] text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors"
                            >
                                <span>📄</span> Whitepaper
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E9ECF2] text-[13px] text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors"
                            >
                                <span>🌐</span> Official website
                            </a>
                        </div>

                        <Link
                            to="/signup"
                            className="flex items-center justify-between w-full px-8 py-4 bg-[#0052FF] text-white text-[16px] font-semibold rounded-[56px] hover:bg-[#0039B3] transition-colors"
                        >
                            <span>Buy {coin.name}</span>
                            <span>→</span>
                        </Link>

                        <div className="mt-5 p-4 bg-[#FAFAFA] rounded-2xl border border-[#E9ECF2]">
                            <p className="text-[13px] font-semibold text-[#0A0B0D] mb-1">
                                Happening now
                            </p>
                            <p className="text-[11px] text-[#5B616E] mb-2">
                                {" "}
                                AI generated · 1h ago
                            </p>
                            <p className="text-[13px] text-[#0A0B0D] leading-relaxed">
                                {coin.ticker} represents 60% of total cryptocurrency market cap,
                                while surging ↗️67% in daily volume.
                            </p>
                        </div>

                        <div className="mt-4 p-4 bg-[#F0B90B] rounded-2xl mb-8 md:mb-0">
                            <p className="text-[13px] font-semibold text-[#0A0B0D] mb-1">
                                Keep exploring
                            </p>
                            <p className="text-[12px] text-[#0A0B0D] mb-3">
                                View assets on the same network and more with search
                            </p>
                            <Link
                                to="/explore"
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0052FF] text-white text-[13px] font-semibold rounded-full hover:bg-[#0039B3] transition-colors"
                            >
                                Explore →
                            </Link>
                        </div>
                    </aside>

                    <div className="flex-1 min-w-0">
                        <div className="mb-2">
                            <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-1">
                                <span className="text-[32px] md:text-[40px] font-normal text-[#0A0B0D]">
                                    ${formattedPrice}
                                </span>
                                <span
                                    className={`text-[14px] md:text-[16px] font-medium ${isPositive ? "text-[#05B169]" : "text-[#F45532]"}`}
                                >
                                    {isPositive ? "↗️" : "↘️"}$
                                    {Math.abs(Number(priceChange24h)).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                    })}{" "}
                                    ({Math.abs(coin.change).toFixed(2)}%)
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-1 mb-2">
                            {TIME_PERIODS.map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setActivePeriod(period)}
                                    className={`px-3 py-1 rounded-lg text-[13px] font-medium transition-colors ${activePeriod === period
                                        ? "bg-[#E9ECF2] text-[#0A0B0D]"
                                        : "bg-transparent text-[#0A0B0D] hover:bg-[#F5F7FA]"
                                        }`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>

                        <div className="w-full h-[200px] md:h-[280px] relative mb-4">
                            <MiniChart positive={isPositive} coinId={coin.id} />
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0 border-t border-[rgba(91,97,110,0.15)]">
                            <div className="px-0 pr-0 md:pr-8 pt-6 md:border-r border-[rgba(91,97,110,0.15)]">
                                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">
                                    Trading Insights
                                </h2>
                                <div className="grid grid-cols-2 gap-x-6">
                                    <div className="flex flex-col items-center mb-4">
                                        <div className="relative w-16 h-16 mb-2">
                                            <svg
                                                viewBox="0 0 36 36"
                                                className="w-full h-full -rotate-90"
                                            >
                                                <circle
                                                    cx="18"
                                                    cy="18"
                                                    r="15"
                                                    fill="none"
                                                    stroke="#E9ECF2"
                                                    strokeWidth="3"
                                                />
                                                <circle
                                                    cx="18"
                                                    cy="18"
                                                    r="15"
                                                    fill="none"
                                                    stroke="#0052FF"
                                                    strokeWidth="3"
                                                    strokeDasharray={`${75 * 0.942} ${(100 - 75) * 0.942}`}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold">
                                                75%
                                            </span>
                                        </div>
                                        <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                            BUYER RATIO
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 pt-1">
                                        <div>
                                            <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                                BUYERS
                                            </p>
                                            <p className="text-[14px] font-medium">
                                                38K{" "}
                                                <span className="text-[#05B169] text-[12px]">
                                                    ↗️7.69%
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                                SELLERS
                                            </p>
                                            <p className="text-[14px] font-medium">
                                                14K{" "}
                                                <span className="text-[#05B169] text-[12px]">
                                                    ↗️2.66%
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                            TRADERS
                                        </p>
                                        <p className="text-[14px] font-medium">
                                            50K{" "}
                                            <span className="text-[#05B169] text-[12px]">↗️6.29%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                            SEARCHED
                                        </p>
                                        <p className="text-[14px] font-medium">9.8K</p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-0 md:px-8 pt-6 lg:border-r border-[rgba(91,97,110,0.15)]">
                                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">
                                    Market Stats
                                </h2>
                                <div className="grid grid-cols-2 gap-x-4">
                                    <StatItem
                                        label="MARKET CAP"
                                        value={`$${coin.marketCap}`}
                                        change={coin.change}
                                    />
                                    <StatItem label="FDV" value={`$${coin.marketCap}`} />
                                    <StatItem
                                        label="CIRC. SUPPLY"
                                        value={coin.circulatingSupply || "19.7M BTC"}
                                    />
                                    <StatItem
                                        label="MAX SUPPLY"
                                        value={coin.maxSupply || "21M BTC"}
                                    />
                                    <StatItem
                                        label="TOTAL SUPPLY"
                                        value={coin.circulatingSupply || "19.7M BTC"}
                                    />
                                </div>
                            </div>

                            <div className="px-0 lg:pl-8 pt-6">
                                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">
                                    Performance
                                </h2>
                                <div className="grid grid-cols-2 gap-x-4">
                                    <StatItem label="POPULARITY" value="#1" />
                                    <StatItem label="DOMINANCE" value="60.1%" />
                                    <StatItem
                                        label="VOLUME (24H)"
                                        value={`$${coin.volume}`}
                                        change={60.66}
                                    />
                                    <StatItem label="VOLUME (7D)" value="$3.34T" />
                                    <StatItem label="VOLUME (30D)" value="$13.87T" />
                                    <StatItem
                                        label="ALL TIME HIGH"
                                        value={coin.allTimeHigh || "$108,786"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(91,97,110,0.15)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="hidden lg:block lg:col-span-1">
                        <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">
                            Additional details
                        </h2>
                    </div>

                    {/* Column 1: Market Details */}
                    <div className="flex flex-col border-r border-[#E9ECF2] pr-6">
                        <h2 className="text-[15px] font-semibold text-[#0A0B0D] mb-4">
                            Market details
                        </h2>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                    {coin.ticker} VS MARKETS
                                </p>
                                <p className="text-[14px] font-bold text-[#05B169]">
                                    ↑ 4.68%
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">
                                    {coin.ticker} VS ETH
                                </p>
                                <p className="text-[14px] font-bold text-[#F45532]">
                                    ↓ 18.95%
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["mineable", "pow", "sha-256", "store-of-value"].map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-[#F5F7FA] text-[#5B616E] text-[11px] font-semibold rounded-[4px] border border-[#E9ECF2]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Network & Addresses */}
                    <div className="flex flex-col border-r border-[#E9ECF2] pr-6">
                        <h2 className="text-[15px] font-semibold text-[#0A0B0D] mb-4">
                            Network & Addresses
                        </h2>
                        <div className="space-y-3">
                            {[
                                { name: "Arbitrum", addr: "0xcbB7C...eed33Bf" },
                                { name: "Solana", addr: "cbbtcf3...iMij" },
                                { name: "Ethereum", addr: "0xcbB7C...eed33Bf" },
                                { name: "Base", addr: "0xcbB7C...eed33Bf" }
                            ].map((net, i) => (
                                <div key={i} className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-semibold text-[#0A0B0D]">{net.name}</span>
                                    <span className="text-[11px] text-[#5B616E] font-mono truncate max-w-[180px]">{net.addr}</span>
                                </div>
                            ))}
                            <button className="text-[13px] font-semibold text-[#0052FF] hover:underline mt-1 w-fit">
                                See all
                            </button>
                        </div>
                    </div>

                    {/* Column 3: Price History Table (GHS) */}
                    <div className="flex flex-col lg:col-span-1">
                        <h2 className="text-[15px] font-semibold text-[#0A0B0D] mb-4">
                            Price history
                        </h2>
                        <div className="min-w-full">
                            <div className="grid grid-cols-2 gap-4 text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide mb-3">
                                <span>Time</span>
                                <span className="text-right">Price (GHS)</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { time: "Today", price: "741,090.83", change: "4.83", pos: true },
                                    { time: "1 Day", price: "711,219.26", change: "4.91", pos: true },
                                    { time: "1 Week", price: "744,818.09", change: "0.75", pos: false },
                                    { time: "1 Month", price: "771,481.22", change: "1.78", pos: false },
                                    { time: "1 Year", price: "1,218,586.83", change: "12.36", pos: false }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-[13px] font-medium text-[#0A0B0D]">{item.time}</span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[13px] font-medium text-[#0A0B0D]">GHS {item.price}</span>
                                            <span className={`text-[11px] font-bold ${item.pos ? 'text-[#05B169]' : 'text-[#F45532]'}`}>
                                                {item.pos ? '↑' : '↓'} {item.change}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Section: Coinbase Insights */}
                <div className="mt-8 pt-6 border-t border-[rgba(91,97,110,0.15)] grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    {/* Left: Section Label */}
                    <div className="lg:col-span-1">
                        <h3 className="text-[18px] font-semibold text-[#0A0B0D] mb-1">
                            Coinbase Insights
                        </h3>
                        <p className="text-[11px] text-[#9BA3AF]">
                            AI generated 29m ago
                        </p>
                    </div>

                    {/* Right: Insights Card */}
                    <div className="lg:col-span-3">
                        <div className="bg-white border border-[#D8D8D8] rounded-2xl p-6 shadow-sm">

                            {/* Happening Now Block */}
                            <div className="mb-5 pb-5 border-b border-[#ECEFF1]">
                                <p className="text-[11px] font-bold text-[#0052FF] uppercase tracking-widest mb-3">
                                    Happening now
                                </p>
                                <p className="text-[16px] font-semibold text-[#0A0B0D] leading-snug mb-2">
                                    {coin.name} is trending up this week
                                </p>
                                <p className="text-[14px] text-[#5B616E] leading-relaxed">
                                    The total crypto market capitalization increased by{" "}
                                    <span className="font-semibold text-[#0A0B0D]">4.88%</span>{" "}
                                    since yesterday, driven by renewed institutional demand and positive
                                    macroeconomic signals. {coin.ticker} leads the surge among
                                    large-cap assets.
                                </p>
                            </div>

                            {/* Recent Trends Block */}
                            <div>
                                <p className="text-[11px] font-bold text-[#5B616E] uppercase tracking-widest mb-3">
                                    Recent Trends
                                </p>
                                <div className="space-y-2.5">
                                    <p className="text-[14px] text-[#5B616E] leading-relaxed">
                                        <span className="text-[#05B169] font-semibold">↑ 4.83%</span>{" "}
                                        — {coin.name} is trading higher than it was 24 hours ago,
                                        continuing a short-term bullish momentum.
                                    </p>
                                    <p className="text-[14px] text-[#5B616E] leading-relaxed">
                                        Compared to the 30-day average, {coin.ticker} is currently
                                        trading{" "}
                                        <span className="text-[#F45532] font-semibold">↓ 1.78%</span>{" "}
                                        below the monthly benchmark, suggesting consolidation before
                                        a potential move higher.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[rgba(91,97,110,0.15)]">
                    <h2 className="text-[20px] font-semibold text-[#0A0B0D] mb-6">
                        FAQ
                    </h2>
                    <div className="space-y-4">
                        {[
                            { q: `What is ${coin.name}?`, a: coin.description },
                            {
                                q: `How does ${coin.name} work?`,
                                a: `${coin.name} uses a decentralized blockchain ledger to record transactions. Miners or validators confirm transactions and add them to the blockchain in exchange for newly created ${coin.ticker} tokens.`,
                            },
                            {
                                q: `How can I buy ${coin.name}?`,
                                a: `You can buy ${coin.name} on Coinbase in just a few minutes. Create an account, add a payment method, and purchase ${coin.ticker} instantly.`,
                            },
                        ].map(({ q, a }) => (
                            <details
                                key={q}
                                className="border-b border-[rgba(91,97,110,0.15)] pb-4 last:border-0"
                            >
                                <summary className="text-[15px] font-semibold text-[#0A0B0D] cursor-pointer list-none flex justify-between items-center">
                                    {q}
                                    <span className="text-[#5B616E] text-xl">+</span>
                                </summary>
                                <p className="mt-3 text-[14px] text-[#5B616E] leading-relaxed">
                                    {a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[rgba(91,97,110,0.15)]">
                    <h3 className="text-[18px] font-semibold text-[#0A0B0D] mb-4">
                        Popular cryptocurrencies
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {cryptos
                            .slice(0, 8)
                            .filter((c) => c.id !== coin.id)
                            .slice(0, 4)
                            .map((c) => {
                                const pos = c.change >= 0;
                                return (
                                    <Link
                                        key={c.id}
                                        to={`/price/${c.id}`}
                                        className="flex items-center gap-3 p-3 rounded-xl border border-[#E9ECF2] hover:bg-[#F5F7FA] transition-colors"
                                    >
                                        <img
                                            src={c.icon}
                                            alt={c.name}
                                            className="w-8 h-8 rounded-full"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                        <div>
                                            <p className="text-[13px] font-semibold text-[#0A0B0D]">
                                                {c.ticker}
                                            </p>
                                            <p
                                                className={`text-[12px] font-medium ${pos ? "text-[#05B169]" : "text-[#F45532]"}`}
                                            >
                                                {pos ? "+" : ""}
                                                {c.change.toFixed(2)}%
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
