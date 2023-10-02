import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Bell from "../../assets/bell.png";
import Boat from "../../assets/paper-boat.png";
import Clock from "../../assets/clock.png";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="hero min-h-full bg-base-100 shadow-inner border-t" data-theme="cupcake">
        <div className="hero-content flex-col lg:flex-col">
          <div className="mb-5 sm:mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center col-span-6">
              Contacto
            </h1>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-1 justify-center flex items-center">
              <img src={Boat} alt="icon" />
            </div>
            <div className="col-span-1 p-4">
              <h1 className="text-xl font-bold mb-1">Dirección</h1>
              <span>
                Cra. 10 N° 11 - 16 Barrio Aquimín. <br /> Tunja, Boyacá,
                Colombia.
              </span>
            </div>
            <div className="col-span-1 justify-center flex items-center">
              <img src={Bell} alt="icon" />
            </div>
            <div className="col-span-1 p-4">
              <h1 className="text-xl font-bold mb-1">Contáctanos</h1>
              <span>
                Móvil: +57 314 4404712
                <br /> +57 310 2075955
              </span>
            </div>
            <div className="col-span-1 justify-center flex items-center">
              <img src={Clock} alt="icon" />
            </div>
            <div className="col-span-1 p-4">
              <h1 className="text-xl font-bold mb-1">Horario de Atención</h1>
              <span>
                Lunes a Viernes: <br /> 5:00 PM a 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100" data-theme="cupcake">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body grid grid-cols-4">
              <h1 className="text-2xl lg:text-3xl font-bold col-span-4 text-center p-2">
                Enviar mensaje
              </h1>
              <div className="form-control col-span-4">
                <label className="label">
                  <span className="label-text">Correo electrónico</span>
                </label>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  name="correo"
                  className="input input-bordered"
                  {...register("correo", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
                  })}
                />
                {errors.correo?.type === "required" && (
                  <div className="text-red-600 text-center">
                    <small>Este campo es requerido.</small>
                  </div>
                )}
                {errors.correo?.type === "pattern" && (
                  <div className="text-red-600 text-center">
                    <small>Dirrección de correo no valida.</small>
                  </div>
                )}
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  className="input input-bordered"
                  {...register("age", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.nombre?.type === "required" && (
                  <div className="text-red-600 text-center">
                    <small>Este campo es requerido.</small>
                  </div>
                )}
                {errors.nombre?.type === "pattern" && (
                  <div className="text-red-600 text-center">
                    <small>No se permiten números.</small>
                  </div>
                )}
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Asunto</span>
                </label>
                <input
                  type="text"
                  placeholder="Asunto"
                  name="asunto"
                  className="input input-bordered"
                  {...register("age", {
                    required: true,
                  })}
                />
                {errors.asunto?.type === "required" && (
                  <div className="text-red-600 text-center">
                    <small>Este campo es requerido.</small>
                  </div>
                )}
              </div>
              <div className="form-control col-span-4">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  name="mensaje"
                  className="input input-bordered h-28 p-2"
                  style={{ resize: "none" }}
                  {...register("age", {
                    required: true,
                  })}
                />
                {errors.mensaje?.type === "required" && (
                  <div className="text-red-600 text-center">
                    <small>Este campo es requerido.</small>
                  </div>
                )}
              </div>
              {loading === false ? (
                <div className="form-control mt-6 col-span-4 content-center text-center justify-center">
                  <button className="btn btn-primary justify-center flex">
                    Enviar
                  </button>
                </div>
              ) : (
                <div className="mt-6 col-span-4 content-center text-center justify-center">
                  <span className="loading loading-dots loading-lg"></span>
                </div>
              )}
              {responseError && (
                <div className="text-red-600 col-span-2 text-center">
                  <small>{responseError}</small>
                </div>
              )}
            </form>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2887797978824!2d-73.3644996!3d5.524101099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7dd0d13eefa7%3A0x36810f324ae7d266!2sCra.%2010%20%2311-16%2C%20Tunja%2C%20Boyac%C3%A1!5e0!3m2!1sen!2sco!4v1693341107030!5m2!1sen!2sco"
            width="340px"
            height="250px"
            title="location"
            className=" md:w-[440px] md:h-[350px] lg:w-[540px] lg:h-[450px]"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
