import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Computer from '../../assets/computer.png'

const Regist = () => {
  const [responseError, setResponseError] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  async function registTeacher(dataForm) {
    setLoading(true);
    setResponseError("");
    console.log("here");
    const response = await fetch("http://localhost:4000/api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();

    if (data.message === "User created") {
      navigate("/admin/docentes");
    } else {
      setLoading(false);
      setResponseError(data.message);
    }
  }

  return (
    <div className="hero min-h-screen min-w-fit bg-base-100 shadow-inner border-t p-20" data-theme="cupcake">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-200">
          <form
            className="card-body grid grid-cols-2"
            onSubmit={handleSubmit(registTeacher)}
          >
            <h1 className="text-3xl lg:text-4xl font-bold col-span-2 text-center">
              Registrar docente
            </h1>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Nombres</span>
              </label>
              <input
                type="text"
                placeholder="nombres"
                name="firstName"
                className="input input-bordered"
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z ]+$/,
                })}
              />
              {errors.firstName?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
              {errors.firstName?.type === "pattern" && (
                <div className="text-red-600 text-center">
                  <small>No se aceptan caracteres especiales ni números.</small>
                </div>
              )}
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Apellidos</span>
              </label>
              <input
                type="text"
                placeholder="apellidos"
                name="lastName"
                className="input input-bordered"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z ]+$/,
                })}
              />
              {errors.lastName?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
              {errors.lastName?.type === "pattern" && (
                <div className="text-red-600 text-center">
                  <small>No se aceptan caracteres especiales ni numeros.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="contraseña"
                name="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Repetir contraseña</span>
              </label>
              <input
                type="password"
                placeholder="repetir contraseña"
                name="rePassword"
                className="input input-bordered"
                {...register("rePassword", {
                  required: true,
                  validate: (value) => value === watch("password"),
                })}
              />
              {errors.rePassword?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
              {errors.rePassword?.type === "validate" && (
                <div className="text-red-600 text-center">
                  <small>Las contraseñas no coinciden.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rol</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="rol"
                {...register("rol", {
                  required: true,
                })}
              >
                <option value="">Seleccione el rol</option>
                <option value="ADMIN">Administrador</option>
                <option value="TEACH">Docente</option>
              </select>

              {errors.rol?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo electrónico</span>
              </label>
              <input
                type="text"
                placeholder="correo electrónico"
                name="email"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors.email?.type === "pattern" && (
                <div className="text-red-600 text-center">
                  <small>Correo electrónico no valido.</small>
                </div>
              )}
            </div>
            {loading === false ? (
              <div className="form-control mt-6 col-span-2">
                <button className="btn btn-primary">Registrar</button>
              </div>
            ) : (
              <div className="mt-6 col-span-2 content-center text-center justify-center">
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
        <img
          src={Computer}
          className="max-w-sm md:max-w-sm rounded-lg shadow-2xl w-full bg-transparent"
          alt="docente"
        />
      </div>
    </div>
  );
};

export default Regist;
