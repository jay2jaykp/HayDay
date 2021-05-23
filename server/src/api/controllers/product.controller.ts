import { Request, Response } from "express";
import { knex } from "../../knex/knex";
import { product_table } from "../../utils/constants";
import errorCodes from "pg-error-codes";

// GET /product
export const get_all_products = async (req: Request, res: Response) => {
  await knex(product_table)
    .select(`${product_table}.*`)
    .returning("*")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// GET /product/:id
export const get_product_with_id = async (req: Request, res: Response) => {
  await knex(product_table)
    .select(`${product_table}.*`)
    .where(req.params)
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// POST /product/add
export const add_new_product = async (req: Request, res: Response) => {
  await knex(product_table)
    .insert(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// PUT /product/edit/:id
export const edit_product = async (req: Request, res: Response) => {
  await knex(product_table)
    .where(req.params)
    .update(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      console.error(err);
      res.status(400).send(errorCodes[err.code]);
    });
};

// DELETE /product/delete/:id
export const delete_product = async (req: Request, res: Response) => {
  await knex(product_table)
    .where(req.params)
    .del()
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};
