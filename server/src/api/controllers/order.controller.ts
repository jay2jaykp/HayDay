import { Request, Response } from "express";
import { knex } from "../../knex/knex";
import { order_table } from "../../utils/constants";
import errorCodes from "pg-error-codes";

// GET /order
export const get_all_orders = async (req: Request, res: Response) => {
  await knex(order_table)
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

// GET /order/:id
export const get_order_with_id = async (req: Request, res: Response) => {
  await knex(order_table)
    .select("*")
    .where(req.params)
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// POST /order/add
export const add_new_order = async (req: Request, res: Response) => {
  await knex(order_table)
    .insert(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// PUT /order/edit/:id
export const edit_order = async (req: Request, res: Response) => {
  //   console.log(req.params);
  //   console.log(req.body);
  await knex(order_table)
    .where(req.params)
    .update(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// DELETE /order/delete/:id
export const delete_order = async (req: Request, res: Response) => {
  await knex(order_table)
    .where(req.params)
    .del()
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};
