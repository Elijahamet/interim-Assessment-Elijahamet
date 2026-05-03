import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import coinbaseBlack from '../assets/coinbase-black.png';
import { FaApple, FaGoogle, FaKey } from 'react-icons/fa6';

const API = `${import.meta.env.VITE_API_URL}/auth`;

const Signin = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1); // step 1 = email, step 2 = password
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
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

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            const res = await fetch(`${API}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // needed for the cookie
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || 'Something went wrong.');
            } else {
                login(data.user);
                navigate('/explore');
            }
        } catch (err) {
            setError('Could not connect to server.');
        }
        setSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 md:p-10 relative overflow-y-auto">
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <Link to="/">
                    <div className="bg-white rounded-full p-px">
                        <img src={coinbaseBlack} alt="Coinbase" className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                </Link>
            </div>

            <div className="w-full max-w-[400px] mx-auto flex flex-col items-center mt-20 md:mt-32">
                <h1 className="text-2xl md:text-3xl font-extrabold text-left w-full mb-2 tracking-tight">
                    Sign in to Coinbase
                </h1>
                <p className="w-full text-sm text-[#0052ff] mb-8 font-bold">
                    Demo app – do not use your real password
                </p>

                <div className="w-full flex flex-col gap-6">

                    {step === 1 && (
                        <>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-400">Email</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-white placeholder-gray-600 shadow-sm"
                                />
                            </div>

                            <button
                                disabled={email.trim() === ''}
                                onClick={() => setStep(2)}
                                className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
                                    email.trim() === ''
                                        ? 'bg-gray-900 text-gray-600 cursor-not-allowed'
                                        : 'bg-[#0052ff] text-white hover:bg-[#004bd6]'
                                }`}
                            >
                                Continue
                            </button>
                        </>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-gray-400">Email</label>
                                <p className="text-white font-semibold bg-[#111] p-4 rounded-xl border border-gray-800">{email}</p>
                            </div>

                            <div className="flex flex-col gap-1.5 mt-2">
                                <label className="text-sm font-bold text-gray-400">Password</label>
                                <input
                                    type="password"
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoFocus
                                    className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] outline-none transition-colors font-medium text-white placeholder-gray-600 shadow-sm"
                                />
                            </div>

                            {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-4 rounded-full font-bold text-lg bg-[#0052ff] text-white hover:bg-[#004bd6] transition-all disabled:opacity-50"
                            >
                                {submitting ? 'Signing in...' : 'Sign in'}
                            </button>

                            <button
                                type="button"
                                onClick={() => { setStep(1); setError(''); }}
                                className="text-[#0052ff] font-bold text-sm hover:underline transition-colors mt-2"
                            >
                                ← Change email
                            </button>
                        </form>
                    )}

                    <div className="flex items-center gap-4 my-2">
                        <div className="h-[1px] bg-gray-800 flex-grow"></div>
                        <span className="text-gray-600 font-bold text-xs">OR</span>
                        <div className="h-[1px] bg-gray-800 flex-grow"></div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-transparent hover:bg-gray-900 text-white py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-3 border border-gray-800 shadow-sm">
                            <FaKey className="text-lg" /> Sign in with passkey
                        </button>
                        <button className="w-full bg-transparent hover:bg-gray-900 text-white py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-3 border border-gray-800 shadow-sm">
                            <FaGoogle className="text-lg" /> Sign in with Google
                        </button>
                        <button className="w-full bg-transparent hover:bg-gray-900 text-white py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-3 border border-gray-800 shadow-sm">
                            <FaApple className="text-lg" /> Sign in with Apple
                        </button>
                    </div>

                    <p className="text-center text-gray-500 text-sm font-medium mt-4">
                        Don't have an account? <Link to="/signup" className="text-[#0052ff] hover:underline">Sign up</Link>
                    </p>

                    <div className="mt-8 text-center flex flex-col gap-4 text-xs font-medium text-gray-600">
                        <p>Not your device? Use a private window. See our <Link to="#" className="text-[#0052ff] hover:underline">Privacy Policy</Link> for more info.</p>
                        <Link to="/" className="text-[#0052ff] hover:underline font-bold mt-2">Cancel signing in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
