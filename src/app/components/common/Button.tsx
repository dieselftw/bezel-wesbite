import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const baseStyles = "text-xl py-4 px-8 rounded-full transition duration-300 ease-in-out transform text-center relative overflow-hidden";
    const variantStyles = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-transparent hover:text-blue-900 hover:bg-gray-700 text-white border-2 border-white"
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? 20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-2xl"
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -20,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          🚀
        </motion.span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
