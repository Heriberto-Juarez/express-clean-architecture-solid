import { User } from "../domain/User";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";

import sequelize from "sequelize";
import db from "./database";

// Define the Sequelize model for the User entity
const UserModel = db.define('user', {
    id: {
      type: sequelize.DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
});

export class UserRepository implements UserRepositoryInterface {
    async save(user: User): Promise<void> {
        await UserModel.create({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }
    async findByEmail(email: string): Promise<User | null> {
      const user = await UserModel.findOne({
        where: {
          email: email,
        }
      });
      return user ? user.toJSON() as User : null;
    }
}