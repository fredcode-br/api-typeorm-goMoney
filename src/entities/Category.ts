import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import User from "./User";

@Entity('categories')
class Category extends BaseEntity {

@Column()
description: string

@ManyToOne(() => User)
@JoinColumn({ name: 'user_id' })
user: User;
}

export default Category;