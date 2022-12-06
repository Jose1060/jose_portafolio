import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { Element } from "react-scroll";

type Props = {};

const Foda = (props: Props) => {
	return (
		<Element
			name="foda"
			className="bg-[#0a192f] text-gray-300 flex justify-center items-center pb-20">
			<div className="flex flex-col justify-center items-center max-w-[1000px] h-full">
				<div className="pb-24">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-400">
						Mi FODA
					</p>
				</div>
				<div className="grid grid-cols-2 gap-10">
					<div className="h-[500px] w-[500px] bg-white rounded-lg flex flex-col p-10">
						<div className="flex flex-row justify-between ">
							{" "}
							<BsFillHandThumbsUpFill
								size={40}
								style={{ color: "##60a5fa" }}
							/>{" "}
							<h2 className="text-[35px] text-blue-400 font-semibold">
								Fortalezas
							</h2>
						</div>
						<div>
							<div className="my-4">
								<span className="text-[17px] text-blue-400">PUNTUALIDAD</span>
								<p className="text-[15px] text-gray-500">
									Soy una persona puntual en los compromisos con personas, ya
									sea trabajos, reuniones, tareas, etc.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-blue-400">DISCIPLINADO</span>
								<p className="text-[15px] text-gray-500">
									Soy una persona que cumple con los principios que cree para
									llegar a sus metas.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-blue-400">RESPONSABLE</span>
								<p className="text-[15px] text-gray-500">
									Soy una persona que cumple con sus compromisos de forma
									eficiente.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-blue-400">AUTODIDACTA</span>
								<p className="text-[15px] text-gray-500">
									Soy una persona que tiende a aprender más por su cuenta o
									enseñando a los demás.
								</p>
							</div>
						</div>
					</div>
					<div className="h-[500px] w-[500px] bg-white rounded-lg flex flex-col p-10">
						<div className="flex flex-row-reverse justify-between ">
							{" "}
							<BsFillHandThumbsUpFill
								size={40}
								style={{ color: "##60a5fa" }}
							/>{" "}
							<h2 className="text-[35px] text-orange-400 font-semibold">
								Debilidades
							</h2>
						</div>
						<div>
							<div className="my-4">
								<span className="text-[17px] text-orange-400">INSEGURIDAD</span>
								<p className="text-[15px] text-gray-500">
									Soy inseguro cuando trato de exponer mis ideas delante de
									personas que desconozco por miedo al rechazo.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-orange-400">
									FALTA DE EXPERIENCIA
								</span>
								<p className="text-[15px] text-gray-500">
									Aun no cuento con experiencia suficiente en un entorno real
									trabajando con una empresa.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-orange-400">CONFIADO</span>
								<p className="text-[15px] text-gray-500">
									Hay situaciones que tiendo a minimizar su gravedad, como en
									proyectos que por su dificultad baja los voy posponiendo.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-orange-400">INDECISO</span>
								<p className="text-[15px] text-gray-500">
									Tiendo a pensar mucho al tomar decisiones
								</p>
							</div>
						</div>
					</div>
					<div className="h-[500px] w-[500px] bg-white rounded-lg flex flex-col p-10">
						<div className="flex flex-row justify-between ">
							{" "}
							<BsFillHandThumbsUpFill
								size={40}
								style={{ color: "##60a5fa" }}
							/>{" "}
							<h2 className="text-[35px] text-green-400 font-semibold">
								Oportunidades
							</h2>
						</div>
						<div>
							<div className="my-4">
								<span className="text-[17px] text-green-400">1</span>
								<p className="text-[15px] text-gray-500">
									Gran cantidad de puestos de trabajo en el extranjero de manera
									remota
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-green-400">2</span>
								<p className="text-[15px] text-gray-500">
									Apoyo de mis familiares.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-green-400">3</span>
								<p className="text-[15px] text-gray-500">
									Crear marca personal y un emprendimiento.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-green-400">4</span>
								<p className="text-[15px] text-gray-500">
									Posibilidad de aprender y especializarse mediante internet con
									cursos.
								</p>
							</div>
						</div>
					</div>
					<div className="h-[500px] w-[500px] bg-white rounded-lg flex flex-col p-10">
						<div className="flex flex-row-reverse justify-between ">
							{" "}
							<BsFillHandThumbsUpFill
								size={40}
								style={{ color: "##60a5fa" }}
							/>{" "}
							<h2 className="text-[35px] text-red-400 font-semibold">
								Amenazas
							</h2>
						</div>
						<div>
							<div className="my-4">
								<span className="text-[17px] text-red-400">1</span>
								<p className="text-[15px] text-gray-500">
									Cruzarme con personas irresponsables.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-red-400">2</span>
								<p className="text-[15px] text-gray-500">
									Desestabilidad política en el país que vivo.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-red-400">3</span>
								<p className="text-[15px] text-gray-500">
									Gran cantidad de empresas informales y dificultad para empezar
									mi propia empresa.
								</p>
							</div>

							<div className="my-4">
								<span className="text-[17px] text-red-400">4</span>
								<p className="text-[15px] text-gray-500">
									Crisis económica mundial.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Foda;
