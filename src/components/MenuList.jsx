import { ScrollText, Newspaper, ShieldMinus, CreditCard, HandCoins } from "lucide-react"
export default function MenuList(){
	return(
		<>
			<div className="w-full bg-white shadow-md border-gray border-t">
				<div className="w-[80%] mx-auto p-4">
					<ul className="flex justify-between ">
						<li className="border-gray border-r pr-8">
							<a href="#" className=" flex gap-1 hover:text-red-600">
								<ScrollText />
							<p className="font-bold font-semibold ">Build PC tặng màn 24Hz</p>
							</a>
						</li>
						<li className="border-gray border-r pr-8">
							<a href="#" className="flex gap-1 hover:text-red-600">
								<Newspaper />
							<p className="font-bold font-semibold ">Tin công nghệ</p>
							</a>
						</li>
						<li className=" border-gray border-r pr-8">
							<a href="#" className="flex gap-1 hover:text-red-600">
								<ShieldMinus />
							<p className="font-bold font-semibold ">Dịch vụ sửa chữa </p>
							</a>
						</li>
						<li className=" border-gray border-r pr-8">
							<a href="#" className="flex gap-1 hover:text-red-600">
								<CreditCard />
							<p className="font-bold font-semibold ">Dịch vụ kỹ thuật tại nhà</p>
							</a>
						</li>
						<li className=" border-gray border-r pr-8">
							<a href="#" className="flex gap-1 hover:text-red-600">
								<HandCoins />
							<p className="font-bold font-semibold ">Thu cũ đổi mới</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}