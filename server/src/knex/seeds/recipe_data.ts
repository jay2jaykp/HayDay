import { Knex } from "knex";
import { recipe_table } from "../../utils/constants";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(recipe_table).del();

  // Inserts seed entries
  await knex(recipe_table).insert([
    { product_id: 3, ingredient_id: 3, ingredient_multiplier: 1 },
    { product_id: 4, ingredient_id: 4, ingredient_multiplier: 1 },
    { product_id: 5, ingredient_id: 5, ingredient_multiplier: 1 },
    { product_id: 6, ingredient_id: 6, ingredient_multiplier: 1 },
    { product_id: 7, ingredient_id: 7, ingredient_multiplier: 1 },
    { product_id: 8, ingredient_id: 8, ingredient_multiplier: 1 },
    { product_id: 9, ingredient_id: 9, ingredient_multiplier: 1 },
    { product_id: 10, ingredient_id: 10, ingredient_multiplier: 1 },
    { product_id: 11, ingredient_id: 11, ingredient_multiplier: 1 },
    { product_id: 12, ingredient_id: 12, ingredient_multiplier: 1 },
    { product_id: 13, ingredient_id: 8, ingredient_multiplier: 1 },
    { product_id: 13, ingredient_id: 12, ingredient_multiplier: 2 },
    { product_id: 14, ingredient_id: 4, ingredient_multiplier: 2 },
    { product_id: 14, ingredient_id: 8, ingredient_multiplier: 1 },
    { product_id: 15, ingredient_id: 5, ingredient_multiplier: 2 },
    { product_id: 15, ingredient_id: 12, ingredient_multiplier: 1 },
    { product_id: 16, ingredient_id: 4, ingredient_multiplier: 3 },
    { product_id: 16, ingredient_id: 12, ingredient_multiplier: 1 },
    { product_id: 17, ingredient_id: 4, ingredient_multiplier: 1 },
    { product_id: 17, ingredient_id: 8, ingredient_multiplier: 1 },
    { product_id: 17, ingredient_id: 5, ingredient_multiplier: 2 },
    { product_id: 18, ingredient_id: 4, ingredient_multiplier: 3 },
    { product_id: 21, ingredient_id: 8, ingredient_multiplier: 2 },
    { product_id: 22, ingredient_id: 14, ingredient_multiplier: 1 },
    { product_id: 21, ingredient_id: 22, ingredient_multiplier: 2 },
    { product_id: 23, ingredient_id: 13, ingredient_multiplier: 1 },
    { product_id: 26, ingredient_id: 17, ingredient_multiplier: 1 },
    { product_id: 29, ingredient_id: 16, ingredient_multiplier: 1 },
    { product_id: 30, ingredient_id: 15, ingredient_multiplier: 1 },
    { product_id: 31, ingredient_id: 4, ingredient_multiplier: 2 },
    { product_id: 31, ingredient_id: 22, ingredient_multiplier: 2 },
    { product_id: 32, ingredient_id: 11, ingredient_multiplier: 1 },
    { product_id: 31, ingredient_id: 32, ingredient_multiplier: 1 },
  ]);
}
