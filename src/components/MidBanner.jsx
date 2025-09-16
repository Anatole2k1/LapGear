import {useEffect, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

export  default function MidBanner(){
    const showimages = [
        "/banner_laptop_01.jpg",
        "/banner_laptop_02.jpg",
        "/banner_laptop_03.jpg"

    ];

    const [current, setCurrent] = useState(0);

    //Tự động chuyển ảnh sau 3 giây

    useEffect(() => {
        const timer = setInterval(() =>{
            setCurrent((prev) => (prev + 1) % showimages.length);
        },3000);
        return () => clearInterval(timer);
    }, [showimages.length]);

    //button control
    const prevSlide = () =>{
        setCurrent((prev) => (prev - 1 + showimages.length) % showimages.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % showimages.length);
    }
    return(
        <div className="flex flex-col gap-3 translate-x-3 translate-y-5 flex-1">
            {/* Banner chính */}
            <div className={`relative w-full max-w-3xl overflow-hidden shadow-lg`}>
                <img
                    src={showimages[current]}
                    alt="slide"
                    className="w-full h-[450px] object-cover rounded-sm"
                />
                <button
                    onClick={prevSlide}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full `}
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full`}
                >
                    <ChevronRight />
                </button>

                {/*dot bottom in images*/}
                <div className={`absolute bottom-4 left-1/2 -transalate-x-1/2 flex gap-2`}>
                    {showimages.map((_,index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                index === current ? "bg-white" : "bg-gray-400"
                            }`}
                            onClick={() => setCurrent(index)}
                        >
                        </span>
                    ))

                    }
                </div>
            </div>

            {/* 3 banner nhỏ ngang nhau */}
            <div className="flex gap-4 justify-around">
                <img src="/banner_04.png" alt="" className="w-[225px] h-[176px] object-cover rounded-sm"/>
                <img src="/banner_05.png" alt="" className="w-[225px] h-[176px] object-cover rounded-sm"/>
                <img src="/banner_06.png" alt="" className="w-[225px] h-[176px] object-cover rounded-sm"/>
            </div>
        </div>
    )
    
}