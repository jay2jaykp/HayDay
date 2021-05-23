import { Request, Response } from "express";
import { knex } from "../../knex/knex";
import {
  order_list_table,
  order_table,
  recipe_table,
} from "../../utils/constants";
import errorCodes from "pg-error-codes";

// GET /recipe/all
export const get_all_recipe = async (req: Request, res: Response) => {
  await knex(recipe_table)
    .select("*")
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// GET /recipe/:product_id
export const get_recipe = async (req: Request, res: Response) => {
  console.log(req.params); // {product_id: 1}
  await knex(recipe_table)
    .select("*")
    .where(req.params)
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// POST /recipe/add
export const add_ingredient_in_recipe = async (req: Request, res: Response) => {
  await knex(recipe_table)
    .insert(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// PUT /recipe/edit/:id
export const edit_ingredient_in_recipe = async (
  req: Request,
  res: Response
) => {
  //   console.log(req.params);
  //   console.log(req.body);
  await knex(recipe_table)
    .where(req.params)
    .update(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// DELETE /recipe/delete/:id
export const delete_ingredient_from_recipe = async (
  req: Request,
  res: Response
) => {
  await knex(order_list_table)
    .where(req.params)
    .del()
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};
