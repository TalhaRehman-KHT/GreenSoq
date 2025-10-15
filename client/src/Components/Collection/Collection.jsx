import React from "react";

export default function Collection() {
    const categories = [
        { img: "/assets/plant-bundles.webp", name: "Plant Bundle" },
        { img: "/assets/fruit-plants.jpg", name: "Fruit Plants" },
        { img: "/assets/clearance-sale.webp", name: "Clearance Sale" },
        { img: "/assets/plant-bundles.webp", name: "Outdoor Plants" },
        { img: "/assets/fruit-plants.jpg", name: "Indoor Plants" },
        { img: "/assets/clearance-sale.webp", name: "Decor Pots" },
        { img: "/assets/fruit-plants.jpg", name: "New Arrivals" },
        { img: "/assets/plant-bundles.webp", name: "Flower Plants" },
    ];

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
                Top Categories this Week
            </h3>

            {/* ✅ Responsive Grid */}
            <div className="grid grid-cols-3  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center sm:gap-2
                        "
                    >
                        {/* ✅ Smaller image sizes to prevent overlap */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        <a
                            href="#"
                            className="mt-2 text-sm sm:text-base md:text-lg text-gray-800 hover:text-green-700 transition-colors"
                        >
                            {cat.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
