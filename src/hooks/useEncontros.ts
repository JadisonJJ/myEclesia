import { useEffect, useState } from "react";

import { Encontro } from "../types/Encontro";

import { EncontroRepository } from "../database/encontroRepository";

export function useEncontros() {

  const [encontros, setEncontros] =
    useState<Encontro[]>([]);

  useEffect(() => {

    const encontrosSalvos =
      EncontroRepository.findAll();

    setEncontros(encontrosSalvos);

  }, []);

  function adicionarEncontro(
    novoEncontro: Encontro
  ) {

    EncontroRepository.create(
      novoEncontro
    );

    setEncontros((listaAnterior) => [
      ...listaAnterior,
      novoEncontro,
    ]);

  }

  function atualizarEncontro(
    encontroAtualizado: Encontro
  ) {

    EncontroRepository.update(
      encontroAtualizado
    );

    setEncontros((listaAnterior) =>
      listaAnterior.map((encontro) =>
        encontro.id === encontroAtualizado.id
          ? encontroAtualizado
          : encontro
      )
    );

  }

  function removerEncontro(
    id: string
  ) {

    EncontroRepository.delete(id);

    setEncontros((listaAnterior) =>
      listaAnterior.filter(
        (encontro) =>
          encontro.id !== id
      )
    );

  }

  return {

    encontros,

    adicionarEncontro,

    atualizarEncontro,

    removerEncontro,

  };

}