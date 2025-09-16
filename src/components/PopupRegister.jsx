import { X } from "lucide-react";
export default function PopupRegister({ onClose }){
	const handleCickdown = (e) =>{
		if ( e.target === e.currentTarget ){
			onClose();
		}
	}
	return (
		<>
			<div onClick={handleCickdown} className="fixed inset-0 z-50 bg-black bg-opacity-50  flex items-center justify-center ">
				<div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
					<button onClick={onClose} className="absolute top-1 right-3  text-gray-600 hover:text-black">
						<X/>
					</button>
					<h3 className="fotn-bold uppercase font-semibold">Register</h3>

					<input type="email" placeholder="Email" className="w-full mt-2 border shadow-md p-2 rounded-sm" />
					<input type="text" placeholder="Username" className="w-full mt-2 border shadow-md p-2 rounded-sm" />
					<input type="password" placeholder="Password" className="w-full mt-2 border shadow-md p-2 rounded-sm" />
					<input type="password" placeholder="Re-Password" className="w-full mt-2 border shadow-md p-2 rounded-sm" />

					<button className="mt-4 bg-red-600 p-2 rounded-sm shadow-xl w-full text-white hover:bg-red-700 ">
						Register
					</button>
					
				</div>
			</div>
		</>
	)
}