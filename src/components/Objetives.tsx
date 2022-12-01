import React from "react";

type Props = {};

const Objectives = (props: Props) => {
	return <div className="h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[1000px] h-full">
            <div>
                <div className="pb-8 pl-4 flex justify-center items-center mb-10"><h1 className="text-4xl font-bold border-b-4 inline border-purple-400">Objectives</h1></div>
           <div className="mb-10 p-8 rounded-xl border-2 border-white hover:scale-105 hover:border-purple-400 duration-300"> <h2 className="text-[30px] font-semibold">¿Qué aspiras o qué te propones profesionalmente?</h2>
            <p>Mi objetivo como profesional es desarrollarme adquiriendo conocimientos y
aplicarlos para desarrollar proyectos cada vez más profesionales y
completos, además busco especializarme como un desarrollador Full Stack.</p></div>
            <div  className="mb-10 p-8 rounded-xl border-2 border-white hover:scale-105 hover:border-purple-400 duration-300"><h2 className="text-[30px] font-semibold">¿Qué buscas conseguir en tus futuros empleos?
            </h2>
            <p>Busco un empleo donde pueda desarrollarme profesionalmente con nuevos
retos, poder contar con compañeros de trabajo amigables y profesionales con
los que pueda confiar y poder llegar a nuestros objetivos.
</p></div>
            <div  className="mb-10 p-8 rounded-xl border-2 border-white hover:scale-105 hover:border-purple-400 duration-300"><h2 className="text-[30px] font-semibold">¿Qué podrías aportar o estás dispuesto a ofrecer en tus futuros empleos o
trabajos?
</h2>
<p>Estoy dispuesto a entregar todos mis conocimientos y ganas de trabajar,
trabajando con responsabilidad y con constantes ganas de aprender, siempre
dispuesto a asumir nuevos retos y cumplir objetivos con un equipo de trabajo.</p></div>


            </div>
        </div>
    </div>;
};

export default Objectives;
