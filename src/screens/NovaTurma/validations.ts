interface ValidarFormularioProps {
  nome: string;
  catequista: string;
  comunidade: string;
  etapa: string;
  dia: string;
  horario: string;
  anoCatequetico: string;
  quantidadeCatequizandos: string;
}

export function validarFormulario({
  nome,
  catequista,
  comunidade,
  etapa,
  dia,
  horario,
  anoCatequetico,
  quantidadeCatequizandos,
}: ValidarFormularioProps): string | null {

  if (!nome.trim()) {
    return "Informe o nome da turma.";
  }

  if (!catequista.trim()) {
    return "Informe o catequista responsável.";
  }

  if (!comunidade.trim()) {
    return "Informe a comunidade.";
  }

  if (!etapa.trim()) {
    return "Informe a etapa da catequese.";
  }

  if (!dia.trim()) {
    return "Informe o dia da semana.";
  }

  if (!horario.trim()) {
    return "Informe o horário.";
  }

  const horarioValido =
    /^([01]\d|2[0-3]):([0-5]\d)$/.test(horario);

  if (!horarioValido) {
    return "Informe um horário válido.";
  }

  const anoAtual = new Date().getFullYear();
  const anoDigitado = Number(anoCatequetico);

  if (
    anoDigitado !== anoAtual &&
    anoDigitado !== anoAtual + 1
  ) {
    return "O ano catequético deve ser o ano atual ou o próximo.";
  }

  const quantidade = Number(quantidadeCatequizandos);

  if (quantidade <= 0) {
    return "A quantidade deve ser maior que zero.";
  }

  if (quantidade > 100) {
    return "A quantidade não pode ser maior que 100.";
  }

  return null;
}