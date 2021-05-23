import { Knex } from "knex";
import {
  machine_table,
  order_list_table,
  order_table,
  // product_machine_table,
  product_table,
  recipe_table,
  inventory_table,
} from "../../utils/constants";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(inventory_table, (t) => {
    t.increments("id").unsigned().primary().notNullable(),
      t.string("name").notNullable().unique(),
      t.integer("capacity").notNullable();
  });

  await knex.schema.createTable(machine_table, (t) => {
    t.increments("id").unsigned().primary().notNullable(),
      t.string("name").notNullable().unique(),
      t.integer("total_slots").notNullable().defaultTo(2);
  });

  await knex.schema.createTable(product_table, (t) => {
    t.increments("id").unsigned().primary().notNullable(),
      t.string("name").notNullable().unique(),
      t.integer("sales_value").notNullable(),
      t.integer("machine_id").references(`${machine_table}.id`).notNullable(),
      t
        .integer("inventory_id")
        .references(`${inventory_table}.id`)
        .notNullable(),
      t.integer("time_in_minute").notNullable(),
      t
        .integer("output_multiplier")
        .notNullable()
        .defaultTo(1)
        .comment("how many product can be made at once");
  });

  await knex.schema.createTable(order_table, (t) => {
    t.increments("id").unsigned().primary().notNullable(),
      t.string("name").notNullable(),
      t.integer("value_amount").notNullable(),
      t.integer("stars").notNullable();
  });

  await knex.schema.createTable(order_list_table, (t) => {
    t.increments("id").unsigned().primary().notNullable(),
      t.integer("order_id").references(`${order_table}.id`).notNullable(),
      t.integer("product_id").references(`${product_table}.id`).notNullable(),
      t.integer("product_multiplier").notNullable().defaultTo(1);
  });

  await knex.schema.createTable(recipe_table, (t) => {
    t.increments("id").unsigned().primary().notNullable(),
      t.integer("product_id").references(`${product_table}.id`).notNullable(),
      t
        .integer("ingredient_id")
        .references(`${product_table}.id`)
        .notNullable(),
      t.integer("ingredient_multiplier").notNullable().defaultTo(1);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(recipe_table);
  await knex.schema.dropTableIfExists(order_list_table);
  await knex.schema.dropTableIfExists(order_table);
  await knex.schema.dropTableIfExists(product_table);
  await knex.schema.dropTableIfExists(machine_table);
  await knex.schema.dropTableIfExists(inventory_table);
}
