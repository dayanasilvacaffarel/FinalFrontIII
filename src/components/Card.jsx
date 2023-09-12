/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import "./Card.modules.css";
import { useState } from "react";

export function Card({ id, name, username }) {
  const odontologo = {
    id,
    name,
    username,
  };
  const [mensaje, setMensaje] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  function agregarFavorito() {
    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const odontologoAdd = odontologos.find((e) => e.id === odontologo.id);

    if (!odontologoAdd) {
      odontologos.push(odontologo);
      localStorage.setItem("odontologos", JSON.stringify(odontologos));
      setIsAdded(true);
      setMensaje(true);
    } else {
      setIsAdded(false);
      setMensaje(true);
    }
    setTimeout(() => {
      setMensaje(false);
    }, 1000);

  }

  function eliminarFavorito() {
    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const updatedOdontologos = odontologos.filter(
      (e) => e.id !== odontologo.id
    );
    localStorage.setItem("odontologos", JSON.stringify(updatedOdontologos));
    setIsAdded(false);
    setMensaje(true);
    setTimeout(() => {
      setMensaje(false);
    }, 1000);

  }

  const esFavorito = JSON.parse(
    localStorage.getItem("odontologos") || "[]"
  ).some((e) => e.id === odontologo.id);

  return (
    <article className={`card ${esFavorito ? "favorite" : ""}`}>
      <Link to={`/details/${id}`} className="card-link">
        <img className="imagen" src={img} alt="doctor" />
        <p className="name">{name}</p>
      </Link>
      {!esFavorito && (
        <button className="boton-card" onClick={agregarFavorito}>
          Agregar a favoritos
        </button>
      )}
      {esFavorito && (
        <button className="boton-card-delete" onClick={eliminarFavorito}>
          Quitar de favoritos
        </button>
      )}
      {mensaje && (
        <p className={`mensaje-card ${isAdded ? "added" : ""}`}>
          {isAdded
            ? "Añadido a favoritos"
            : "Se elimino de favoritos"}
        </p>
      )}
    </article>
  );
}
