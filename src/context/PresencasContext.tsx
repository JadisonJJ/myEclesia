import React, {
  createContext,
  useContext,
  useState,
} from "react";

import { Presenca } from "../types/Presenca";

interface PresencasContextData {
  presencas: Presenca[];

  adicionarPresenca: (
    presenca: Presenca
  ) => void;

  atualizarPresenca: (
    presenca: Presenca
  ) => void;

  removerPresenca: (
    id: string
  ) => void;
}

const PresencasContext =
  createContext<PresencasContextData>(
    {} as PresencasContextData
  );

export function PresencasProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [presencas, setPresencas] =
    useState<Presenca[]>([]);

  function adicionarPresenca(
    presenca: Presenca
  ) {

    setPresencas((old) => [
      ...old,
      presenca,
    ]);

  }

  function atualizarPresenca(
    presencaAtualizada: Presenca
  ) {

    setPresencas((old) =>
      old.map((item) =>
        item.id === presencaAtualizada.id
          ? presencaAtualizada
          : item
      )
    );

  }

  function removerPresenca(
    id: string
  ) {

    setPresencas((old) =>
      old.filter(
        item => item.id !== id
      )
    );

  }

  return (

    <PresencasContext.Provider
      value={{
        presencas,
        adicionarPresenca,
        atualizarPresenca,
        removerPresenca,
      }}
    >

      {children}

    </PresencasContext.Provider>

  );

}

export function usePresencasContext() {

  return useContext(PresencasContext);

}