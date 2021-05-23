import { Request, Response } from "express";
import { knex } from "../../knex/knex";
import { machine_table } from "../../utils/constants";
import errorCodes from "pg-error-codes";

// GET /machine
export const get_all_machines = async (req: Request, res: Response) => {
  await knex(machine_table)
    .select("*")
    .returning("*")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// GET /machine/:id
export const get_machine_with_id = async (req: Request, res: Response) => {
  await knex(machine_table)
    .select("*")
    .where(req.params)
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// POST /machine/add
export const add_new_machine = async (req: Request, res: Response) => {
  await knex(machine_table)
    .insert(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      console.error(err);
      // res.status(400).send(errorCodes[err.code]);
      res.status(400).send(err.detail);
    });
};

// PUT /machine/edit/:id
export const edit_machine = async (req: Request, res: Response) => {
  //   console.log(req.params);
  //   console.log(req.body);
  await knex(machine_table)
    .where(req.params)
    .update(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// DELETE /machine/delete/:id
export const delete_machine = async (req: Request, res: Response) => {
  await knex(machine_table)
    .where(req.params)
    .del()
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};
