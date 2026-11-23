import AsyncStorage from "@react-native-async-storage/async-storage";

import { Encontro } from "../types/Encontro";

const STORAGE_KEY = "@myeclesia:encontros";

export async function carregarEncontros() {

  const dados = await AsyncStorage.getItem(STORAGE_KEY);

  if (!dados) return [];

  return JSON.parse(dados) as Encontro[];

}

export async function salvarEncontros(
  encontros: Encontro[]
) {

  await AsyncStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(encontros)

  );

}