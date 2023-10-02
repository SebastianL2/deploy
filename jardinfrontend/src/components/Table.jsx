import { Link } from "react-router-dom";
import EditTeacher from "../assets/writing.png";
import DeleteTeacher from "../assets/delete.png";
import { useState } from "react";
import ModalConfirm from "./ModalConfirm";
import ModalForm from "./ModalForm";

const Table = ({ data, type }) => {
  const [deleteId, setDeleteId] = useState();
  const [dataModal, setDataModal] = useState();
  const [typeData, setTypeData] = useState("");

  function assignId(id) {
    if (type === "teachers") {
      setDeleteId(id);
      setTypeData("teachers");
      document.getElementById("deleteModal").showModal();
    } 
  }

  function assignData(id) {
    if (type === "teachers") {
      setDataModal(id);
      setTypeData("teachers");
      document.getElementById("editModal").showModal();
    } 
  }

  return (
    <div className="w-full" data-theme="cupcake">
      <div className="overflow-x-auto p-10">
        <table className="table table-zebra">
          <thead>
            {type === "teachers" && (
              <tr className="text-center">
                <th></th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Correo Electronico</th>
                <th>Rol</th>
              </tr>
            )}
          </thead>
          <tbody>
            {type === "teachers" &&
              data.map((teacher, index) => (
                <tr key={teacher._id} className="text-center">
                  <th>{index}</th>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.rol}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-ghost tooltip normal-case"
                      data-tip="Edit"
                      onClick={() => assignData(teacher._id)}
                    >
                      <img src={EditTeacher} alt="icon" width={30} />
                    </Link>
                    <Link
                      className="btn btn-sm btn-ghost tooltip normal-case"
                      data-tip="Delete"
                      onClick={() => assignId(teacher._id)}
                    >
                      <img src={DeleteTeacher} alt="icon" width={30} />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ModalConfirm data={deleteId} type={typeData} />
      <ModalForm data={dataModal} type={typeData} />
    </div>
  );
};

export default Table;
