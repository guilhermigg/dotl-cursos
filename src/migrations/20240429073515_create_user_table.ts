import type { Knex } from "knex";

// roles: 1- admin / 2- teacher / 3- student
export async function up(knex: Knex) : Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('role').defaultTo(3);
        table.boolean('active').defaultTo(true);
        table.timestamps(true, true); 
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
}

