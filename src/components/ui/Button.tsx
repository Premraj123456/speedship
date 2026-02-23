import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    title?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    onClick,
    disabled,
    type = 'button',
    title,
}) => {
    const baseStyles = 'font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
        secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
        outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white shadow-sm hover:shadow-md'
    };

    const sizes = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-base',
        lg: 'px-9 py-4 text-lg'
    };

    return (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
            whileTap={disabled ? {} : { scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
            title={title}
        >
            {children}
        </motion.button>
    );
};
