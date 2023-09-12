import { useContext } from "react";
import { Form } from "../components/Form";
import "../routes/Contact.modules.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Contact() {
  const { tema } = useContext(ContextGlobal);
  return (
    <article
      className="info-form"
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <p className="title-form">Formulario de contacto</p>

      <Form />
    </article>
  );
}
