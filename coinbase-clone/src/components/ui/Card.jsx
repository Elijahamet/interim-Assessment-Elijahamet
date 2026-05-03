import React from 'react';

const Card = ({ article }) => {
    return (
        <article className="group flex flex-col gap-4 cursor-pointer">
            <div
                className="rounded-[28px] overflow-hidden w-full aspect-video"
                style={{ backgroundColor: article.bg }}
            >
                <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black leading-snug px-1 hover:underline cursor-pointer transition-all duration-200">
                {article.headline}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed px-1">
                {article.body}
            </p>
        </article>
    );
};

export default Card;
