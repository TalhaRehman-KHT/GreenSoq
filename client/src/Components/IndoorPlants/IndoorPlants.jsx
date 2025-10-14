import React from "react";

export default function IndoorPlants() {
    const products = [
        {
            img: "/assets/olea.jpg",
            name: 'Monstera Deliciosa "The Hurricane or Swiss Cheese Plant" Holland',
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",
        },
        {
            img: "/assets/plant2.webp",
            name: "Peace Lily Plant - Elegant White Blooms",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",
        },
        {
            img: "/assets/plant3.jpg",
            name: "Areca Palm Indoor Plant",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",

        },
        {
            img: "/assets/plant1.webp",
            name: "Snake Plant - Sansevieria",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",

        },
        {
            img: "/assets/fruit-plants.jpg",
            name: "Rubber Plant Ficus Elastica",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",

        },
        {
            img: "/assets/clearance-sale.webp",
            name: "Aloe Vera Plant - Healing Green",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",

        },
        {
            img: "/assets/plant-bundles.webp",
            name: "ZZ Plant - Zanzibar Gem",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",

        },
        {
            img: "/assets/plant2.webp",
            name: "Pothos Golden - Money Plant",
            oldPrice: "Dhs 1200 Dhs 1000",
            newPrice: "Dhs 550 Dha 200",

        },
    ];

    return (
        <div className="p-10">
            <h3 className="text-2xl font-semibold text-center mb-10">
                Indoor Plants Collection
            </h3>

            {/* Product Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto scrollbar-hide">
                {products.map((p, i) => (
                    <div
                        key={i}
                        className="cart p-3 bg-white rounded-lg shadow-md flex flex-col items-start hover:shadow-lg transition-shadow duration-300 min-w-[220px]"
                    >
                        <div className="w-full h-48 overflow-hidden ">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700 line-clamp-2">
                            {p.name}
                        </p>
                        <div className="mt-2">
                            <span className="line-through font-light text-gray-500 block">
                                {p.oldPrice}
                            </span>
                            <span className="font-semibold text-gray-700">{p.newPrice}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Shop Collection Button */}
            <div className="flex justify-center mt-10">
                <button className="bg-black text-white px-6 py-3   cursor-pointer">
                    Shop Collection
                </button>
            </div>
        </div>
    );
}
