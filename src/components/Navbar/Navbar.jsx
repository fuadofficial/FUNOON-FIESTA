// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
    };

    window.addEventListener('resize', handleResize);

    return (
        <header className="bg-gray-800 shadow-lg fixed w-full z-20 h-16 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white font-bold text-2xl">
                        <Link to="/">Funoon fiesta</Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-10">
                        <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            About
                        </Link>
                        <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Services
                        </Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <XIcon className="h-6 w-6 " /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="relative">
                    {isOpen && (
                        <div className="absolute -top-4 right-6  rounded-md bg-white shadow-xl w-40 text-center">
                            <nav className="px-2 pt-2 pb-4 space-y-1">
                                <Link
                                    to="/"
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-600"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-600"
                                    onClick={toggleMenu}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/services"
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-600"
                                    onClick={toggleMenu}
                                >
                                    Services
                                </Link>
                                <Link
                                    to="/contact"
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-600"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>

            )}
        </header>
    );
};

export default Navbar;
