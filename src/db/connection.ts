import { Component } from './../entities/component';
import { Code } from './../entities/code';
import { Category } from './../entities/category';
import { User } from './../entities/user';
import { DataSource } from "typeorm";
export const connection = async (port: string | number) => {
  const PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.DBHOST!,
    port: +process.env.DBPORT!,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
     User,
     Category,
     Code,
     Component
    ],
  });
  PostgresDataSource.initialize()
    .then(() => console.log(`Server is running on port: ${port}`))
    .catch((e) => console.log(e));
};