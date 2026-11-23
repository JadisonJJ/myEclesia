import AsyncStorage from "@react-native-async-storage/async-storage";

import { Turma } from "../types/Turma";

const STORAGE_KEY = "@myEclesia:turmas";

export async function salvarTurmas(
  turmas: Turma[]
) {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(turmas)
  );
}

export async function carregarTurmas() {
  const dados =
    await AsyncStorage.getItem(STORAGE_KEY);

  if (!dados) {
    return [];
  }

  return JSON.parse(dados) as Turma[];
}

export async function limparTurmas() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}