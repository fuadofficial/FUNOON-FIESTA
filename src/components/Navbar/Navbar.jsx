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
        <header style={{ backgroundColor: '#fff' }} className="shadow-sm pt-10  w-full z-20  top-0 left-0" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-black text-3xl font-extrabold">
                        <Link to="/">LOGO</Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex ">
                        <Link to="/" className="text-gray-900 hover:text-green-900 px-3 py-2 rounded-md text-lg font-medium">
                            HOME
                        </Link>
                        <Link to="/about" className="text-gray-900 hover:text-green-900 px-3 py-2 rounded-md text-lg font-medium">
                            ABOUT
                        </Link>
                        <Link to="/services" className="text-gray-900 hover:text-green-900 px-3 py-2 rounded-md text-lg font-medium">
                            RESULT
                        </Link>
                        <Link to="/contact" className="text-gray-900 hover:text-green-900 px-3 py-2 rounded-md text-lg font-medium">
                            CONTACT
                        </Link>
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <XIcon className="h-6 w-6 font-black" /> : <MenuIcon className="h-6 w-6 font-black" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="relative">
                        {isOpen && (
                            <div className="absolute -top-4 right-6  rounded-md bg-white font-medium shadow-xl w-40 text-center">
                                <nav className="px-2 pt-2 pb-4 space-y-1">
                                    <Link
                                        to="/"
                                        className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-blue-900"
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-blue-900"
                                        onClick={toggleMenu}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/services"
                                        className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-blue-900"
                                        onClick={toggleMenu}
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-blue-900"
                                        onClick={toggleMenu}
                                    >
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                        )}
                    </div>

                )
            }
        </header >
    );
};

export default Navbar;
