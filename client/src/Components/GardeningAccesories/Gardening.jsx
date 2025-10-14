import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gardening() {
    const scrollRef = useRef(null);

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

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="px-4 sm:px-8 md:px-12 py-10 bg-gray-50 relative z-0">
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-center mb-8">
                Gardening Accessories
            </h3>

            {/* Wrapper relative to section */}
            <div className="relative mt-6">
                {/* Left Button */}
                <button
                    onClick={() => scroll("left")}
                    className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Button */}
                <button
                    onClick={() => scroll("right")}
                    className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar py-2"
                >
                    {accessories.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] bg-white shadow-md rounded-lg p-3 flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-full h-44 sm:h-52 md:h-56 overflow-hidden ">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <p className="mt-3 text-sm font-medium text-gray-700 line-clamp-2">
                                {item.name}
                            </p>

                            <div className="mt-2">
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
            </div>

            {/* Shop Button */}
            <div className="flex justify-center mt-8">
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                    Shop Collection
                </button>
            </div>
        </section>

    );
}
