import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Work = (props: Props) => {
	return (
		<Element
			name="work"
			className="w-full bg-bg_primary md:h-screen text-gray-300">
			<div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-400">
						Work
					</p>
					<p className="py-6">Algunos de mis ultimos proyectos</p>
				</div>
				<div className="shadow-lg gap-10 rounded-md flex flex-col justify-center">
					<a href="#">
						<div className="rounded-lg shadow-[#040c16] px-5 py-6 bg-white min-h-[200px] hover:scale-110 duration-300 flex-col flex">
							<h1 className="text-black font-bold text-[22px]">SUGA</h1>
							<p className="text-gray-500 text-[18px] font-semibold">
								Poder Jucidial
							</p>
							<p className="text-[15px] text-slate-800 mt-4">
								Estuve encargado de desarrollar backend como frontend con Spring
								Boot. Se uso exclusivamente Spring Boot para el desarrollo de
								backend y frontend. Utilización SCRUM en Jira como metodología
								de desarrollo. Para el diseño se creó uno de cero con HTML, CSS
								y bootstrap Se logro llevar acabo el proyecto Migracion SUGA
							</p>
							<p className=" self-end text-[13px] text-blue-600">
								SpringBoot - Java - HTML - CSS - Bootstrap
							</p>
						</div>
					</a>
					<a href="https://github.com/Jose1060/comeloso_app">
						<div className="rounded-lg shadow-[#040c16] px-5 py-6 bg-white h-[200px] hover:scale-110 duration-300 flex-col flex">
							<h1 className="text-black font-bold text-[22px]">ComelOso</h1>
							<p className="text-gray-500 text-[18px] font-semibold">
								Personal
							</p>
							<p className="text-[15px] text-slate-800 mt-4">
								Crear una aplicación que facilite la elección del usuario al
								elegir un restaurante a través de gustos, preferencias y su
								localización, además de dar a conocer restaurantes de todo tipo
								a los usuarios.
							</p>
							<p className=" self-end text-[13px] text-blue-600">
								Flutter - Firebase - Mongo - Express - Node
							</p>
						</div>
					</a>
					<a href="https://github.com/Jose1060/TechForestApp">
						<div className="rounded-lg shadow-[#040c16] px-5 py-6 bg-white h-[200px] hover:scale-110 duration-300 flex-col flex">
							<h1 className="text-black font-bold text-[22px]">TechForest</h1>
							<p className="text-gray-500 text-[18px] font-semibold">
								Personal
							</p>
							<p className="text-[15px] text-slate-800 mt-4">
								Crear una aplicación que automatice el riego de jardines en
								hogares, con un arduino, una bomba de agua y un poco de
								creatividad creamos una aplicación que mediante la preferencia
								del usuario rige sus plantas cuando desee.{" "}
							</p>
							<p className=" self-end text-[13px] text-blue-600">
								Kotlin - Django - Mongo - Jetpack Compose
							</p>
						</div>
					</a>
				</div>
			</div>
		</Element>
	);
};

export default Work;
