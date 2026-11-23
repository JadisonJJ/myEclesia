import { database } from "./database";
import { Catequizando } from "../types/Catequizando";

export const CatequizandoRepository = {

  create(catequizando: Catequizando) {

    database.runSync(

      `INSERT INTO catequizandos (

        id,
        turmaId,
        nome,
        dataNascimento,
        telefone,
        endereco,
        responsavel,
        observacoes

      )

      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,

      [

        catequizando.id,
        catequizando.turmaId,
        catequizando.nome,
        catequizando.dataNascimento,
        catequizando.telefone,
        catequizando.endereco,
        catequizando.responsavel,
        catequizando.observacoes,

      ]

    );

  },

  findAll(): Catequizando[] {

    return database.getAllSync<Catequizando>(
      `SELECT * FROM catequizandos`
    );

  },

  update(catequizando: Catequizando) {

    database.runSync(

      `UPDATE catequizandos SET

        turmaId=?,
        nome=?,
        dataNascimento=?,
        telefone=?,
        endereco=?,
        responsavel=?,
        observacoes=?

      WHERE id=?`,

      [

        catequizando.turmaId,
        catequizando.nome,
        catequizando.dataNascimento,
        catequizando.telefone,
        catequizando.endereco,
        catequizando.responsavel,
        catequizando.observacoes,
        catequizando.id,

      ]

    );

  },

  delete(id: string) {

    database.runSync(

      `DELETE FROM catequizandos
       WHERE id=?`,

      [id]

    );

  },

};