import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coinbaseBlack from '../assets/coinbase-black.png';
import personalIcon from '../assets/signup/personal.svg';
import businessIcon from '../assets/signup/business.svg';
import developerIcon from '../assets/signup/developer.svg';
import { FaCheck } from 'react-icons/fa6';

const API = `${import.meta.env.VITE_API_URL}/auth`;

const Signup = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedType, setSelectedType] = useState('personal');
    const [step, setStep] = useState(1); // step 1 = account type, step 2 = form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
                <div className="bg-white rounded-full p-0.5 animate-pulse">
                    <img src={coinbaseBlack} alt="Coinbase" className="h-16 w-16" />
                </div>
            </div>
        );
    }

    const accountTypes = [
        { id: 'personal', title: 'Personal Account', desc: 'Trade crypto as an individual.', icon: personalIcon },
        { id: 'business', title: 'Business Account', desc: 'Manage portfolios, accept payments, and more.', icon: businessIcon },
        { id: 'developer', title: 'Developer Account', desc: 'Build onchain with developer tools.', icon: developerIcon },
    ];

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            const res = await fetch(`${API}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || 'Something went wrong.');
            } else {
                navigate('/signin');
            }
        } catch (err) {
            setError('Could not connect to server.');
        }
        setSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 relative overflow-y-auto">
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <Link to="/">
                    <div className="bg-white rounded-full p-px">
                        <img src={coinbaseBlack} alt="Coinbase" className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                </Link>
            </div>

            <div className="w-full max-w-[400px] mx-auto flex flex-col items-center pt-24 md:pt-32">

                {step === 1 && (
                    <>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-left w-full mb-2 tracking-tight leading-tight">
                            What kind of account are you creating?
                        </h1>
                        <p className="w-full text-sm text-[#0052ff] mb-8 font-bold">
                            Demo app – do not use your real password
                        </p>

                        <div className="flex flex-col gap-3 w-full pb-6">
                            {accountTypes.map((type) => (
                                <div
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={`relative cursor-pointer rounded-2xl p-5 transition-all duration-300 border-2 w-full flex items-center gap-4 ${
                                        selectedType === type.id
                                            ? 'bg-blue-50/5 border-[#0052ff]'
                                            : 'bg-[#111] border-gray-900 hover:border-gray-800'
                                    }`}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                        <img src={type.icon} alt={type.title} className="w-full h-full object-contain" style={{ filter: selectedType === type.id ? 'none' : 'grayscale(100%) opacity(0.8) invert(1)' }} />
                                    </div>
                                    <div className="flex flex-col flex-grow text-left">
                                        <h3 className="text-[17px] font-bold mb-0.5 text-white">{type.title}</h3>
                                        <p className="text-gray-500 text-[14px] font-medium leading-relaxed">{type.desc}</p>
                                    </div>
                                    {selectedType === type.id && (
                                        <div className="w-6 h-6 bg-[#0052ff] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                            <FaCheck className="text-white text-[12px]" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full py-4 rounded-full font-bold text-lg bg-[#0052ff] text-white hover:bg-[#004bd6] transition-all"
                        >
                            Continue
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-left w-full mb-2 tracking-tight leading-tight">
                            Create your account
                        </h1>
                        <p className="w-full text-sm text-[#0052ff] mb-8 font-bold">
                            Demo app – do not use your real password
                        </p>

                        <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-400">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-white placeholder-gray-600 shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-400">Email</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-white placeholder-gray-600 shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-400">Password</label>
                                <input
                                    type="password"
                                    placeholder="Min. 6 characters"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-white placeholder-gray-600 shadow-sm"
                                />
                            </div>

                            {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-4 rounded-full font-bold text-lg bg-[#0052ff] text-white hover:bg-[#004bd6] transition-all disabled:opacity-50 mt-2"
                            >
                                {submitting ? 'Creating account...' : 'Create account'}
                            </button>
                        </form>

                        <p className="text-center text-gray-500 text-sm font-medium mt-6">
                            Already have an account? <Link to="/signin" className="text-[#0052ff] hover:underline">Sign in</Link>
                        </p>

                        <button
                            onClick={() => setStep(1)}
                            className="text-[#0052ff] font-bold text-sm mt-4 hover:underline transition-colors"
                        >
                            ← Back
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Signup;
