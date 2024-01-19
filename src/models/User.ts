import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';
import moment from 'moment-timezone';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public birthday!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;

  get formattedBirthday() {
    return moment(this.birthday).tz('America/Manaus').format('DD/MM/YYYY');
  }
  get formattedCreatedAt() {
    return moment(this.createdAt).tz('America/Manaus').format('DD/MM/YYYY HH:mm:ss');
  }
  get formattedUpdatedAt() {
    return moment(this.updatedAt).tz('America/Manaus').format('DD/MM/YYYY HH:mm:ss');
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Users',
  sequelize: sequelize,
});
