import { useEffect, useState } from "react";

import { Catequizando } from "../types/Catequizando";

import { CatequizandoRepository }
from "../database/catequizandoRepository";



export function useCatequizandos() {

  const [catequizandos, setCatequizandos] =
    useState<Catequizando[]>([]);

useEffect(() => {

  const lista =
    CatequizandoRepository.findAll();

  setCatequizandos(lista);

}, []);

function adicionarCatequizando(
  novoCatequizando: Catequizando
) {
  CatequizandoRepository.create(
  novoCatequizando
);

  setCatequizandos((catequizandosAnteriores) => [
    ...catequizandosAnteriores,
    novoCatequizando,
  ]);

}

function atualizarCatequizando(
  catequizandoAtualizado: Catequizando
) {
CatequizandoRepository.update(
  catequizandoAtualizado
);
  setCatequizandos((catequizandosAnteriores) =>
    catequizandosAnteriores.map((catequizando) =>
      catequizando.id === catequizandoAtualizado.id
        ? catequizandoAtualizado
        : catequizando
    )
  );

}

function removerCatequizando(id: string) {
  CatequizandoRepository.delete(id);
  setCatequizandos((catequizandosAnteriores) =>
    catequizandosAnteriores.filter(
      (catequizando) => catequizando.id !== id
    )
  );
}


  return {

    catequizandos,

    adicionarCatequizando,

    atualizarCatequizando,

    removerCatequizando,    



  };

}