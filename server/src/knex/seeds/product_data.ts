import { Knex } from "knex";
import { product_table } from "../../utils/constants";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(product_table).del();

  // Inserts seed entries
  await knex(product_table).insert([
    {
      name: "Pumpkin",
      sales_value: 32,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 180,
      output_multiplier: 2,
    },
    {
      name: "Wheat",
      sales_value: 3,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 2,
      output_multiplier: 2,
    },
    {
      name: "Carrot",
      sales_value: 7,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 10,
      output_multiplier: 2,
    },
    {
      name: "Potato",
      sales_value: 36,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 220,
      output_multiplier: 2,
    },
    {
      name: "Chili Pepper",
      sales_value: 36,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 240,
      output_multiplier: 2,
    },
    {
      name: "Corn",
      sales_value: 7,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 5,
      output_multiplier: 2,
    },
    {
      name: "Indigo",
      sales_value: 25,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 120,
      output_multiplier: 2,
    },
    {
      name: "Cotton",
      sales_value: 28,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 150,
      output_multiplier: 2,
    },
    {
      name: "Sugarcane",
      sales_value: 14,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 30,
      output_multiplier: 2,
    },
    {
      name: "Soybean",
      sales_value: 10,
      machine_id: 16,
      inventory_id: 1,
      time_in_minute: 20,
      output_multiplier: 2,
    },
    {
      name: "Cow Feed",
      sales_value: 14,
      machine_id: 1,
      inventory_id: 2,
      time_in_minute: 9,
      output_multiplier: 3,
    },
    {
      name: "Chicken Feed",
      sales_value: 7,
      machine_id: 1,
      inventory_id: 2,
      time_in_minute: 4,
      output_multiplier: 3,
    },
    {
      name: "Pig Feed",
      sales_value: 14,
      machine_id: 1,
      inventory_id: 2,
      time_in_minute: 19,
      output_multiplier: 3,
    },
    {
      name: "Sheep Feed",
      sales_value: 14,
      machine_id: 1,
      inventory_id: 2,
      time_in_minute: 28,
      output_multiplier: 3,
    },
    {
      name: "Goat Feed",
      sales_value: 14,
      machine_id: 1,
      inventory_id: 2,
      time_in_minute: 38,
      output_multiplier: 3,
    },
    {
      name: "Bread",
      sales_value: 21,
      machine_id: 3,
      inventory_id: 2,
      time_in_minute: 5,
      output_multiplier: 1,
    },
    {
      name: "Corn Bread",
      sales_value: 1,
      machine_id: 3,
      inventory_id: 2,
      time_in_minute: 30,
      output_multiplier: 1,
    },
    {
      name: "Eggs",
      sales_value: 18,
      machine_id: 18,
      inventory_id: 2,
      time_in_minute: 20,
      output_multiplier: 1,
    },
    {
      name: "Milk",
      sales_value: 32,
      machine_id: 17,
      inventory_id: 2,
      time_in_minute: 60,
      output_multiplier: 1,
    },
    {
      name: "Goat Milk",
      sales_value: 64,
      machine_id: 21,
      inventory_id: 2,
      time_in_minute: 480,
      output_multiplier: 1,
    },
    {
      name: "Wool",
      sales_value: 54,
      machine_id: 21,
      inventory_id: 2,
      time_in_minute: 360,
      output_multiplier: 1,
    },
    {
      name: "Bacon",
      sales_value: 50,
      machine_id: 19,
      inventory_id: 2,
      time_in_minute: 240,
      output_multiplier: 1,
    },
    {
      name: "Cookie",
      sales_value: 104,
      machine_id: 3,
      inventory_id: 2,
      time_in_minute: 60,
      output_multiplier: 1,
    },
    {
      name: "Brown Sugar",
      sales_value: 32,
      machine_id: 7,
      inventory_id: 2,
      time_in_minute: 17,
      output_multiplier: 1,
    },
  ]);
}
