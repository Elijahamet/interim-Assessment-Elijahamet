import React from 'react';
import logo from '../assets/logo.svg';
import { FaXTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { FiGlobe } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-200 border-t border-gray-100 px-4 md:px-8 pb-16">
            <div className="max-w-7xl mx-auto pt-10 md:pt-16">

                {/* 1. Link Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 text-[14px]">

                    <div className="flex flex-col items-start px-0">
                        <img src={logo} alt="Coinbase" className="h-12 md:h-16 w-fit mb-6 md:mb-8" />
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-[11px] mb-4">Company</h4>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Vendors</a></li>
                            <li><a href="#">Legal & privacy</a></li>
                            <li><a href="#">Cookie policy</a></li>
                            <li><a href="#">Cookie preferences</a></li>
                            <li><a href="#">Digital Asset Disclosures</a></li>
                        </ul>
                        <div className="mt-10">
                            <h4 className="font-bold uppercase text-[11px] mb-4">Learn</h4>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Market statistics</a></li>
                                <li><a href="#">Coinbase Bytes newsletter</a></li>
                                <li><a href="#">Crypto basics</a></li>
                                <li><a href="#">Tips & tutorials</a></li>
                                <li><a href="#">Crypto glossary</a></li>
                                <li><a href="#">Market updates</a></li>
                                <li><a href="#">What is Bitcoin?</a></li>
                                <li><a href="#">What is crypto?</a></li>
                                <li><a href="#">What is a blockchain?</a></li>
                                <li><a href="#">How to set up a crypto wallet?</a></li>
                                <li><a href="#">How to send crypto?</a></li>
                                <li><a href="#">Taxes</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-[11px] mb-4">Individuals</h4>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li><a href="#">Buy & sell</a></li>
                            <li><a href="#">Earn free crypto</a></li>
                            <li><a href="#">Base App</a></li>
                            <li><a href="#">Coinbase One</a></li>
                            <li><a href="#">Debit Card</a></li>
                        </ul>
                        <div className="mt-10">
                            <h4 className="font-bold uppercase text-[11px] mb-4">Businesses</h4>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><a href="#">Asset Listings</a></li>
                                <li><a href="#">Coinbase Business</a></li>
                                <li><a href="#">Payments</a></li>
                                <li><a href="#">Commerce</a></li>
                                <li><a href="#">Token Manager</a></li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <h4 className="font-bold uppercase text-[11px] mb-4">Institutions</h4>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><a href="#">Prime</a></li>
                                <li><a href="#">Staking</a></li>
                                <li><a href="#">Exchange</a></li>
                                <li><a href="#">International Exchange</a></li>
                                <li><a href="#">Derivatives Exchange</a></li>
                                <li><a href="#">Verified Pools</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-[11px] mb-4">Developers</h4>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li><a href="#">Developer Platform</a></li>
                            <li><a href="#">Base</a></li>
                            <li><a href="#">Server Wallets</a></li>
                            <li><a href="#">Embedded Wallets</a></li>
                            <li><a href="#">Base Accounts (Smart Wallets)</a></li>
                            <li><a href="#">Onramp & Offramp</a></li>
                            <li><a href="#">x402</a></li>
                            <li><a href="#">Trade API</a></li>
                            <li><a href="#">Paymaster</a></li>
                            <li><a href="#">OnchainKit</a></li>
                            <li><a href="#">Data API</a></li>
                            <li><a href="#">Verifications</a></li>
                            <li><a href="#">Node</a></li>
                            <li><a href="#">AgentKit</a></li>
                            <li><a href="#">Staking</a></li>
                            <li><a href="#">Faucet</a></li>
                            <li><a href="#">Exchange API</a></li>
                            <li><a href="#">International Exchange API</a></li>
                            <li><a href="#">Prime API</a></li>
                            <li><a href="#">Derivatives API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase text-[11px] mb-4">Support</h4>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Create account</a></li>
                            <li><a href="#">ID verification</a></li>
                            <li><a href="#">Account information</a></li>
                            <li><a href="#">Payment methods</a></li>
                            <li><a href="#">Account access</a></li>
                            <li><a href="#">Supported crypto</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                        <div className="mt-10">
                            <h4 className="font-bold uppercase text-[11px] mb-4">Asset prices</h4>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><a href="#">Bitcoin price</a></li>
                                <li><a href="#">Ethereum price</a></li>
                                <li><a href="#">Solana price</a></li>
                                <li><a href="#">XRP price</a></li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <h4 className="font-bold uppercase text-[11px] mb-4">Stock prices</h4>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><a href="#">NVIDIA price</a></li>
                                <li><a href="#">Apple price</a></li>
                                <li><a href="#">Microsoft price</a></li>
                                <li><a href="#">Amazon price</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                {/* 2. Icons Row (Placed under the logo column area) */}
                <div className="flex justify-start gap-4 text-xl text-gray-500 mt-12 mb-6">
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                </div>

                {/* 3. Divider Line (Pulled Up Closer to Icons) */}
                <hr className="border-gray-100 mb-8" />

                {/* 4. Legal Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-gray-400 font-medium pb-8 md:pb-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                        <p>© 2026 Coinbase</p>
                        <span className="hidden sm:inline">•</span>
                        <a href="#" className="hover:text-black transition-colors">Privacy</a>
                        <span className="hidden sm:inline">•</span>
                        <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
                    </div>
                    <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
                        <FiGlobe className="text-base" />
                        <span className="font-bold">Global</span>
                        <span>•</span>
                        <span className="font-bold">English</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
