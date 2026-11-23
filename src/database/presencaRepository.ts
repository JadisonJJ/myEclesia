import { database } from "./database";
import { Presenca } from "../types/Presenca";

export const PresencaRepository = {

  create(presenca: Presenca) {

    database.runSync(

      `INSERT INTO presencas (

        id,
        encontroId,
        catequizandoId,
        presente,
        justificativa

      )

      VALUES (?, ?, ?, ?, ?)`,

      [

        presenca.id,
        presenca.encontroId,
        presenca.catequizandoId,
        presenca.presente ? 1 : 0,
        presenca.justificativa ?? null,

      ]

    );

  },

  findAll(): Presenca[] {

    const dados = database.getAllSync<any>(
      `SELECT * FROM presencas`
    );

    return dados.map(item => ({
      ...item,
      presente: item.presente === 1,
    }));

  },

  update(presenca: Presenca) {

    database.runSync(

      `UPDATE presencas SET

        encontroId=?,
        catequizandoId=?,
        presente=?,
        justificativa=?

      WHERE id=?`,

      [

        presenca.encontroId,
        presenca.catequizandoId,
        presenca.presente ? 1 : 0,
        presenca.justificativa ?? null,
        presenca.id,

      ]

    );

  },

  delete(id: string) {

    database.runSync(

      `DELETE FROM presencas
       WHERE id=?`,

      [id]

    );

  },

};