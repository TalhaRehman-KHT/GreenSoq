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
        <div className="p-20">
            <h3 className="text-2xl font-semibold text-center mb-10">
                Top Categories this Week
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
                {categories.map((cat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <a
                            href="#"
                            className="mt-3 text-lg text-center text-gray-800 hover:text-green-700 transition-colors"
                        >
                            {cat.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
