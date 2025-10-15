import React from "react";

export default function Cover() {
    return (
        <div className="w-full">
            {/* 🌿 Large Screen Image */}
            <img
                src="/assets/coverimg.png"
                alt="cover"
                className="
                    hidden       
                    lg:block     
                    w-full 
                    h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]
                    object-cover 
                "
            />

            {/* ❄️ Small Screen Image */}
            <img
                src="/assets/Snow_Winter_Sale.webp"
                alt="Snow Winter Sale"
                className="
                    block        
                    lg:hidden    
                    w-full 
                    h-[250px] sm:h-[400px] md:h-[500px]
                    object-cover 
                "
            />
        </div>
    );
}
