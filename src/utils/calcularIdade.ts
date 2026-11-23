export function calcularIdade(
  dataNascimento: string
): number {

  if (!dataNascimento) return 0;

  const partes = dataNascimento.split("/");

  if (partes.length !== 3) return 0;

  const dia = Number(partes[0]);

  const mes = Number(partes[1]) - 1;

  const ano = Number(partes[2]);

  const nascimento = new Date(
    ano,
    mes,
    dia
  );

  const hoje = new Date();

  let idade =
    hoje.getFullYear() -
    nascimento.getFullYear();

  const mesAtual =
    hoje.getMonth();

  const diaAtual =
    hoje.getDate();

  if (

    mesAtual < mes ||

    (mesAtual === mes &&
      diaAtual < dia)

  ) {

    idade--;

  }

  return idade;

}