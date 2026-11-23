export function mascaraTelefone(valor: string) {

  const numeros = valor.replace(/\D/g, "");

  if (numeros.length <= 2) {

    return numeros;

  }

  if (numeros.length <= 7) {

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;

  }

  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;

}