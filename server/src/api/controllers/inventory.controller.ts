import { Request, Response } from "express";
import { knex } from "../../knex/knex";
import { inventory_table, machine_table } from "../../utils/constants";
import errorCodes from "pg-error-codes";

// GET /inventory
export const get_all_inventories = async (req: Request, res: Response) => {
  await knex(inventory_table)
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

// POST /inventory/add
export const add_new_inventory = async (req: Request, res: Response) => {
  await knex(inventory_table)
    .insert(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// PUT /inventory/edit/:id
export const edit_inventory = async (req: Request, res: Response) => {
  //   console.log(req.params);
  //   console.log(req.body);
  await knex(inventory_table)
    .where(req.params)
    .update(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// DELETE /inventory/delete/:id
export const delete_inventory = async (req: Request, res: Response) => {
  await knex(inventory_table)
    .where(req.params)
    .del()
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};
