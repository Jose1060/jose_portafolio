import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {};

const Home = (props: Props) => {
	return (
		<div className="bg-[#0a192f] w-full h-screen">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-purple-600">Hi, my name is </p>
				<h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
					Jose Antonio
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
					I´m a Full-Stack Developer
				</h2>
				<p className="text-gray-400 py-4 max-w-[700px]">
					Desarrollador móvil apasionado con su trabajo. Me gusta seguir
					aprendiendo y desarrollar proyectos que supongan un reto. Me considero
					una persona autodidacta y que aprende rápido, por lo que no tengo
					problemas en adaptarme y dar soluciones a problemas de manera
					eficiente. Me encanta la tecnología y las innovaciones que pueden
					cambiar al mundo o el mundo de una persona
				</p>
				<div>
					<button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">
						View Work <HiArrowNarrowRight className="ml-2" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
