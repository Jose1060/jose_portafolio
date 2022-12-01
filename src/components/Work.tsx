import React from "react";

type Props = {};

const Work = (props: Props) => {
	return (
		<section className="w-full bg-bg_primary md:h-screen text-gray-300">
			<div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-400">
						Work
					</p>
					<p className="py-6">Algunos de mis ultimos proyectos</p>
				</div>
				<div className="shadow-lg gap-10 rounded-md flex flex-col justify-center">
					<div className="rounded-lg shadow-[#040c16] px-5 py-6 bg-white h-[200px] hover:scale-110 duration-300 flex-col flex">
						<h1 className="text-black font-bold text-[22px]">SUGA</h1>
						<p className="text-black text-[15px]">Poder Jucidial</p>
						<p className=" self-end text-[13px] text-">
							SpringBoot - Java - HTML - CSS - Bootstrap
						</p>
					</div>
					<div className="rounded-lg shadow-[#040c16] px-5 py-6 bg-white h-[200px] hover:scale-110 duration-300">
						<h1 className="text-black font-bold text-[22px]">ComelOso</h1>
						<p className="text-black text-[15px]">Personal</p>
					</div>
					<div className="rounded-lg shadow-[#040c16] px-5 py-6 bg-white h-[200px] hover:scale-110 duration-300">
						<h1 className="text-black font-bold text-[22px]">TechForest</h1>
						<p className="text-black text-[15px]">Personal</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
