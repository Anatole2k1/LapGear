import {useEffect, useState} from "react";

export default function LastBanner(){
    const images = [
        "/pcbanner.jpg",
        "/landing-baner-home.webp",
        "/laptop-sale.png",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return(
        <>
            <div className="flex flex-col  translate-x-3 mx-3 justify-between">
                <div className={`relative w-full max-w-3xl overflow-hidden shadow-lg`}>
                    <img src={images[current]} alt="slide" className="w-[220px] h-[450px] object-cover mb-15 mt-5 rounded rounded-sm"/>
                </div>

                {/*<img src="/banner_07.png" alt="" className="w-[220px] h-[177x] object-cover  rounded rounded-sm"/>*/}
                <img src="/banner_06.png" alt="" className="   w-[220px] h-[177px] object-cover rounded rounded-sm"/>

            </div>
        </>
    )
}