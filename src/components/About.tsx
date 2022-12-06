import React from "react";
import { Element } from "react-scroll";

type Props = {};

const About = (props: Props) => {
	return (
		<Element
			name="about"
			className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-purple-400">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>
							Hola, soy Jose, encantado de conocerte. Por favor tomate tu tiempo
							para ver
						</p>
					</div>
					<div>
						Soy una persona que le gusta seguir aprendiendo y desarrollar
						proyectos que supongan un reto. Me considero una persona autodidacta
						y que aprende rápido, por lo que no tengo problemas en adaptarme y
						dar soluciones a problemas de manera eficiente.
					</div>
				</div>
			</div>
		</Element>
	);
};

export default About;
