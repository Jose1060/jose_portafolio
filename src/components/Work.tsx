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
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div">
						<div>
							<span></span>
							<div>
								<a href="#">
									<button></button>
								</a>
								<a href="#">
									<button></button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
