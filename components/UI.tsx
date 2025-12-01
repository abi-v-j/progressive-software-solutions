import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  asLink?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  asLink,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-blue-800 focus:ring-brand",
    secondary: "bg-neutralDark text-white hover:bg-opacity-90 focus:ring-neutralDark",
    outline: "border border-brand text-brand hover:bg-brand hover:text-white focus:ring-brand",
    danger: "bg-accent text-white hover:bg-red-700 focus:ring-accent",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-6 py-2",
    lg: "h-12 px-8 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asLink) {
    return (
      <Link to={asLink} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-blue-100 text-blue-800' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
    {children}
  </span>
);

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-secondary max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-20 bg-accent mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, className = '', ...props }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      id={id}
      className={`w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand px-4 py-2 border ${className}`}
      {...props}
    />
  </div>
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, id, className = '', ...props }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      id={id}
      className={`w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand px-4 py-2 border ${className}`}
      {...props}
    />
  </div>
);
