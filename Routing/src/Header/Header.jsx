import React, { useState } from 'react'; // 1. Import useState
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo2.svg';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-12 " alt="Logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>

                        <Link
                            to="#"
                            className="hidden sm:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                        >
                            Get started
                        </Link>
                    </div>

                    <div
                        className={`${isOpen ? "flex" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0 w-full">
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-green-700" : "text-gray-700"} hover:text-green-700 lg:p-0`}
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    Home
                                </NavLink>
                            </li>
                          <li>
                                <NavLink 
                                    to="/Company" 
                                    className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-green-700" : "text-gray-700"} hover:text-green-700 lg:p-0`}
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    Company
                                </NavLink>
                            </li>
                             <li>
                                <NavLink 
                                    to="/Partners_with" 
                                    className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-green-700" : "text-gray-700"} hover:text-green-700 lg:p-0`}
                                    onClick={() => setIsOpen(false)} 
                                >
                                    Partners_with
                                </NavLink>
                            </li>
                             <li>
                                <NavLink 
                                    to="/Blog" 
                                    className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-green-700" : "text-gray-700"} hover:text-green-700 lg:p-0`}
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    Blog
                                </NavLink>
                            </li>
                             <li>
                                <NavLink 
                                    to="/Contact" 
                                    className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-green-700" : "text-gray-700"} hover:text-green-700 lg:p-0`}
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header