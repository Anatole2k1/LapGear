import { CircleQuestionMark ,PartyPopper, AlignJustify, Search, Headset,MapPin, ClipboardList, ShoppingBasket, User} from "lucide-react"
import { useState } from "react";
import Popuplogin from "./PopupLogin";
import PopupRegister from "./PopupRegister";
export default function Product(){
	// const [search , setSearch] = useState("");
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setRegister] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	return(
		<>
			<div className="w-full bg-red-600">
				<div className="w-[80%] mx-auto p-2 flex flex-wrap justify-between items-center ">
					
					<img src="/logo_02.png" alt="" className="object-cover h-20 animate-float drop-shadow-[0_0_12px_#00c3ff]" />
					
					<span className="flex gap-2 bg-blue-500 p-2 rounded-sm cursor-pointer hover:bg-blue-700 shadow-md">
						<AlignJustify className="w-6 h-6 text-white"/>
						<p className="hidden sm:inline  text-white">Danh mục</p>
					</span>
					<span className="flex-1 min-w-[200px] max-w-md">
						<form className="relative w-full max-w-sm shadow-sm">
						<input
							type="text"
							placeholder="Bạn cần tìm gì?"
							className=" text-start w-full px-4 py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
						<button
							type="submit"
							className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
						>
							<Search className="w-5 h-5" />
						</button>
						</form>
					</span>
						<span className="flex gap-2">
							<Headset className="w-7 h-7 mt-1 text-white"/>
							<span className="leading-tight">
								   <p className="text-xs text-white font-semibold">Hotline</p>
    							   <p className="text-sm text-white">1900.5301</p>
							</span>
						</span>
						<span className="flex gap-2">
							<MapPin className="w-7 h-7 mt-1 text-white"/>
							<span className="leading-tight">
								<p className="text-sm font-semibold text-white">Hệ thống</p>
								<p className="text-sm font-semibold text-white">Showroom</p>
							</span>
						</span>
						<span className="flex gap-2">
							<ClipboardList className="w-7 h-7 mt-1 text-white"/>
							<span className="leading-tight">
								<p className="text-sm font-semibold text-white">Tra cứu</p>
								<p className="text-sm font-semibold text-white">đơn hàng</p>
							</span>
						</span>
					<span className="flex gap-2">
						<span className="relative mt-1">
							<ShoppingBasket className="w-7 h-7 mt-1 text-white" />
						<p className="absolute -top-2 -right-2 text-xs bg-yellow-500 text-white rounded-full px-1.5 py-0.5 border-2 border-white">
							0
						</p>
						</span>
						<span className="leading-tight">
								<p className="text-sm font-semibold text-white">Giỏ</p>
								<p className="text-sm font-semibold text-white">hàng</p>
						</span>
					</span>
						<div
						className="relative group"
						onMouseEnter={() => setShowDropdown(true)}
						onMouseLeave={() => setShowDropdown(false)}
						>
						<span className="bg-blue-500 flex gap-2 px-2 rounded-sm cursor-pointer hover:bg-blue-600">
							<User className="w-7 h-7 mt-1 text-white" />
							<span className="leading-tight">
							<p className="text-sm font-semibold text-white">Đăng</p>
							<p className="text-sm font-semibold text-white">nhập</p>
							</span>
						</span>

						{/* Dropdown */}
						<div
							className={`-translate-x-20 absolute -left-20 mt-5 z-50 transition-all duration-300 ${
							showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
							}`}
						>
							<div className="rounded-md bg-blue-300 w-64 shadow-md">
							<div className="absolute -top-2 left-1/2 transform translate-x-20 w-0 h-0 
								border-l-[10px] border-r-[10px] border-b-[10px] border-transparent 
								border-b-blue-300"
							/>
							<span className="pt-2 flex items-center gap-1 whitespace-nowrap">
								<PartyPopper className="w-20 h-10 animate-float" />
								<p className="text-sm font-semibold pr-4">Xin chào, vui lòng đăng nhập</p>
							</span>
							<span className="flex justify-around mt-2">
								<button
								onClick={() => setOpenLogin(true)}
								className="font-semibold bg-black text-white px-2 py-1 rounded-sm shadow-sm border border-black"
								>
								Đăng nhập
								</button>
								<button
								onClick={() => setRegister(true)}
								className="font-semibold bg-white px-4 py-1 rounded-sm shadow-sm border border-black"
								>
								Đăng ký
								</button>
							</span>
							<div className="h-px bg-gray-400 mt-3" />
							<span className="mt-4 flex ml-5 gap-1 pb-2">
								<CircleQuestionMark />
								<p className="font-semibold cursor-pointer hover:underline">Trợ giúp</p>
							</span>
							</div>
						</div>
						</div>
				</div>
			</div>
			{openRegister && <PopupRegister onClose={() => setRegister(false)} />}
			{openLogin && <Popuplogin onClose={() => setOpenLogin(false)} />}
		</>
	)
}