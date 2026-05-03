import React from 'react';

const LegalDisclosure = () => {
    return (
        <section className="bg-white py-10 md:py-16 px-4 md:px-8 border-b border-gray-100">
            <div className="max-w-4xl mx-auto text-left md:text-center flex flex-col gap-4 md:gap-6">
                {/* Entity Identification */}
                <p className="text-sm font-medium text-gray-400">
                    DEX trading is offered by Coinbase Bermuda Technologies Ltd.
                </p>

                {/* Financial & Regional Disclaimer */}
                <p className="text-[10px] md:text-xs leading-relaxed text-gray-400">
                    Products and features may not be available in all regions.
                    Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii)
                    intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
                </p>
            </div>
        </section>
    );
};

export default LegalDisclosure;
