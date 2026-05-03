import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API = `${import.meta.env.VITE_API_URL}/auth`;

const Profile = () => {
    const navigate = useNavigate();
    const { user, loading, logout } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/signin');
        }
    }, [user, loading, navigate]);

    const handleLogout = async () => {
        await logout();
        navigate('/signin');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-black text-lg">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-[#0a0b0d] flex flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">

                {/* Avatar */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-[#0052ff] flex items-center justify-center text-4xl text-white font-bold mb-4 shadow-md">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <h1 className="text-3xl font-extrabold text-black tracking-tight">{user?.name}</h1>
                    <p className="text-gray-500 font-medium mt-1">Coinbase Member</p>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 mb-8">
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center justify-between">
                        <span className="text-gray-500 font-bold">Name</span>
                        <span className="text-black font-semibold">{user?.name}</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center justify-between">
                        <span className="text-gray-500 font-bold">Email</span>
                        <span className="text-black font-semibold">{user?.email}</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center justify-between">
                        <span className="text-gray-500 font-bold">Joined</span>
                        <span className="text-black font-semibold">
                            {new Date(user?.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <Link to="/add-crypto" className="w-full py-3.5 rounded-full font-bold text-center bg-white text-[#0052ff] border border-[#0052ff] hover:bg-blue-50 transition-all">
                        + Add Cryptocurrency
                    </Link>
                    <Link to="/" className="w-full py-3.5 rounded-full font-bold text-center bg-[#0052ff] text-white hover:bg-[#004bd6] transition-all">
                        Go to Home
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full py-3.5 rounded-full font-bold bg-white text-red-500 hover:bg-red-50 transition-all border border-red-100"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
