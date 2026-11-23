import React, {
  createContext,
  ReactNode,
  useContext,
} from "react";

import {
  Catequizando,
} from "../types/Catequizando";

import {
  useCatequizandos,
} from "../hooks/useCatequizandos";

interface CatequizandosContextData {

  catequizandos: Catequizando[];

adicionarCatequizando: (
    novoCatequizando: Catequizando
  ) => void;

atualizarCatequizando: (
    catequizandoAtualizado: Catequizando
  ) => void;

removerCatequizando: (
    id: string
  ) => void;


}

interface CatequizandosProviderProps {

  children: ReactNode;

}

const CatequizandosContext =
  createContext<CatequizandosContextData>(
    {} as CatequizandosContextData
  );

export function CatequizandosProvider({

  children,

}: CatequizandosProviderProps) {

  const {

    catequizandos,

    adicionarCatequizando,

    atualizarCatequizando,

    removerCatequizando,

  } = useCatequizandos();

  return (

    <CatequizandosContext.Provider

      value={{

        catequizandos,

        adicionarCatequizando,

        atualizarCatequizando,

        removerCatequizando,
       
      }}

    >

      {children}

    </CatequizandosContext.Provider>

  );

}

export function useCatequizandosContext() {

  const context = useContext(
    CatequizandosContext
  );

  return context;

}