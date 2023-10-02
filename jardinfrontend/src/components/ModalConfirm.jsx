import React from "react";

const Modal = ({ data, type }) => {
  async function deleteElement() {
    if (type === "teachers") {
      const response = await fetch(`http://localhost:4000/api/user/${data}`, {
        method: "DELETE",
      });
      const dataResponse = await response.json();
      if (dataResponse.message === "User deleted") {
        window.location.reload(true);
      }
    }
  }

  return (
    <dialog id="deleteModal" className="modal modal-bottom sm:modal-middle" data-theme="cupcake">
      <form method="dialog" className="modal-box">
        {type === "teachers" && (
          <>
            <h3 className="font-bold text-lg">Borrar docente</h3>
            <p className="py-4 text-center">
              ¿Esta seguro que desea eliminar al docente?
            </p>
          </>
        )}
        <div className="modal-action">
          <button className="btn btn-primary" onClick={() => deleteElement()}>
            Confirmar
          </button>
          <button className="btn">Cancelar</button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
