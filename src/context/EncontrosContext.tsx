import React, {
  createContext,
  ReactNode,
  useContext,
} from "react";

import { Encontro } from "../types/Encontro";

import { useEncontros } from "../hooks/useEncontros";

interface EncontrosContextData {

  encontros: Encontro[];

  adicionarEncontro: (
    encontro: Encontro
  ) => void;

  atualizarEncontro: (
    encontro: Encontro
  ) => void;

  removerEncontro: (
    id: string
  ) => void;

}

interface ProviderProps {

  children: ReactNode;

}

const EncontrosContext =
  createContext({} as EncontrosContextData);

export function EncontrosProvider({

  children,

}: ProviderProps) {

  const {

    encontros,

    adicionarEncontro,

    atualizarEncontro,

    removerEncontro,

  } = useEncontros();

  return (

    <EncontrosContext.Provider

      value={{

        encontros,

        adicionarEncontro,

        atualizarEncontro,

        removerEncontro,

      }}

    >

      {children}

    </EncontrosContext.Provider>

  );

}

export function useEncontrosContext() {

  return useContext(EncontrosContext);

}