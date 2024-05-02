import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").insert([
        { name: "user user", email: "user@email.com", password: "helloworld", active: true }
    ]);
};
