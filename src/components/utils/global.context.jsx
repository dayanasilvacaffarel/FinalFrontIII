/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoOriginal = {
  tema: {
    light: {
      nav: "#AE8CA3",
      home: "#ffff",
      footer: "#AE8CA3",
      font: "#1b2021",
    },
    dark: {
      nav: "#000",
      home: "#1D1E2C",
      footer: "#000",
      font: "#FFFAF0",
    },
  },
};

export const ContextGlobal = createContext(estadoOriginal);
