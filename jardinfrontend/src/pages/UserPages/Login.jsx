import { useForm } from "react-hook-form";
import Garden1 from "../../assets/jardin1.jpg";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { TeacherContext } from "../../context/TeacherContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentialError, setCredentialError] = useState("");
  const { setSession } = useContext(TeacherContext);
  const { setAdminSession } = useContext(AdminContext);
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  async function validateCredentials(dataForm) {
    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();

    if (data.message === "Session") {
      if (data.user[0].rol === "ADMIN") {
        setAdminSession(true);
        window.localStorage.setItem("adminSession", true);
        navigate("/");
      } else {
        setSession(true);
        window.localStorage.setItem("session", true);
        navigate("/");
      }
    }else {
      setCredentialError(data.message)
    }
  }

  return (
    <div className="hero min-h-screen bg-base-100 shadow-inner border-t" data-theme="cupcake">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Garden1}
          alt="login"
          className="rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-72 m-4"
        />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body grid grid-cols-4"
            onSubmit={handleSubmit(validateCredentials)}
          >
            <div className="form-control col-span-4">
              <h1 className="text-2xl lg:text-3xl font-bold p-5 text-center">
                Bienvenidos
              </h1>
              <label className="label">
                <span className="label-text">Correo electrónico</span>
              </label>
              <input
                type="text"
                name="userEmail"
                placeholder="Correo electrónico"
                className="input input-bordered"
                {...register("userEmail", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors.userEmail?.type === "pattern" && (
                <div className="text-red-600">
                  <small>Correo electrónico no valido.</small>
                </div>
              )}
              {errors.userEmail?.type === "required" && (
                <div className="text-red-600">
                  <small>Este campo es requerido.</small>
                </div>
              )}
            </div>
            <div className="form-control col-span-4">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                name="userPassword"
                placeholder="Contraseña"
                className="input input-bordered"
                {...register("userPassword", {
                  required: true,
                })}
              />
              {errors.userPassword?.type === "required" && (
                <div className="text-red-600">
                  <small>Este campo es requerido.</small>
                </div>
              )}
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  ¿Olvidó su contraseña?
                </a>
              </label>
            </div>
            {credentialError !== "" && (
              <div className="text-red-600 text-center col-span-4">
                <small>{credentialError}</small>
              </div>
            )}
            <div className="form-control mt-6 col-span-4">
              <button className="btn btn-primary">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
