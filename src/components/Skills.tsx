import React from "react";
import { skills } from "../const";

type Props = {};

const Skills = (props: Props) => {
	return (
		<div className="bg-[#0a192f] text-gray-300 w-full min-h-screen">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-purple-400">
						Skills
					</p>
					<p className="py-4">Estas son las tecnologias con las que trabajo</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					{skills.map((item) => {
						return (
							<div
								className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
								key={item.title}>
								<img src={item.icon} alt="dartIcon" className="w-20 mx-auto" />
								<p className="my-4">{item.title}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
