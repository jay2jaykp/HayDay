import { Knex } from "knex";
import { machine_table } from "../../utils/constants";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(machine_table).del();

  // Inserts seed entries
  await knex(machine_table).insert([
    { name: "Feed Mill", total_slots: 8 },
    { name: "Smelter", total_slots: 9 },
    { name: "Bakery", total_slots: 5 },
    { name: "Popcorn Pot", total_slots: 5 },
    { name: "Pie Oven", total_slots: 5 },
    { name: "Cake Oven", total_slots: 5 },
    { name: "Sugar Mill", total_slots: 5 },
    { name: "BBQ Grill", total_slots: 5 },
    { name: "Juice Press", total_slots: 5 },
    { name: "Ice Cream Maker", total_slots: 4 },
    { name: "Loom", total_slots: 4 },
    { name: "Honey Extractor", total_slots: 2 },
    { name: "Jam Maker", total_slots: 4 },
    { name: "Sewing Machine", total_slots: 3 },
    { name: "Dairy", total_slots: 5 },
    { name: "Field", total_slots: 72 },
  ]);
}
