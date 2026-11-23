import * as SQLite from "expo-sqlite";

export const database = SQLite.openDatabaseSync(
  "myeclesia.db"
);

database.execSync(`
  CREATE TABLE IF NOT EXISTS turmas (
    id TEXT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    catequista TEXT NOT NULL,
    comunidade TEXT NOT NULL,
    etapa TEXT NOT NULL,
    dia TEXT NOT NULL,
    horario TEXT NOT NULL,
    anoCatequetico TEXT NOT NULL,
    quantidadeCatequizandos INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS catequizandos (
    id TEXT PRIMARY KEY NOT NULL,
    turmaId TEXT NOT NULL,
    nome TEXT NOT NULL,
    dataNascimento TEXT,
    telefone TEXT,
    endereco TEXT,
    responsavel TEXT,
    observacoes TEXT
  );

  CREATE TABLE IF NOT EXISTS encontros (
  id TEXT PRIMARY KEY NOT NULL,
  turmaId TEXT NOT NULL,
  data TEXT NOT NULL,
  tema TEXT NOT NULL,
  leituraBiblica TEXT NOT NULL,
  objetivo TEXT NOT NULL,
  atividades TEXT,
  observacoes TEXT
);
`);