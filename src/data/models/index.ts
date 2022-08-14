import { Sequelize } from 'sequelize-typescript';
import { Environment } from '../../config';
import { User } from './User';
import { Token } from './Token';

const {
  database, username, password, host,
} = Environment.DB_CONFIG;

const sequelize = new Sequelize({
  database,
  username,
  password,
  host,
  dialect: 'postgres',
  models: [`${__dirname}/**/*.index.ts`],
});

sequelize.addModels([
  User,
  Token,
]);

const DB = {
  sequelize,
  Sequelize,
};

export default DB;
