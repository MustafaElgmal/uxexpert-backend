import { Code } from './code';
import { Category } from './category';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany, BaseEntity } from "typeorm"

@Entity()
export class Component extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    imgUrl:string
    @ManyToOne(()=>Category,(category)=>category.components)
    category:Category
    @OneToMany(()=>Code,(code)=>code.component)
    codes:Code[]
}