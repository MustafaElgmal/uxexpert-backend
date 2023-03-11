import { Component } from "./component";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
@Entity()
export class Code {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  code: string;
  @ManyToOne(() => Component, (component) => component.codes)
  component: Component;
}
