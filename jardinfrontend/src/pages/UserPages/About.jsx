import React from "react";
import jardin from "../../assets/jardin.webp";
import maestra from "../../assets/maestra.png";
import pedagogico from "../../assets/pedagogico.jpeg";
import Mision from "../../assets/Mision.png";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-12 md:grid-cols-2">
      <div className="col-span-1 grid grid-flow-col border rounded-2xl p-5 justify-center align-middle border-black shadow-lg">
        <div className="h-64 w-48">
          <img
            src={Mision}
            alt="mision"
            loading="lazy"
            className=" w-full h-full"
          />
        </div>
        <div className="flex flex-col p-5">
          <h2
            className="text-3xl font-semibold leading-relaxed text-gray-900"
            style={{ color: "green" }}
          >
            MISIÓN
          </h2>
          <p
            className="space-y-2 text-gray-500 list-disc list-inside py-4 text-justify"
            style={{ color: "black" }}
          >
            Ofrecer atención integral a la primera infancia con calidad, dentro
            de la normatividad vigente y el servicio de educación preescolar,
            desarrollando competencias generales para potenciar a los niños en
            forma integral.
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-flow-col border rounded-2xl p-5 justify-center align-middle border-black shadow-lg">
        <div className="h-64 w-48">
          <img
            src={jardin}
            alt="vision"
            loading="lazy"
            className=" w-full h-full"
          />
        </div>
        <div className="flex flex-col p-5">
          <h2
            className="text-3xl font-semibold leading-relaxed text-gray-900"
            style={{ color: "green" }}
          >
            VISIÓN
          </h2>
          <p
            className="space-y-2 text-gray-500 list-disc list-inside py-4 text-justify"
            style={{ color: "black" }}
          >
            Posicionar a esta institución educativa privada como una de las que
            ofrece mejor calidad en la ciudad y proyectarla a nivel nacional con
            proyectos que favorezcan la atención de niños y niñas.
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-flow-col border rounded-2xl p-5 justify-center align-middle border-black shadow-lg">
        <div className="h-64 w-48">
          <img
            src={maestra}
            alt="administrativo"
            loading="lazy"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col p-5">
          <h2
            className="text-3xl font-semibold leading-relaxed text-gray-900"
            style={{ color: "green" }}
          >
            COMPONENTE ADMINISTRATIVO
          </h2>
          <p
            className="space-y-2 text-gray-500 list-disc list-inside py-4 text-justify"
            style={{ color: "black" }}
          >
            <p>Formado por:</p>
            <ul className="list-disc list-inside ms-5">
              <li>Representante legal - directora</li>
              <li>Coordinadora</li>
              <li>Profesoras</li>
              <li>Estudiantes</li>
              <li>Padres de familia</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-flow-col border rounded-2xl p-5 justify-center align-middle border-black shadow-lg">
        <div className="h-64 w-48">
          <img
            src={pedagogico}
            alt="pedagogico"
            loading="lazy"
            className=" w-full h-full"
          />
        </div>
        <div className="flex flex-col p-5">
          <h2
            className="text-3xl font-semibold leading-relaxed text-gray-900"
            style={{ color: "green" }}
          >
            COMPONENTE PEDAGÓGICO
          </h2>
          <p
            className="space-y-2 text-gray-500 list-disc list-inside py-4 text-justify"
            style={{ color: "black" }}
          >

            <ul className="list-disc list-inside ms-5">
              <li>Socio - afectivo</li>
              <li>Cognitiva</li>
              <li>Comunicativa</li>
              <li>Corporal (Fina, Gruesa)</li>
              <li>Espiritual, ética y valores</li>
              <li>Estética</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
