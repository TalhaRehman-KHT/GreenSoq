import React from "react";

export default function News() {
    return (
        <div className="py-16 px-4 text-center">
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-black mb-2">
                Newsletter
            </h3>

            {/* Subtext */}
            <p className="text-gray-700 mb-6">
                Invite customers to join your mailing list.
            </p>

            {/* Input and Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300  p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-black text-white p-2 w-[200px]  hover:bg-gray-800 transition-colors">
                    Sign Up
                </button>
            </div>
        </div>
    );
}
