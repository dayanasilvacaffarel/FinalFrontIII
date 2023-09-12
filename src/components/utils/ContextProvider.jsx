/* eslint-disable react/prop-types */
import { useState } from "react";
import { ContextGlobal, estadoOriginal } from "./global.context";


export function ContextProvider({ children }) {
  const [tema, setTema] = useState(estadoOriginal.tema.light);

  const cambioTema = () => {
    if (tema === estadoOriginal.tema.light) {
      setTema(estadoOriginal.tema.dark);
    } else {
      setTema(estadoOriginal.tema.light);
    }
  };

  return (
    <ContextGlobal.Provider value={{ tema, cambioTema }}>
      {children}
    </ContextGlobal.Provider>
  );
}
