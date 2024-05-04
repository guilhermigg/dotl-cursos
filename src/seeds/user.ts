import { Knex } from "knex";
import { hashPassword } from "../app/api/helpers/bcryptHandler";

export async function seed(knex: Knex): Promise<void> {
    const hashedPassword = await hashPassword("admin123")
    await knex("users").insert([
        { name: "Admin User", email: "user@email.com", password: hashedPassword, role: "1", active: true }
    ]);
};
