import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({ data, type }) => {
  const [responseError, setResponseError] = useState();
  const [dataModal, setDataModal] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: dataModal });

  useEffect(() => {
    async function fetchData() {
      if (type === "teachers") {
        const response = await fetch(`http://localhost:4000/api/user/${data}`);
        const dataResponse = await response.json();
        setDataModal(dataResponse);
      }
    }
    fetchData();
  }, [data]);

  useEffect(() => {
    reset(dataModal);
  }, [dataModal]);

  async function edit(dataForm) {
    if (type === "teachers") {
      const response = await fetch(
        `http://localhost:4000/api/user/${dataModal._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(dataForm),
        }
      );
      const dataResponse = await response.json();
      if (dataResponse.message === "User updated") {
        document.getElementById("editModal").close();
        window.location.reload(true);
      } else {
        setResponseError(dataResponse.message);
      }
    }
  }

  return (
    <dialog id="editModal" className="modal modal-bottom sm:modal-middle">
      {Object.keys(dataModal).length > 0 ? (
        <form className="modal-box" onSubmit={handleSubmit(edit)}>
          {type === "teachers" && (
            <>
              <h3 className="text-2xl font-bold">Editar docente</h3>
              <div className="card-body grid grid-cols-2 gap-2">
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
                      value: dataModal.firstName,
                      pattern: /^[A-Za-z ]+$/,
                    })}
                  />
                  {errors.firstName?.type === "pattern" && (
                    <div className="text-red-600 text-center">
                      <small>
                        No se aceptan caracteres especiales ni numeros.
                      </small>
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
                      value: dataModal.lastName,
                      pattern: /^[A-Za-z ]+$/,
                    })}
                  />
                  {errors.lastName?.type === "pattern" && (
                    <div className="text-red-600 text-center">
                      <small>
                        No se aceptan caracteres especiales ni numeros.
                      </small>
                    </div>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rol</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    name="hour"
                    {...register("hour", {
                      value: dataModal.rol,
                    })}
                  >
                    <option value="">Seleccione el rol</option>
                    <option value="ADMIN">Administrador</option>
                    <option value="TEACH">Docente</option>
                  </select>
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
                      value: dataModal.email,
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                  {errors.email?.type === "pattern" && (
                    <div className="text-red-600 text-center">
                      <small>
                        Correo electrónico no valido.
                      </small>
                    </div>
                  )}
                </div>
                {responseError && (
                  <div className="text-red-600 col-span-2 text-center">
                    <small>{responseError}</small>
                  </div>
                )}
              </div>
            </>
          )}
          <div className="modal-action">
            <button className="btn form-control btn-success">Confirmar</button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                document.getElementById("editModal").close();
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </dialog>
  );
};

export default ModalForm;
