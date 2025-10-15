import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
import {
    User,
    ChevronDown,
    Search,
    Handbag,
    Menu,
    X,
} from "lucide-react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <nav className="navbar w-full bg-[#a1d132] left-0 top-0 z-50 shadow-md">
            {/* === Top Navbar === */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-3 fixed w-full bg-[#a1d132] top-0 left-0 z-50">

                {/* === LEFT SECTION (Mobile: Menu + Search) === */}
                <div className="flex items-center gap-3 md:hidden">
                    {/* Menu Icon */}
                    <button onClick={() => setMenuOpen(true)}>
                        <Menu className="w-6 h-6 text-black" />
                    </button>

                    {/* Search Icon */}
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <Search className="w-6 h-6 text-black" />
                    </button>
                </div>

                {/* === LOGO (centered on all screens) === */}
                <div className="flex items-center justify-center flex-1 md:flex-none">
                    <img
                        src="/assets/greensoqlogo.jpg"
                        alt="GreenSouq Logo"
                        className="w-24 sm:w-32 md:w-36 h-auto mx-auto"
                    />
                </div>

                {/* === RIGHT SECTION (User + Cart) === */}
                <div className="flex items-center gap-3">
                    <User
                        onClick={() => {
                            if (user) {
                                logout();
                                navigate("/login");
                            } else {
                                navigate("/login");
                            }
                        }}
                        className="w-6 h-6 cursor-pointer hover:text-gray-700"
                    />
                    <Handbag className="w-6 h-6 cursor-pointer" />
                </div>
            </div>

            {/* === Desktop Search Bar === */}
            <div className="hidden md:flex flex-1 mx-6 mt-16 px-20">
                <div className="flex w-full rounded">
                    <button className="flex items-center gap-1 p-3 bg-gray-100 text-lg font-medium">
                        All Categories
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for plants..."
                        className="flex-1 bg-white px-4 py-2 outline-none text-sm"
                    />
                    <button className="bg-black text-white px-4 flex items-center justify-center">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* === Contact info (Mobile only) === */}
            <div className="md:hidden mt-10 border-t border-gray-300 text-center py-1">
                <p className="text-sm font-semibold">+92 58 512 105</p>
                <p className="text-sm text-gray-700">info@gmail.com</p>
            </div>

            {/* === Mobile Search Bar === */}
            {showSearch && (
                <div className="md:hidden px-4 pb-3 bg-[#a1d132] animate-slide-down">
                    <input
                        type="text"
                        placeholder="Search for plants..."
                        className="w-full bg-white px-4 py-2 rounded outline-none text-sm"
                    />
                </div>
            )}

            {/* === Desktop Categories (Unchanged) === */}
            <div className="hidden md:block px-4 sm:px-10 lg:px-20 mt-5">
                <ul className="flex justify-start gap-6 lg:gap-8 py-2 text-black text-sm lg:text-base">
                    {[
                        "Indoor Plants",
                        "Outdoor Plants",
                        "Soil & Stone",
                        "Fertilizer & Pesticides",
                        "Pots & Planters",
                        "Seeds",
                        "Hydroponics",
                        "Garden Service",
                        "Plants Talks",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-1">
                            <a href="#" className="text-black hover:text-gray-700">
                                {item}
                            </a>
                            <ChevronDown className="w-3.5 h-3.5" />
                        </li>
                    ))}
                </ul>
            </div>

            {/* === Mobile Menu Overlay === */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
                    <div className="bg-white w-3/4 sm:w-1/2 h-full p-6 overflow-y-auto">
                        <button className="mb-6" onClick={() => setMenuOpen(false)}>
                            <X className="w-6 h-6" />
                        </button>

                        <ul className="flex flex-col gap-4 text-gray-800">
                            {[
                                "Indoor Plants",
                                "Outdoor Plants",
                                "Soil & Stone",
                                "Fertilizer & Pesticides",
                                "Pots & Planters",
                                "Seeds",
                                "Hydroponics",
                                "Garden Service",
                                "Plants Talks",
                            ].map((item) => (
                                <li key={item} className="flex items-center justify-between">
                                    <a href="#" className="font-medium">
                                        {item}
                                    </a>
                                    <ChevronDown className="w-4 h-4" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
                </div>
            )}
        </nav>
    );
}
