import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('courses', function (table) {
    table.integer('teacher_id').unsigned();
    table.foreign('teacher_id').references('id').inTable('users');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('courses', function (table) {
    table.dropForeign(['teacher_id']);
    table.dropColumn('teacher_id');
  });
}

