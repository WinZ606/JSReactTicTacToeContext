import { createContext, useState } from "react";
export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
  const [lepes, setLepes] = useState(0);
  const [lista, setLista] = useState(Array(9).fill(" "));
  const [nyertes, setNyertes] = useState(null); 

  const nyerovonalak = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function ellenorizGyozelmet(sl) {
    for (let v of nyerovonalak) {
      const [a, b, c] = v;
      if (sl[a] !== " " && sl[a] === sl[b] && sl[b] === sl[c]) {
        return sl[a];
      }
    }
    return null;
  }

  function kattintas(adat) {
    if (nyertes) return;
    if (lista[adat] && lista[adat] !== " ") return;

    const sl = [...lista];
    const jelenlegi = lepes % 2 === 0 ? "X" : "O";
    sl[adat] = jelenlegi;
    setLista(sl);

    const talalat = ellenorizGyozelmet(sl);
    if (talalat) {
      setNyertes(talalat);
    }

    setLepes(lepes + 1);
  }

  function ujrakezdes() {
    setLista(Array(9).fill(" "));
    setLepes(0);
    setNyertes(null);
  }

  return (
    <KattContext.Provider value={{ lista, lepes, nyertes, kattintas, ujrakezdes }}>
      {children}
    </KattContext.Provider>
  );
};
