import {ShoppingBag} from "lucide-react";
import {useEffect, useState} from "react";

export default function SpecialOffer(){
   const products = [
       {id: 1, name: "PC FASTER GAMING i5 11400F-RTX 3050 6GB (ALL NEW - Bảo hành" +
               " 36 Tháng)", accessory: "+2 RAM", price: "9,900,000đ",oldPrice: "11,900,000đ",
           costSale: "-17%",image: "/product-laptop.jpg"
       },
       {id: 1, name: "PC FASTER GAMING i5 11400F-RTX 3050 6GB (ALL NEW - Bảo hành" +
               " 36 Tháng)", accessory: "+2 RAM", price: "9,900,000đ",oldPrice: "11,900,000đ",
           costSale: "-17%",image: "/product-laptop.jpg"
       },
       {id: 1, name: "PC FASTER GAMING i5 11400F-RTX 3050 6GB (ALL NEW - Bảo hành" +
               " 36 Tháng)", accessory: "+2 RAM", price: "9,900,000đ",oldPrice: "11,900,000đ",
           costSale: "-17%",image: "/product-laptop.jpg"
       },
       {id: 1, name: "PC FASTER GAMING i5 11400F-RTX 3050 6GB (ALL NEW - Bảo hành" +
               " 36 Tháng)", accessory: "+2 RAM", price: "9,900,000đ",oldPrice: "11,900,000đ",
           costSale: "-17%",image: "/product-laptop.jpg"
       },
   ]

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setCurrent((prev) => (prev + 1) % products.length);
        },3000);
        return () => clearInterval(timer);
    }, [products.length]);
    return(
        <>
            <div className={`w-full h-full bg-gray-200`}>
                <div className={`w-[80%] mx-auto rounded rounded-sm bg-red-600 `}>
                    <div className={`translate-x-4 translate-y-3`}>

                        <span className={`font-poppins text-3xl font-bold text-white`}>Khuyến mãi cực shock</span>
                    </div>

                    <div className={` flex py-8 px-4 gap-4 relative overflow-hidden`}>
                        {products.map((product) =>(
                            <div
                                key={product.id}
                                className={`bg-white rounded-xl shadow-md hover:shadow-xl py-6 px-1 transition flex flex-col`}
                            >
                                <img src={product.image} alt={product.name} className={`w-full h-[250px] object-cover`}/>
                                <span className={`font-bold py-2 text-sm py-5`}>{product.name}</span>
                                <span className={`text-xs text-gray-500`}>{product.accessory}</span>
                                <span className={`text-red-500 font-bold font-sans`}>{product.price}</span>
                                <div className={`flex justify-between`}>
                                    <span className={`text-xs line-through text-gray-600`}>{product.oldPrice}</span>
                                    <span className={`text-xs bg-red-700 text-white p-1 rounded rounded-sm`}>{product.costSale}</span>
                                </div>
                                <button className="relative flex items-center gap-2 mt-2 px-4 py-2 border border-blue-900 rounded-xl overflow-hidden group">
                                    {/* Nền chạy từ trái sang */}
                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-900 transition-all duration-500 group-hover:w-full"></span>

                                    {/* Icon */}
                                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 group-hover:bg-white transition-colors duration-500">
                                        <ShoppingBag className="text-white group-hover:text-blue-900 w-5 h-5 transition-colors duration-500" />
                                    </div>

                                    {/* Text */}
                                    <span className="relative z-10 font-medium text-blue-900 group-hover:text-white transition-colors duration-500">
                                Thêm vào giỏ hàng
                              </span>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}