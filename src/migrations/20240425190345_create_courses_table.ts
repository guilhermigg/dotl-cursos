import type { Knex } from "knex";


export async function up(knex: Knex) : Promise<void> {
    return knex.schema.createTable('courses', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('thumbnail');
        table.integer('price');
        table.text('description');
        table.boolean('active');
        table.timestamps(true, true); 
    });
};


export async function down(knex: Knex) : Promise<void> {
    return knex.schema.dropTableIfExists('courses');
};
