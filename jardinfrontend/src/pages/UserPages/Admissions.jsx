import React from "react";
import inscripcion from "../../assets/Matriculas.jpg";

const Admissions = () => {
  return (
    <>
      <div className="p-10 border-t bg-base-100 shadow-inner">
        <div className="flex justify-center">
          <div className="lg:w-full lg:mx-20 relative">
            <img
              src={inscripcion}
              alt="Matriculas"
              loading="lazy"
              className="border rounded-2xl w-2/3 mx-auto"
            />
          </div>
        </div>
        <div className="grid grid-rows-1 gap-4 p-10 md:grid-rows-2 md:grid-flow-col">
          <div className="row-span-1 border rounded-2xl p-5 border-black justify-center align-middle md:row-span-2 shadow-lg">
            <h3
              className="text-3xl font-semibold leading-relaxed text-gray-900 text-center"
              style={{ color: "green" }}
            >
              Requisitos de Matricula
            </h3>
            <ul
              className="space-y-2 text-gray-500 list-disc list-inside py-4"
              style={{ color: "black" }}
            >
              <li>Registro Civil de Nacimiento</li>
              <li>Certificado Médico Reciente</li>
              <li>Fotocopia del Carné de Vacunación</li>
              <li>Fotocopia del Carné de Atención Médica (Seguro de Salud)</li>
              <li>3 fotografías Recientes Tamaño 3 X 4 a color</li>
              <li>Fotocopia de Cedula de los padres</li>
              <li>Seguro Estudiantil</li>
              <li>Control de crecimiento reciente</li>
              <li>Paz y salvo</li>
              <li>1 carpeta oficio para archivar con gancho</li>
            </ul>
          </div>
          <div className="row-span-1 border rounded-2xl p-5 border-black shadow-lg">
            <h3
              className="text-3xl font-semibold leading-relaxed text-gray-900 text-center"
              style={{ color: "green" }}
            >
              Calendario
            </h3>
            <ul
              className="space-y-2 text-gray-500 list-disc list-inside py-4"
              style={{ color: "black" }}
            >
              <li>PRIMER PERIODO: 1 de Febrero - 31 de Marzo</li>
              <li>SEGUNDO PERIODO: 10 de Abril - 9 de Junio</li>
              <li>TERCER PERIODO: 10 de Julio - 8 de Septiembre</li>
              <li>CUARTO PERIODO: 11 de Septiembre - 17 de Noviembre</li>
            </ul>
          </div>
          <div className="row-span-1 border rounded-2xl p-5 border-black shadow-lg">
            <h3
              className="text-3xl font-semibold leading-relaxed text-gray-900 text-center"
              style={{ color: "green" }}
            >
              Recesos Académicos
            </h3>
            <ul
              className="space-y-2 text-gray-500 list-disc list-inside py-4"
              style={{ color: "black" }}
            >
              <li>SEMANA SANTA: del 3 de Abril al 7 de Abril</li>
              <li>VACACIONES: del 20 de Junio al 7 de Julio</li>
              <li>SEMANA DE OCTUBRE: del 9 al 3 de Octubre</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissions;
