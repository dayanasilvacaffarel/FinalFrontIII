/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    claro: {
      nav: "#ffff",
      home: "#77878b",
      footer: "#ffff",
      font: "#1b2021",
    },
    oscuro: {
      nav: "#000",
      home: "#39353487",
      footer: "#3b2722a5",
      font: "#FFFAF0",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);
