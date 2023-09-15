import { Link } from "react-router-dom";
import "../components/Navbar.modules.css";
import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

export function Navbar() {
  const { cambioTema } = useContext(ContextGlobal);
  const { tema } = useContext(ContextGlobal);
  const [colorBoton, setColorBoton] = useState("#5e3153");

  function cambiarColorBoton() {
    if (colorBoton === "#5e3153") {
      setColorBoton("#dcbcd4");
    } else {
      setColorBoton("#5e3153");
    }
  }
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: tema.nav, color: tema.font }}
    >
      <img src="src\images\DH.ico" alt="Logo DH" />
      <div>
        <Link className="nav-title" to={"/"}>
          Inicio
        </Link>
        <Link className="nav-title" to={"/contact"}>
          Contacto
        </Link>
        <Link className="nav-title" to={"/favs"}>
          Favoritos
        </Link>
      </div>
      <button
        className="boton"
        onClick={() => {
          cambioTema();
          cambiarColorBoton();
        }}
        style={{ backgroundColor: colorBoton }}
      >
        Tema
      </button>
    </nav>
  );
}
