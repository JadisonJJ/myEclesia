export function formatarHorario(texto: string) {
  const numeros = texto.replace(/\D/g, "");

  if (numeros.length <= 2) {
    return numeros;
  }

  return `${numeros.slice(0, 2)}:${numeros.slice(2, 4)}`;
}
