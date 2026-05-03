import React from 'react';

const FooterDisclaimer = () => {
    return (
        <div className="w-full bg-gray-50 border-t border-gray-100 py-6 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    <span className="font-bold text-gray-900 block mb-1">Project Disclaimer</span>
                    This is a demo/student project designed for educational purposes only. It is not an official Coinbase product. 
                    <span className="block mt-2 text-red-500 font-bold">WARNING: DO NOT enter real personal information, credit card details, or sensitive passwords.</span>
                </p>
            </div>
        </div>
    );
};

export default FooterDisclaimer;
