import { Request, Response } from "express";
import { knex } from "../../knex/knex";
import { order_list_table, order_table } from "../../utils/constants";
import errorCodes from "pg-error-codes";

// GET /orderlist/:order_id
export const get_orderlist_with_id = async (req: Request, res: Response) => {
  //   console.log(req.params); // {order_id: 1}
  await knex(order_list_table)
    .select("*")
    .where(req.params)
    .returning("*")
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// POST /orderlist/add
export const add_new_item_in_orderlist = async (
  req: Request,
  res: Response
) => {
  await knex(order_list_table)
    .insert(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// PUT /order/edit/:id
export const edit_item_in_orderlist = async (req: Request, res: Response) => {
  //   console.log(req.params);
  //   console.log(req.body);
  await knex(order_list_table)
    .where(req.params)
    .update(req.body)
    .returning("*")
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error(errorCodes[err.code]);
      res.status(400).send(errorCodes[err.code]);
    });
};

// DELETE /orderlist/delete/:id
export const delete_item_in_orderlist = async (req: Request, res: Response) => {
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
