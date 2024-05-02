import { Knex } from "knex";

interface IUser {
  id: number;
  name: string;
  email: string;
  password?: string;
  active: boolean;
}

class UserModel {
  private tableName = 'users';
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async findById(id: number): Promise<IUser | undefined> {
    return this.knex(this.tableName).where({ id }).first();
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    return this.knex(this.tableName).where({ email }).first();
  }

  async create(user: Partial<IUser>): Promise<IUser | any[]> {
    return this.knex(this.tableName).insert(user).returning('*');
  }

  async update(id: number, user: Partial<IUser>): Promise<IUser | undefined> {
    await this.knex(this.tableName).where({ id }).update(user);
    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.knex(this.tableName).where({ id }).del();
  }
}

export { UserModel };
export type { IUser };
