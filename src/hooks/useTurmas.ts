import { useEffect, useState } from "react";
import { TurmaRepository } from "../database/turmaRepository";

import { Turma } from "../types/Turma";

export interface useTurma {
  id: string;

  nome: string;

  catequista: string;

  comunidade: string;

  etapa: string;

  dia: string;

  horario: string;

  anoCatequetico: string;

  quantidadeCatequizandos: number;
}

export function useTurmas() {

  const [turmas, setTurmas] = useState<Turma[]>([]);

useEffect(() => {

  const turmasSalvas =
    TurmaRepository.findAll();

  setTurmas(turmasSalvas);

}, []);

function adicionarTurma(novaTurma: Turma) {
    TurmaRepository.create(novaTurma);
        setTurmas((old => [
          ...old,
          novaTurma,
   ]));

}

function atualizarTurma(turmaAtualizada: Turma) {
  TurmaRepository.update(turmaAtualizada);
  setTurmas((turmasAnteriores) =>
    turmasAnteriores.map((turma) =>
      turma.id === turmaAtualizada.id
        ? turmaAtualizada
        : turma
    )
  );
}
function removerTurma(id: string) {
  TurmaRepository.delete(id);
  setTurmas((turmasAnteriores) =>
    turmasAnteriores.filter(
      (turma) => turma.id !== id
    )
  );
}

return {

  turmas,
  adicionarTurma,

  atualizarTurma,
  
  removerTurma,

  };

}