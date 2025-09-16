import BannerList from "./BannerList";
import MidBanner from "./MidBanner.jsx";
import LastBanner from "./LastBanner.jsx";

export default function Body(){
	return(
		<>
			<div className="bg-gray-200 w-full min-h-screen">
				<div className="w-[80%] mx-auto flex ">
					<BannerList />
                    <MidBanner />
                    <LastBanner />
				</div>
			</div>
		</>
	)
}