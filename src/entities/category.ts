import { Component } from './component';
import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm"
@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @OneToMany(()=>Component,(component)=>component.category)
    components:Component[]
}