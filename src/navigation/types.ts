import { Turma } from "../types/Turma";
import { Catequizando } from "../types/Catequizando";
import { Encontro } from "../types/Encontro";

export type RootStackParamList = {
  Login: undefined;

  Home: undefined;

  Turmas: undefined;

  Catequizandos: undefined;

NovoCatequizando:
  | {
      catequizando?: Catequizando;
    }
  | undefined;

DetalhesCatequizando: {
  catequizando: Catequizando;
};

  NovaTurma: {
    turma?: Turma,
  };

  DetalhesTurma: {
    turma: {
      id: string;
      nome: string;
      catequista: string;
      comunidade: string;
      etapa: string;
      dia: string;
      horario: string;
      anoCatequetico: string;
      quantidadeCatequizandos: number;
    };
  };

  EncontrosTurma: {
  turma: Turma;
};
NovoEncontro: {
  turmaId: string;
} | undefined;

DetalhesEncontro: {
  encontro: Encontro;
};

PresencaEncontro: {
  encontroId: string;
};

HistoricoPresenca: {
  catequizandoId: string;
};

};