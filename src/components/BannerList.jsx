import { Laptop,LaptopMinimal,ChevronRight, PcCase,  MemoryStick, Speaker, Monitor, Keyboard,Mouse, Headphones, Printer,Gamepad2, Gift} from "lucide-react";
import {PiOfficeChairBold} from "react-icons/pi";
export default function BannerList(){
	return(
		<div className="flex justify-between   ">
			 <div>
				<ul className="bg-white mt-5 rounded">
					<li className="relative flex justify-between hover:bg-red-600 group">
						<a href="#" className="flex gap-2 pt-2  py-2 translate-x-1 ">
							<Laptop/>
							<p className="font-xs ">Laptop</p>
						</a>
						<ChevronRight className="-translate-x-1 h-5 w-5 font-bold translate-y-2"/>
						<span className="absolute -right-5 top-1/2 -translate-y-1/2 w-0 h-0
						border-y-[20px] border-y-transparent
						border-l-[20px] border-l-red-600
						 hidden group-hover:block z-50 pointer-events-none"></span>
						   <div className="translate-x-3 absolute left-full top-0 w-[952px] h-[640px] bg-white shadow-lg p-4 hidden group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                               <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
							<div>
							<h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
							<ul className="text-sm space-y-1">
								<li>ASUS</li>
								<li>ACER</li>
								<li>MSI</li>
							</ul>
							</div>
							<div>
							<h3 className="font-bold text-red-600 mb-2">Giá bán</h3>
							<ul className="text-sm space-y-1">
								<li>Dưới 15 triệu</li>
								<li>Từ 15 đến 20 triệu</li>
								<li>Trên 20 triệu</li>
							</ul>
							</div>
							{/* Các cột khác tương tự */}
						</div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group ">
						<a href="#" className="flex gap-2 px-2 -translate-x-3 ">
							<LaptopMinimal/>
							<p>Laptop Gamming</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
						<span className="absolute -right-5  top-1/2 -translate-y-1/2 w-0 h-0
						border-y-[20px] border-y-transparent
						border-l-[20px] border-l-red-600
						 hidden group-hover:block z-50 pointer-events-none"></span>
						<div className="translate-x-3 absolute left-full -top-10 w-[952px] h-[640px] bg-white shadow-lg p-4 hidden group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
							<div>
							<h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
							<ul className="text-sm space-y-1">
								<li>ASUS</li>
								<li>ACER</li>
								<li>MSI</li>
							</ul>
							</div>
							<div>
							<h3 className="font-bold text-red-600 mb-2">Giá bán</h3>
							<ul className="text-sm space-y-1">
								<li>Dưới 15 triệu</li>
								<li>Từ 15 đến 20 triệu</li>
								<li>Trên 20 triệu</li>
							</ul>
							</div>
							{/* Các cột khác tương tự */}
						</div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<PcCase/>
							<p>PC GVN</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent
                        border-l-[20px] border-l-red-600 hidden group-hover:block z-50 pointer-events-none
                        "></span>
                        <div className="translate-x-3 absolute left-full -top-20 w-[952px] h-[640px] bg-white shadow-lg p-4 hidden group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                                <div>
                                    <h3 className="font-bold text-red-600 mb-2 ">Giá bán</h3>
                                    <ul className="text-sm space-y-1">
                                        <li>Dưới 15 triệu</li>
                                        <li>Trên 15 triệu hoặc dưới 20 triệu</li>
                                        <li>Trên 20 triệu</li>
                                    </ul>
                                </div>
                        </div>
					</li>
					 <li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group ">
						<a href="#" className="flex gap-2 -translate-x-1">
							<PcCase/>
							<p>Main, CPU, VGA</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                         <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent
                         border-l-[20px] border-l-red-600 hidden group-hover:block z-50 pointer-events-none
                         "></span>
                         <div className="translate-x-3 absolute left-full -top-[120px] w-[952px] h-[640px] bg-white p-4 hidden group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                             <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                             <div>
                                 <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                 <ul className="text-sm space-y-1">
                                     <li>ASUS</li>
                                     <li>ACER</li>
                                     <li>MSI</li>
                                 </ul>
                             </div>
                             <div>
                                 <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                 <ul className="text-sm space-y-1">
                                     <li>Dưới 15 triệu</li>
                                     <li>Trên 15 triệu và dưới 20 triệu</li>
                                     <li>Trên 20 triệu</li>
                                 </ul>
                             </div>
                         </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group ">
						<a href="#" className="flex gap-2 -translate-x-1">
							<PcCase/>
							<p>Case, Nguồn, Tản</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent
                         border-l-[20px] border-l-red-600 hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 absolute -top-40 w-[952px] h-[640px] bg-white p-4 left-full hidden group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu hoặc dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group ">
						<a href="#" className="flex gap-2 -translate-x-1">
							<MemoryStick/>
							<p>Ổ cứng, RAM, Thẻ nhớ</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent
                         border-l-[20px] border-l-red-600 hidden group-hover:block z-50 pointer-events-none">
                        </span>
                        <div className="translate-x-3 left-full w-[952px] h-[640px] -top-[200px] p-4 absolute bg-white shadow-lg hidden  group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1 ">
							<Speaker/>
							<p>Loa, Micro, Webcam</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 w-0 h-0 -translate-y-1/2 border-y-[20px] border-l-[20px]
                        border-y-transparent hidden border-l-red-600 group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 absolute p-4 -top-60 left-full w-[952px] h-[640px] bg-white hidden group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ACER</li>
                                    <li>ASUS</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Monitor/>
							<p>Màn hình</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 border-l-[20px] border-y-[20px] -translate-y-1/2 border-y-transparent
                        border-l-red-600 w-0 h-0 hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 absolute left-full -top-[280px] h-[640px] bg-white w-[952px] p-4 hidden group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ACER</li>
                                    <li>ASUS</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Keyboard/>
							<p>Bàn phím</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 w-0 h-0 border-l-[20px] border-y-[20px] border-l-red-600 border-y-transparent
                        top-1/2 -translate-y-1/2 hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 left-full hidden absolute -top-80 h-[640px] w-[952px] bg-white p-4 group-hover:flex flex wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Gía bán </h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Mouse/>
							<p>Chuột + Lót chuột</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 border-l-[20px] border-y-[20px] border-y-transparent
                        border-l-red-600 w-0 h-0 hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 absolute w-[952px] h-[640px] -top-[360px] bg-white p-4 left-full hidden  group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <li>Dưới 15 triệu</li>
                                <li>Trên 15 triệu hoặc dưới 20 triệu</li>
                                <li>Trên 20 triệu</li>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Headphones/>
							<p>Tai Nghe</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 w-0 h-0 -translate-y-1/2 border-l-[20px] border-y-[20px]
                        border-y-transparent hidden border-l-red-600 group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 left-full p-4 absolute bg-white w-[952px] h-[640px] -top-[400px] h-[600px] hidden group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Gía cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu hoặc dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<PiOfficeChairBold className="w-6 h-6"/>
							<p>Ghế - Bàn</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 border-y-[20px] border-l-[20px] border-l-red-600 border-y-transparent
                         w-0 h-0 hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="translate-x-3 absolute -top-[440px] left-full p-4 w-[952px] h-[640px] hidden bg-white group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-red-600 font-bold mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và duới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Printer/>
							<p>Phần mềm, mạng</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 -translate-y-1/2 top-1/2 w-0 h-0 border-l-[20px] border-y-[20px]
                        border-l-red-600 hidden border-y-transparent group-hover:block z-50 pointer-events-none"></span>
                        <div className="absolute translate-x-3 p-4 bg-white w-[952px] h-[640px] left-full hidden -top-[480px] group-hover:flex flex-wrap gap-6 z-40 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Gamepad2/>
							<p>Handle, Console</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 border-l-[20px] border-y-[20px]
                         border-l-red-600 hidden border-y-transparent w-0 h-0 group-hover:block z-50 pointer-events-none"></span>
                        <div className="absolute w-[952px] h-[640px] bg-white p-4 left-full -top-[520px] hidden translate-x-3 group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="text-red-600 font-bold mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-red-600 font-bold mb-2">Giá cà</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Gamepad2/>
							<p>Phụ kiện (Hub, sạc, cáp..)</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute w-0 h-0 -right-5 top-1/2 -translate-y-1/2 border-l-[20px] border-y-[20px]
                        border-l-red-600 border-y-transparent hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="absolute bg-white w-[952px] h-[640px] translate-x-3 p-4 -top-[560px] hidden left-full group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
					<li className="relative flex justify-between py-2 px-2 hover:bg-red-600 group">
						<a href="#" className="flex gap-2 -translate-x-1">
							<Gift/>
							<p>Dịch vụ và thông tin khác</p>
						</a>
						<ChevronRight className="translate-x-1 h-5 w-5 font-bold translate-y-1"/>
                        <span className="absolute -right-5 top-1/2 -translate-y-1/2 border-y-[20px] border-l-[20px]
                        border-l-red-600 border-y-transparent hidden group-hover:block z-50 pointer-events-none"></span>
                        <div className="absolute translate-x-3 left-full p-4 -top-[600px] h-[640px] hidden bg-white w-[952px] group-hover:flex flex-wrap z-40 gap-6 rounded rounded-sm">
                            <div className="absolute -left-3 top-0 w-3 h-full bg-transparent"></div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Thương hiệu</h3>
                                <ul className="text-sm space-y-1">
                                    <li>ASUS</li>
                                    <li>ACER</li>
                                    <li>MSI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-600 mb-2">Giá cả</h3>
                                <ul className="text-sm space-y-1">
                                    <li>Dưới 15 triệu</li>
                                    <li>Trên 15 triệu và dưới 20 triệu</li>
                                    <li>Trên 20 triêệu</li>
                                </ul>
                            </div>
                        </div>
					</li>
				</ul>
			</div>
		</div>
	)
}