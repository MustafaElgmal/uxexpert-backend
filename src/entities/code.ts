import { Component } from "./component";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
@Entity()
export class Code extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  code: string;
  @ManyToOne(() => Component, (component) => component.codes)
  component: Component;
}
