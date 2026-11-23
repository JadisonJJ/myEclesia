import React, {
  createContext,
  ReactNode,
  useContext,
} from "react";

import { Turma } from "../types/Turma";
import { useTurmas } from "../hooks/useTurmas";
import { TurmaRepository } from "../database/turmaRepository";

interface TurmasContextData {
  turmas: Turma[];
  adicionarTurma: (novaTurma: Turma) => void;
  atualizarTurma: (turmaAtualizada: Turma) => void;
  removerTurma: (id: string) => void;
}

interface TurmasProviderProps {
  children: ReactNode;
}

const TurmasContext = createContext<TurmasContextData>(
  {} as TurmasContextData
);

export function TurmasProvider({
  children,
}: TurmasProviderProps) {

  const {
    turmas,
    adicionarTurma,
    atualizarTurma,
    removerTurma,
  } = useTurmas();

  return (
    <TurmasContext.Provider
      value={{
        turmas,
        adicionarTurma,
        atualizarTurma,
        removerTurma,
      }}
    >
      {children}
    </TurmasContext.Provider>
  );
}

export function useTurmasContext() {
  const context = useContext(TurmasContext);

  return context;
}