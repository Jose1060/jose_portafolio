import React from "react";

type Props = {};

const Recomendaciones = (props: Props) => {
	return (
		<div className="bg-[#0a192f] text-gray-300 flex justify-center items-center pb-20">
			<div className="flex flex-col justify-center items-center max-w-[1000px] h-full">
				<div className="pb-24">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-400">
						Networking
					</p>
				</div>
				<div className="grid grid-cols-2 gap-5">
					<a
						href="https://www.linkedin.com/in/jose-antonio-mamani-choquehuanca-155424249/"
						className="bg-white shadow-xl rounded-xl flex flex-row items-center space-x-4 px-4 py-5 hover:scale-105 duration-300">
						<img
							src="https://media-exp1.licdn.com/dms/image/D4E03AQHa2R93n-bOiw/profile-displayphoto-shrink_200_200/0/1665078850680?e=1675900800&v=beta&t=E3LdEbGjnDZX3QXQuP3ijjkKDjd5JUHd8uoWRw40zCA"
							alt=""
							className="rounded-full h-[120px]"
						/>
						<div className="flex flex-col space-y-4">
							<p className="text-gray-700 text-[13px]">
								He sido parte de varios trabajos grupales con Jose, y resalto su
								dinamismo, creatividad y la buena predisposición que tiene para
								trabajar en equipo; sin duda alguna volvería a trabajar con él,
								debido al compromiso y buena energía que otorga al equipo.
							</p>
							<h4 className="text-gray-400 text-[11px] italic">
								Andre Gallegos QuenayaAndre Gallegos Quenaya
							</h4>
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/jose-antonio-mamani-choquehuanca-155424249/"
						className="bg-white shadow-xl rounded-xl flex flex-row items-center space-x-4 px-4 py-5 hover:scale-105 duration-300">
						<img
							src="https://media-exp1.licdn.com/dms/image/C4E03AQH8FH7XwrP5KQ/profile-displayphoto-shrink_800_800/0/1604350359615?e=1675900800&v=beta&t=ZB68RBDVhhQ80zz6u6v7qgyOQbNl48ZLjqcTRuxGSYY"
							alt=""
							className="rounded-full h-[120px]"
						/>
						<div className="flex flex-col space-y-4">
							<p className="text-gray-700 text-[13px]">
								Profesional responsable, dedicado al trabajo y apasionado con
								los retos. Proactivo y presto a realizar las tareas asignadas de
								la mejor manera y siempre a tiempo.
							</p>
							<h4 className="text-gray-400 text-[11px] italic">
								Oswaldo Ñaupa Laura
							</h4>
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/jose-antonio-mamani-choquehuanca-155424249/"
						className="bg-white shadow-xl rounded-xl flex flex-row items-center space-x-4 px-4 py-5 hover:scale-105 duration-300">
						<img
							src="https://media-exp1.licdn.com/dms/image/D4E03AQHa2R93n-bOiw/profile-displayphoto-shrink_200_200/0/1665078850680?e=1675900800&v=beta&t=E3LdEbGjnDZX3QXQuP3ijjkKDjd5JUHd8uoWRw40zCA"
							alt=""
							className="rounded-full h-[120px]"
						/>
						<div className="flex flex-col space-y-4">
							<p className="text-gray-700 text-[13px]">
								He sido parte de varios trabajos grupales con Jose, y resalto su
								dinamismo, creatividad y la buena predisposición que tiene para
								trabajar en equipo; sin duda alguna volvería a trabajar con él,
								debido al compromiso y buena energía que otorga al equipo.
							</p>
							<h4 className="text-gray-400 text-[11px] italic">
								Andre Gallegos QuenayaAndre Gallegos Quenaya
							</h4>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Recomendaciones;
