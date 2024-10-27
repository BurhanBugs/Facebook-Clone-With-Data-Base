import React, { useState } from 'react';

const Navbar = () => {
    // Track the active section
    const [activeSection, setActiveSection] = useState('home');
    // State for mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to set the active section
    const handleSectionClick = (section) => {
        setActiveSection(section);
        if (isMenuOpen) {
            setIsMenuOpen(false); // Close the menu when a section is clicked
        }
    };

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="navbar sticky top-0">
                <div className="flex h-14 px-6 items-center bg-white  justify-between shadow-lg">
                    {/* Left side - Logo */}
                    <div className="flex gap-3 lg:mr-36 justify-center items-center  ">
                        <div className="logo">
                            <img className='w-12 cursor-pointer' src="src\assets\facebook logo.png" alt="Logo" />
                        </div>
                        <div className="search">
                            <input className='  placeholder:text-slate-700 h-10 sm:w-60 focus:outline-none border rounded-full p-3 mx-2 w-40 bg-slate-200' type="text" placeholder="Search Facebook" />
                        </div>
                    </div>

                    {/* Hamburger Menu for small devices */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                            <img className="w-6" src="src/assets/icons8-menu-50.png" alt="Menu" />
                        </button>
                    </div>

                    {/* Center - Links */}
                    <div className="hidden w-[33%]  lg:flex items-center justify-between gap-3">
                        <div
                            onClick={() => handleSectionClick('home')}
                            className={`homeicon hover:bg-slate-200 cursor-pointer w-24 p-2 flex justify-center hover:border-b-4 hover:border-blue-500 items-center rounded-t-lg ${activeSection === 'home' ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:bg-[#f0f2f5]'}`}
                        >
                            <img className='w-8' src="src/assets/icons8-home-48.png" alt="Home" />
                        </div>
                        <div
                            onClick={() => handleSectionClick('friends')}
                            className={`homeicon hover:bg-slate-200 cursor-pointer w-24 p-2 flex justify-center hover:border-b-4 hover:border-blue-500 items-center rounded-t-lg ${activeSection === 'friends' ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:bg-[#f0f2f5]'}`}
                        >
                            <img className='w-8' src="src/assets/icons8-user-account-48.png" alt="Friends" />
                        </div>
                        <div
                            onClick={() => handleSectionClick('watch')}
                            className={`homeicon hover:bg-slate-200 cursor-pointer w-24 p-2 flex justify-center hover:border-b-4 hover:border-blue-500 items-center rounded-t-lg ${activeSection === 'watch' ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:bg-[#f0f2f5]'}`}
                        >
                            <img className='w-8' src="src/assets/icons8-tv-show-50.png" alt="Video" />
                        </div>
                        <div
                            onClick={() => handleSectionClick('marketplace')}
                            className={`homeicon hover:bg-slate-200 cursor-pointer w-24 p-2 flex justify-center hover:border-b-4 hover:border-blue-500 items-center rounded-t-lg ${activeSection === 'marketplace' ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:bg-[#f0f2f5]'}`}
                        >
                            <img className='w-8' src="src/assets/icons8-shop-50.png" alt="Marketplace" />
                        </div>
                        <div
                            onClick={() => handleSectionClick('groups')}
                            className={`homeicon hover:bg-slate-200 cursor-pointer w-24 p-2 flex justify-center hover:border-b-4 hover:border-blue-500 items-center rounded-t-lg ${activeSection === 'groups' ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:bg-[#f0f2f5]'}`}
                        >
                            <img className='w-8' src="src/assets/icons8-team-48.png" alt="Groups" />
                        </div>
                    </div>

                    {/* Right side - Icons */}
                    <div className="hidden lg:flex w-[33%] justify-end items-center gap-1">
                        <div className="hover:bg-slate-200 rounded-full p-3 flex items-center justify-center">
                            <img className='w-6 cursor-pointer' src="src/assets/icons8-messenger-24.png" alt="Messenger" />
                        </div>
                        <div className="hover:bg-slate-200 rounded-full p-3 flex items-center justify-center">
                            <img className='w-6 cursor-pointer' src="src/assets/icons8-bell-48.png" alt="Notifications" />
                        </div>
                        <div className="hover:bg-slate-200 rounded-full p-3 flex items-center justify-center">
                            <img className='w-6 cursor-pointer' src="src/assets/icons8-male-user-48.png" alt="Profile" />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-lg p-4">
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('home')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'home' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src/assets/icons8-home-48.png" alt="Home" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('friends')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'friends' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src/assets/icons8-user-account-48.png" alt="Friends" />
                                    Friends
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('watch')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'watch' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src/assets/icons8-tv-show-50.png" alt="Video" />
                                    Watch
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('marketplace')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'marketplace' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src/assets/icons8-shop-50.png" alt="Marketplace" />
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('groups')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'groups' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src/assets/icons8-team-48.png" alt="Groups" />
                                    Groups
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('groups')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'groups' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src\assets\icons8-messenger-24.png" alt="" />
                                    Messenger
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('groups')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'groups' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src\assets\icons8-bell-48.png" alt="" />
                                    Notifications
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => handleSectionClick('groups')}
                                    className={`flex items-center p-2 rounded ${activeSection === 'groups' ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-200 transition duration-300'}`}
                                >
                                    <img className='w-6 mr-2' src="src\assets\icons8-male-user-48.png" alt="" />
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
