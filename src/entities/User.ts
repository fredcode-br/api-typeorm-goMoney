import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import Category from "./Category";

@Entity('users')
class User extends BaseEntity {
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    active: boolean;    

    @OneToMany(() => Category, category => category.user)
    categories: Category[];
}

export default User;