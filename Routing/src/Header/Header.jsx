
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link,NavLink } from 'react-router-dom';
import logo from '../assets/logo2.svg'

function Header() {
return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">

                        <Link
                            to="#"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Company
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Partners With Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
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
