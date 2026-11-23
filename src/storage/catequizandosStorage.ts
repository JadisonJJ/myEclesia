import AsyncStorage from "@react-native-async-storage/async-storage";

import { Catequizando } from "../types/Catequizando";

const STORAGE_KEY = "@myEclesia:catequizandos";

export async function carregarCatequizandos(): Promise<Catequizando[]> {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);

    if (!dados) {
      return [];
    }

    return JSON.parse(dados);
  } catch (error) {
    console.log("Erro ao carregar catequizandos:", error);
    return [];
  }
}

export async function salvarCatequizandos(
  catequizandos: Catequizando[]
) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(catequizandos)
    );
  } catch (error) {
    console.log("Erro ao salvar catequizandos:", error);
  }
}