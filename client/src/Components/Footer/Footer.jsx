import React from 'react'
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
    CreditCard,
    Wallet,
    DollarSign,
    Banknote,
} from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-300 py-12 px-6">
                {/* Top Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-800">

                    {/* Follow Us */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-600"><Facebook size={22} /></a>
                            <a href="#" className="hover:text-gray-600"><Instagram size={22} /></a>
                            <a href="#" className="hover:text-gray-600"><Twitter size={22} /></a>
                            <a href="#" className="hover:text-gray-600"><Youtube size={22} /></a>
                            <a href="#" className="hover:text-gray-600"><Linkedin size={22} /></a>
                        </div>
                    </div>

                    {/* Find It Fast */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Find It Fast</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-600">Indoor Plants</a></li>
                            <li><a href="#" className="hover:text-gray-600">Outdoor Plants</a></li>
                            <li><a href="#" className="hover:text-gray-600">Gardening Tools</a></li>
                            <li><a href="#" className="hover:text-gray-600">Pots & Planters</a></li>
                            <li><a href="#" className="hover:text-gray-600">Seeds & Soil</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Information</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-600">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-600">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-600">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-600">Returns</a></li>
                            <li><a href="#" className="hover:text-gray-600">Shipping</a></li>
                            <li><a href="#" className="hover:text-gray-600">Track Order</a></li>
                        </ul>
                    </div>

                    {/* My Account */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">My Account</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-600">Login</a></li>
                            <li><a href="#" className="hover:text-gray-600">Register</a></li>
                            <li><a href="#" className="hover:text-gray-600">My Orders</a></li>
                            <li><a href="#" className="hover:text-gray-600">Wishlist</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="max-w-7xl mx-auto mt-10 pt-6  flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-700 text-sm">
                    <p>© {new Date().getFullYear()} GreenSouq Clone. All Rights Reserved.</p>

                    {/* Payment Icons */}
                    <div className="flex gap-6 text-gray-700">
                        <div className="flex flex-col items-center hover:text-gray-600">
                            <CreditCard size={22} />
                            <span className="text-xs">Visa</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-gray-600">
                            <Wallet size={22} />
                            <span className="text-xs">PayPal</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-gray-600">
                            <DollarSign size={22} />
                            <span className="text-xs">MasterCard</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-gray-600">
                            <Banknote size={22} />
                            <span className="text-xs">Cash</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
