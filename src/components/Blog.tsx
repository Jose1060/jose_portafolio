import React from "react";

type Props = {};

const Blog = (props: Props) => {
	return (
		<div className="bg-[#0a192f] text-gray-300 flex justify-center items-center pb-20">
			<div className="flex flex-col justify-center items-center max-w-[1000px] h-full">
				<div className="pb-24">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-400">
						Blog
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-12">
					<div className="flex-row flex rounded-xl space-x-4">
						<iframe
							width="653"
							height="380"
							src={`https://www.youtube.com/embed/tiiGMyVKjOU`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
							className="rounded-xl"
						/>
						<div className="bg-white w-[500px] rounded-xl px-4 py-10 justify-center flex flex-col">
							<h1 className="text-[30px] text-gray-800 mb-5">
								Entrevista al creador de Vercel
							</h1>
							<p className="text-gray-600">
								En esta entrevista se puede apreciar un entrevista al creador de
								Vercel uno de los servicios que vienen revolucionando el mundo
								del desarrollo en FrontEnd
							</p>
						</div>
					</div>
					<div className="flex-row flex rounded-xl space-x-4">
						<iframe
							width="653"
							height="380"
							src={`https://www.youtube.com/embed/NzQnZqTGtwc`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
							className="rounded-xl"
						/>
						<div className="bg-white w-[500px] rounded-xl px-4 py-10 justify-center flex flex-col">
							<h1 className="text-[30px] text-gray-800 mb-5">Dev as Life</h1>
							<p className="text-gray-600">
								En este video se nos cuenta cómo es la vida de un desarrollador
								con años de experiencia, como lleva su vida, su trabajo y su
								familia, personalmente creo que es lo más cercano a la vida de
								un desarrollador que ama su trabajo y le gusta compartilo con
								los demás
							</p>
						</div>
					</div>
					<div className="flex-row flex rounded-xl space-x-4">
						<iframe
							width="653"
							height="380"
							src={`https://www.youtube.com/embed/e1WZOhM5RF4`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
							className="rounded-xl"
						/>
						<div className="bg-white w-[500px] rounded-xl px-4 py-10 justify-center flex flex-col">
							<h1 className="text-[30px] text-gray-800 mb-5">
								Solution Enginner de DigitalOcean
							</h1>
							<p className="text-gray-600">
								En esta entrevista se puede apreciar un entrevista que realiza
								el Youtuber y Desarrollador Fazt a un Solution Enginner de
								Digital Ocean que es uno de los servicios en la nube mas usados
								y conocidos
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
