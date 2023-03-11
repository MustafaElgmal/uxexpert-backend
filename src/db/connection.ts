import { Component } from './../entities/component';
import { User } from './../entities/user';
import { Code } from './../entities/code';
import { Category } from './../entities/category';
import { DataSource } from "typeorm";
export const connection = async (port: string | number) => {
  const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "db.erxtrzbvuyphhjmglfuq.supabase.co",
    port: 5432,
    username: "postgres",
    password: "DM7m8rMfngjTg3J6",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User,Category,Code,Component],
  });
  PostgresDataSource.initialize()
    .then(() => console.log(`Server is running on port: ${port}`))
    .catch((e) => console.log(e));
};