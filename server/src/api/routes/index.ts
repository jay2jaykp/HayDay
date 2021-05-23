import express from "express";
import {
  add_new_inventory,
  delete_inventory,
  edit_inventory,
  get_all_inventories,
} from "../controllers/inventory.controller";
import {
  add_new_machine,
  delete_machine,
  edit_machine,
  get_all_machines,
  get_machine_with_id,
} from "../controllers/machine.controller";
import {
  add_new_order,
  delete_order,
  edit_order,
  get_all_orders,
  get_order_with_id,
} from "../controllers/order.controller";
import {
  add_new_item_in_orderlist,
  delete_item_in_orderlist,
  edit_item_in_orderlist,
  get_orderlist_with_id,
} from "../controllers/orderlist.controller";
import {
  add_new_product,
  delete_product,
  edit_product,
  get_all_products,
  get_product_with_id,
} from "../controllers/product.controller";
import {
  add_ingredient_in_recipe,
  delete_ingredient_from_recipe,
  edit_ingredient_in_recipe,
  get_all_recipe,
  get_recipe,
} from "../controllers/recipe.controller";

export const hayday = express.Router();

hayday.get("/inventory", get_all_inventories);
hayday.post("/inventory/add", add_new_inventory);
hayday.put("/inventory/edit/:id", edit_inventory);
hayday.delete("/inventory/delete/:id", delete_inventory);

hayday.get("/product", get_all_products);
hayday.get("/product/:id", get_product_with_id);
hayday.post("/product/add", add_new_product);
hayday.put("/product/edit/:id", edit_product);
hayday.delete("/product/delete/:id", delete_product);

hayday.get("/machine", get_all_machines);
hayday.get("/machine/:id", get_machine_with_id);
hayday.post("/machine/add", add_new_machine);
hayday.put("/machine/edit/:id", edit_machine);
hayday.delete("/machine/delete/:id", delete_machine);

hayday.get("/order", get_all_orders);
hayday.get("/order/:id", get_order_with_id);
hayday.post("/order/add", add_new_order);
hayday.put("/order/edit/:id", edit_order);
hayday.delete("/order/delete/:id", delete_order);

hayday.get("/orderlist/:order_id", get_orderlist_with_id);
hayday.post("/orderlist/add", add_new_item_in_orderlist);
hayday.put("/orderlist/edit/:id", edit_item_in_orderlist);
hayday.delete("/orderlist/delete/:id", delete_item_in_orderlist);

hayday.get("/recipe/all", get_all_recipe);
hayday.get("/recipe/:product_id", get_recipe);
hayday.post("/recipe/add", add_ingredient_in_recipe);
hayday.put("/recipe/edit/:id", edit_ingredient_in_recipe);
hayday.delete("/recipe/delete/:id", delete_ingredient_from_recipe);
