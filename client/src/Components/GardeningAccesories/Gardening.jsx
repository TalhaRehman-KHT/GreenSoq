import React from "react";

export default function Gardening() {
    const accessories = [
        { img: "/assets/plant1.webp", name: "Watering Can - 1.5L Garden Sprayer", oldPrice: "Dhs 500", newPrice: "Dhs 350" },
        { img: "/assets/plant2.webp", name: "Stainless Steel Gardening Scissors", oldPrice: "Dhs 400", newPrice: "Dhs 250" },
        { img: "/assets/plant3.jpg", name: "Gardening Gloves - Anti Slip & Breathable", oldPrice: "Dhs 200", newPrice: "Dhs 120" },
        { img: "/assets/fruit-plants.jpg", name: "Plant Spray Bottle 500ml", oldPrice: "Dhs 150", newPrice: "Dhs 90" },
        { img: "/assets/clearance-sale.webp", name: "Mini Garden Tool Set (3 pcs)", oldPrice: "Dhs 350", newPrice: "Dhs 200" },
        { img: "/assets/plant-bundles.webp", name: "Soil Moisture Meter - Garden Tester", oldPrice: "Dhs 600", newPrice: "Dhs 400" },
        { img: "/assets/olea.jpg", name: "Plastic Flower Pots Set of 4", oldPrice: "Dhs 450", newPrice: "Dhs 300" },
        { img: "/assets/plant2.webp", name: "Hand Shovel and Rake Combo", oldPrice: "Dhs 250", newPrice: "Dhs 150" },
    ];

    return (
        <section className="px-4 sm:px-8 md:px-12 py-10 bg-gray-50">
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-center mb-8">
                Gardening Accessories
            </h3>

            {/* Responsive Grid */}
            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-6 
                justify-items-center
            ">
                {accessories.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md  p-3 hover:shadow-lg transition-shadow duration-300 w-full max-w-[260px]"
                    >
                        <div className="w-full h-44 sm:h-48 overflow-hidden ">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <p className="mt-3 text-sm font-medium text-gray-700 line-clamp-2 text-center">
                            {item.name}
                        </p>

                        <div className="mt-2 text-center">
                            <span className="line-through font-light text-gray-500 block">
                                {item.oldPrice}
                            </span>
                            <span className="font-semibold text-gray-700">
                                {item.newPrice}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Shop Button */}
            <div className="flex justify-center mt-10">
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                    Shop Collection
                </button>
            </div>
        </section>
    );
}
