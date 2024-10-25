import Link from 'next/link';
import { FaHome, FaHeart, FaHistory, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-lg mx-0">
            <div className="container mx-auto flex items-center justify-around">
                {/* Title of the application */}
                <h1 className="text-xl font-bold text-gray-100">MovieApp</h1>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="flex items-center text-gray-100 hover:text-indigo-400">
                        <FaHome className="mr-1" /> Home
                    </Link>
                    <Link href="/favorites" className="flex items-center text-gray-100 hover:text-indigo-400">
                        <FaHeart className="mr-1" /> Favorites
                    </Link>
                    <Link href="/history" className="flex items-center text-gray-100 hover:text-indigo-400">
                        <FaHistory className="mr-1" /> History
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-100 hover:text-indigo-400" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 p-4">
                    <ul className="flex flex-col space-y-2">
                        <li onClick={closeMenu}>
                            <Link href="/" className="flex items-center text-gray-100 hover:text-indigo-400">
                                <FaHome className="mr-1" /> Home
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/favorites" className="flex items-center text-gray-100 hover:text-indigo-400">
                                <FaHeart className="mr-1" /> Favorites
                            </Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/history" className="flex items-center text-gray-100 hover:text-indigo-400">
                                <FaHistory className="mr-1" /> History
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
