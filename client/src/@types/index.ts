import { Color } from "@material-ui/lab";

export type InventoryType = {
  id?: number;
  name: string;
  capacity: number;
};

export type MachineType = {
  id?: number;
  name: string;
  total_slots: number;
};

export type ProductMachineType = {
  id?: number; // product id
  name: string; // product name
  sales_value: number;
  machine_id: number;
  inventory_id: number;
  time_in_minute: number; // production time
  output_multiplier: number;
};

export type OrderType = {
  id?: number;
  name: string;
  value_amount: number;
  stars: number;
};

export type OrderItemType = {
  id?: number;
  order_id: number;
  product_id: number;
  product_multiplier: number;
};

export type RecipeItemType = {
  id?: number;
  product_id: number;
  ingredient_id: number;
  ingredient_multiplier: number;
};

export type NotificationType = {
  message: string;
  severity: Color;
  open: boolean;
  timeout: number;
};
