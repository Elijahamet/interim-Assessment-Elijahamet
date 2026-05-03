import React from 'react';

const Input = ({ type = "text", placeholder, className = "", ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`flex-grow bg-white border border-gray-500 rounded-lg px-6 py-4 text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 ${className}`}
            {...props}
        />
    );
};

export default Input;
