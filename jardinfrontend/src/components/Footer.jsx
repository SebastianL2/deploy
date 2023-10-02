import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-8 bg-base-300 text-base-content border-t shadow-2xl" data-theme="cupcake">
      <div className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to={"/nosotros"}>Nosotros</Link>
        <Link className="link link-hover" to={"/contactanos"}>Contactanos</Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.facebook.com/profile.php?id=100057130703348&mibextid=2JQ9oc"} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - Generaciones de Paz</p>
      </div>
    </footer>
  );
};

export default Footer;
