import { Knex } from "knex";
import { inventory_table } from "../../utils/constants";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(inventory_table).del();

  // Inserts seed entries
  await knex(inventory_table).insert([
    { name: "Silo Storage", capacity: 475 },
    { name: "Barn Storage", capacity: 400 },
  ]);
}
