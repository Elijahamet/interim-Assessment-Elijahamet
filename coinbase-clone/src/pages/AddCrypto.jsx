import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API = `${import.meta.env.VITE_API_URL}/crypto`;

const AddCrypto = () => {
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [change24h, setChange24h] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const res = await fetch(API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    symbol,
                    price: Number(price),
                    image,
                    change24h: Number(change24h)
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage({ type: 'error', text: data.message || 'Failed to add cryptocurrency.' });
            } else {
                setMessage({ type: 'success', text: 'Cryptocurrency added successfully!' });
                // Reset form
                setName('');
                setSymbol('');
                setPrice('');
                setImage('');
                setChange24h('');
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Could not connect to the server.' });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white text-[#0a0b0d] flex flex-col items-center justify-center px-4 py-12">
            <div className="absolute top-6 left-6">
                <Link to="/profile" className="text-gray-500 hover:text-black transition-colors font-medium flex items-center gap-2">
                    ← Back to Profile
                </Link>
            </div>

            <div className="w-full max-w-[420px] bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h1 className="text-2xl font-extrabold mb-6 text-center text-black">Add New Crypto</h1>

                {message.text && (
                    <div className={`p-4 rounded-lg mb-6 font-medium text-sm ${message.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Bitcoin"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-white border border-gray-300 rounded-xl p-3.5 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-black placeholder-gray-400 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-gray-700">Symbol</label>
                        <input
                            type="text"
                            placeholder="e.g. BTC"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                            required
                            className="w-full bg-white border border-gray-300 rounded-xl p-3.5 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-black placeholder-gray-400 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-gray-700">Price (USD)</label>
                        <input
                            type="number"
                            step="any"
                            placeholder="e.g. 64000.50"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className="w-full bg-white border border-gray-300 rounded-xl p-3.5 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-black placeholder-gray-400 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-gray-700">24h Change (%)</label>
                        <input
                            type="number"
                            step="any"
                            placeholder="e.g. 2.5 or -1.2"
                            value={change24h}
                            onChange={(e) => setChange24h(e.target.value)}
                            required
                            className="w-full bg-white border border-gray-300 rounded-xl p-3.5 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-black placeholder-gray-400 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-gray-700">Image URL</label>
                        <input
                            type="url"
                            placeholder="https://example.com/icon.png"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                            className="w-full bg-white border border-gray-300 rounded-xl p-3.5 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-black placeholder-gray-400 shadow-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 mt-2 rounded-full font-bold text-lg bg-[#0052ff] text-white hover:bg-[#004bd6] transition-all disabled:opacity-50"
                    >
                        {loading ? 'Adding...' : 'Add Cryptocurrency'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCrypto;
