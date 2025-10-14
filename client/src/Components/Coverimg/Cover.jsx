import React from "react";

export default function Cover() {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
            <img
                src="/assets/coverimg.png"
                alt="cover"
                className="
                    w-full 
                    h-[250px] 
                    sm:h-[400px] 
                    md:h-[500px] 
                    lg:h-[600px] 
                    xl:h-[700px] 
                    object-cover 
                    rounded-xl
                "
            />
        </div>
    );
}
