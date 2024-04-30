import {Knex} from 'knex';

interface ICourse {
  id: number;
  title: string;
  description: string;
  teacher: string;
  price: number;
  active: boolean;
}

class CourseModel {
  private tableName = 'courses';
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async findById(id: number): Promise<ICourse | undefined> {
    return this.knex(this.tableName).where({ id }).first();
  }

  async create(course: Partial<ICourse>): Promise<ICourse | any[]> {
    return this.knex(this.tableName).insert(course).returning('*');
  }

  async update(id: number, course: Partial<ICourse>): Promise<ICourse | undefined> {
    await this.knex(this.tableName).where({ id }).update(course);
    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.knex(this.tableName).where({ id }).del();
  }
}

export { CourseModel };
export type { ICourse };
