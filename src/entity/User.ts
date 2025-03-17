import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity('users')
class User extends BaseEntity {
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    active: boolean;
}

export default User;