import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Element } from "react-scroll";
import { profile } from "../assets";

type Props = {};

const Home = (props: Props) => {
	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch("CV.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob); // Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "CV.pdf";
				alink.click();
			});
		});
	};

	return (
		<Element name="home" className="bg-[#0a192f] w-full h-screen">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<img
					src={profile}
					alt="perfil"
					width={150}
					className="rounded-full mb-10"
				/>
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
					<button
						className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600 duration-300 group"
						onClick={onButtonClick}>
						Curriculum
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-2" />
						</span>
					</button>
				</div>
			</div>
		</Element>
	);
};

export default Home;
