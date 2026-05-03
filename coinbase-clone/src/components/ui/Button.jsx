import React from 'react';

const Button = ({ children, variant = "black", className = "", as: Component = "button", ...props }) => {
    const variants = {
        primary: "bg-[#0052FF] text-white hover:bg-blue-700 active:scale-95",
        black: "bg-black text-white hover:bg-gray-800 active:scale-95",
        outline: "bg-transparent border border-gray-200 text-black hover:bg-gray-50 active:scale-95"
    };

    const baseStyle = "px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-200 w-fit inline-flex items-center justify-center cursor-pointer";

    return (
        <Component
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
