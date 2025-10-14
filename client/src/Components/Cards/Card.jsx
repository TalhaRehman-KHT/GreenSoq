import React from "react";

export default function Card() {
    return (
        <>
            <div className="flex flex-wrap gap-5 justify-center mt-5">
                {/* 1st Card */}
                <div
                    className="flex flex-col items-start justify-start p-6 bg-cover bg-center text-white w-80 h-64 sm:w-96 sm:h-72 "
                    style={{
                        backgroundImage: "url('/assets/plant1.webp')",
                    }}
                >
                    <div className="mt-30">
                        <p className="text-lg font-semibold">Best Seller Large Plants</p>
                        <button className="bg-black p-3 rounded-md text-white mt-5 hover:bg-green-700 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* 2nd Card */}
                <div
                    className="flex flex-col items-start justify-start p-6 bg-cover bg-center text-white w-80 h-64 sm:w-96 sm:h-72 "
                    style={{
                        backgroundImage: "url('/assets/plant2.webp')",
                    }}
                >
                    <div className="mt-30">
                        <p className="text-lg font-semibold">Best Seller Large Plants</p>
                        <button className="bg-black p-3 rounded-md text-white mt-5 hover:bg-green-700 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* 3rd Card */}
                <div
                    className="flex flex-col items-start justify-start p-6 bg-cover bg-center text-white w-80 h-64 sm:w-96 sm:h-72 "
                    style={{
                        backgroundImage: "url('/assets/plant3.jpg')",
                    }}
                >
                    <div className="mt-30">
                        <p className="text-lg font-semibold">Best Seller Large Plants</p>
                        <button className="bg-black p-3 rounded-md text-white mt-5 hover:bg-green-700 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
