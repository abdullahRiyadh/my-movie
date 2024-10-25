// components/Navbar.js
import Link from 'next/link'; 
import { FaHome, FaHeart, FaHistory, FaBars, FaTimes } from 'react-icons/fa'; // Import icons 
import { useState } from 'react'; // Import useState for managing the mobile menu state

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to track mobile menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the mobile menu visibility
    };

    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Title of the application */}
                <h1 className="text-xl font-bold text-gray-100">MovieApp</h1>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-100 hover:text-indigo-400" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />} {/* Show close icon if menu is open */}
                </button>

                {/* Navigation links (desktop) */}
                <ul className={`hidden md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
                    <li className="flex items-center">
                        <FaHome className="inline-block mr-1" />
                        <Link href="/" className="hover:text-indigo-400">Home</Link>
                    </li>
                    <li className="flex items-center">
                        <FaHeart className="inline-block mr-1" />
                        <Link href="/favorites" className="hover:text-indigo-400">Favorites</Link>
                    </li>
                    <li className="flex items-center">
                        <FaHistory className="inline-block mr-1" />
                        <Link href="/history" className="hover:text-indigo-400">History</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu (visible only on smaller screens) */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 p-4">
                    <ul className="flex flex-col space-y-2">
                        <li className="flex items-center">
                            <FaHome className="inline-block mr-1" />
                            <Link href="/" className="hover:text-indigo-400">Home</Link>
                        </li>
                        <li className="flex items-center">
                            <FaHeart className="inline-block mr-1" />
                            <Link href="/favorites" className="hover:text-indigo-400">Favorites</Link>
                        </li>
                        <li className="flex items-center">
                            <FaHistory className="inline-block mr-1" />
                            <Link href="/history" className="hover:text-indigo-400">History</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
