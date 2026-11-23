import { database } from "./database";
import { Encontro } from "../types/Encontro";

export const EncontroRepository = {

  create(encontro: Encontro) {

    database.runSync(

      `INSERT INTO encontros (

        id,
        turmaId,
        data,
        tema,
        leituraBiblica,
        objetivo,
        atividades,
        observacoes

      )

      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,

      [

        encontro.id,
        encontro.turmaId,
        encontro.data,
        encontro.tema,
        encontro.leituraBiblica,
        encontro.objetivo,
        encontro.atividades,
        encontro.observacoes,

      ]

    );

  },

  findAll(): Encontro[] {

    return database.getAllSync<Encontro>(
      `SELECT * FROM encontros`
    );

  },

  update(encontro: Encontro) {

    database.runSync(

      `UPDATE encontros SET

        turmaId=?,
        data=?,
        tema=?,
        leituraBiblica=?,
        objetivo=?,
        atividades=?,
        observacoes=?

      WHERE id=?`,

      [

        encontro.turmaId,
        encontro.data,
        encontro.tema,
        encontro.leituraBiblica,
        encontro.objetivo,
        encontro.atividades,
        encontro.observacoes,
        encontro.id,

      ]

    );

  },

  delete(id: string) {

    database.runSync(

      `DELETE FROM encontros
       WHERE id=?`,

      [id]

    );

  },

};