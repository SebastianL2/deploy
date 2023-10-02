import Logo from "../assets/logo.png";
import Home from "../assets/kindergarten.png";
import Admissions from "../assets/pencil.png";
import Us from "../assets/mat.png";
import Gallery from "../assets/blackboard.png";
import Contact from "../assets/paper-plane.png";
import KnowUs from "../assets/boy.png";
import Metodology from "../assets/puzzle.png";
import Services from "../assets/bricks.png";
import Spaces from "../assets/seesaw.png";
import Toys from "../assets/toys.png";
import Backpack from "../assets/backpack.png";
import Bricks from '../assets/bricks.png'
import Book from '../assets/book.png'
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { TeacherContext } from "../context/TeacherContext";
import { useContext } from "react";

const Navbar = () => {
  const { session, setSession } = useContext(TeacherContext);
  const { adminSession, setAdminSession } = useContext(AdminContext);
  const navigate = useNavigate();

  function logoutUser() {
    window.localStorage.removeItem("session");
    setSession(false);
    navigate("/");
  }

  function logoutAdmin() {
    window.localStorage.removeItem("adminSession");
    setAdminSession(false);
    navigate("/");
  }

  return (
    <div className="navbar bg-base-300 shadow-inner" data-theme="cupcake">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {session === false && adminSession === false && (
              <>
                <li>
                  <Link to="/">
                    <img src={Home} alt="icon" width={30} />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/admisiones">
                    <img src={Admissions} alt="icon" width={30} />
                    Admisiones
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros">
                    <img src={Us} alt="icon" width={30} />
                    Nosotros
                  </Link>
                </li>
                <li>
                  <ul className="p-2">
                    <li>
                      <Link to="/nosotros">
                        <img src={KnowUs} alt="icon" width={20} />
                        Conocenos
                      </Link>
                    </li>
                    <li>
                      <Link to="/metodologia">
                        <img src={Metodology} alt="icon" width={20} />
                        Metodología
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicios">
                        <img src={Services} alt="icon" width={20} />
                        Servicios
                      </Link>
                    </li>
                    <li>
                      <Link to="/espacios">
                        <img src={Spaces} alt="icon" width={20} />
                        Espacios
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/ver-galerias">
                    <img src={Gallery} alt="icon" width={30} />
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link to="/contactanos">
                    <img src={Contact} alt="icon" width={30} />
                    Contáctanos
                  </Link>
                </li>
              </>
            )}
            {session && (
              <>
                <li>
                  <Link to="/">
                    <img src={Home} alt="icon" width={30} />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/docente/juegos">
                    <img src={Toys} alt="icon" width={30} />
                    Juegos
                  </Link>
                </li>
                <li>
                  <summary>
                    <img src={Us} alt="icon" width={30} />
                    Nosotros
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/nosotros">
                        <img src={KnowUs} alt="icon" width={20} />
                        Conocenos
                      </Link>
                    </li>
                    <li>
                      <Link to="/espacios">
                        <img src={Spaces} alt="icon" width={20} />
                        Espacios
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/ver-galerias">
                    <img src={Gallery} alt="icon" width={30} />
                    Galeria
                  </Link>
                </li>
              </>
            )}
            {adminSession && (
              <>
                <li>
                  <Link to="/">
                    <img src={Home} alt="icon" width={30} />
                    Inicio
                  </Link>
                </li>
                <li>
                  <summary>
                    <img src={Backpack} alt="icon" width={30} />
                    Docentes
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/nosotros">
                        <img src={Us} alt="icon" width={20} />
                        Ver docentes
                      </Link>
                    </li>
                    <li>
                      <Link to="/espacios">
                        <img src={Metodology} alt="icon" width={20} />
                        Registrar docentes
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <summary>
                    <img src={Gallery} alt="icon" width={30} />
                    Galeria
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/ver-galerias">
                        <img src={Book} alt="icon" width={20} />
                        Ver galerias
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/crear-galeria">
                        <img src={Bricks} alt="icon" width={20} />
                        Crear galeria
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl ms-3 h-20 w-24"
        >
          <img src={Logo} alt="logo" width={52} />
        </Link>
      </div>
      <div className="navbar-center hidden z-40 lg:flex">
        <ul className="menu menu-horizontal px-1 font-light">
          {session === false && adminSession === false && (
            <>
              <li>
                <Link to="/">
                  <img src={Home} alt="icon" width={40} />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/admisiones">
                  <img src={Admissions} alt="icon" width={40} />
                  Admisiones
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <img src={Us} alt="icon" width={40} />
                    Nosotros
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/nosotros">
                        <img src={KnowUs} alt="icon" width={20} />
                        Conocenos
                      </Link>
                    </li>
                    <li>
                      <Link to="/metodologia">
                        <img src={Metodology} alt="icon" width={20} />
                        Metodología
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicios">
                        <img src={Services} alt="icon" width={20} />
                        Servicios
                      </Link>
                    </li>
                    <li>
                      <Link to="/espacios">
                        <img src={Spaces} alt="icon" width={20} />
                        Espacios
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/ver-galerias">
                  <img src={Gallery} alt="icon" width={40} />
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/contactanos">
                  <img src={Contact} alt="icon" width={40} />
                  Contáctanos
                </Link>
              </li>
            </>
          )}
          {session && (
            <>
              <li>
                <Link to="/">
                  <img src={Home} alt="icon" width={40} />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/docente/juegos">
                  <img src={Toys} alt="icon" width={40} />
                  Juegos
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <img src={Us} alt="icon" width={40} />
                    Nosotros
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/nosotros">
                        <img src={KnowUs} alt="icon" width={20} />
                        Conocenos
                      </Link>
                    </li>
                    <li>
                      <Link to="/espacios">
                        <img src={Spaces} alt="icon" width={20} />
                        Espacios
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/ver-galerias">
                  <img src={Gallery} alt="icon" width={40} />
                  Galeria
                </Link>
              </li>
            </>
          )}
          {adminSession && (
            <>
              <li>
                <Link to="/">
                  <img src={Home} alt="icon" width={40} />
                  Inicio
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <img src={Backpack} alt="icon" width={40} />
                    Docentes
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/admin/docentes">
                        <img src={Us} alt="icon" width={20} />
                        Ver docentes
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/registrar-docentes">
                        <img src={Metodology} alt="icon" width={20} />
                        Registrar docentes
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <img src={Gallery} alt="icon" width={40} />
                    Galeria
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/ver-galerias">
                        <img src={Book} alt="icon" width={20} />
                        Ver galerias
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/crear-galeria">
                        <img src={Bricks} alt="icon" width={20} />
                        Crear galeria
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {session || adminSession ? (
          <button
            to="/iniciarsesion"
            className="btn btn-primary me-3 text-xs"
            onClick={() => {
              session ? logoutUser() : logoutAdmin();
            }}
          >
            Cerrar sesion
          </button>
        ) : (
          <Link to="/iniciarsesion" className="btn btn-primary me-3 text-xs">
            Iniciar Sesión
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
