import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {};

const Home = (props: Props) => {
	return (
		<div className="bg-[#0a192f] w-full h-screen">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-purple-400">Hi, my name is </p>
				<h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
					Jose Antonio
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
					I´m a Full-Stack Developer
				</h2>
				<p className="text-gray-400 py-4 max-w-[700px]">
					Desarrollador móvil apasionado con su trabajo. Me encata la
					tecnologia, la musica y los gatos, siempre estoy en busca de nuevos
					retos que superar
				</p>
				<div>
					<button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600 duration-300 group">
						View Work
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-2" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
