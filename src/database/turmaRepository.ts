import { database } from "./database";
import { Turma } from "../types/Turma";

export const TurmaRepository = {

  create(turma: Turma) {

    database.runSync(

      `INSERT INTO turmas (

        id,
        nome,
        catequista,
        comunidade,
        etapa,
        dia,
        horario,
        anoCatequetico,
        quantidadeCatequizandos

      )

      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,

      [
        turma.id,
        turma.nome,
        turma.catequista,
        turma.comunidade,
        turma.etapa,
        turma.dia,
        turma.horario,
        turma.anoCatequetico,
        turma.quantidadeCatequizandos,
      ]

    );

  },

  findAll(): Turma[] {

    return database.getAllSync<Turma>(

      `SELECT * FROM turmas`

    );

  },

  update(turma: Turma) {

    database.runSync(

      `UPDATE turmas SET

        nome=?,
        catequista=?,
        comunidade=?,
        etapa=?,
        dia=?,
        horario=?,
        anoCatequetico=?,
        quantidadeCatequizandos=?

      WHERE id=?`,

      [

        turma.nome,
        turma.catequista,
        turma.comunidade,
        turma.etapa,
        turma.dia,
        turma.horario,
        turma.anoCatequetico,
        turma.quantidadeCatequizandos,
        turma.id,

      ]

    );

  },

  delete(id: string) {

    database.runSync(

      `DELETE FROM turmas WHERE id=?`,

      [id]

    );

  },

};